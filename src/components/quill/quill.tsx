import { Component, ComponentDidLoad, ComponentDidUnload, Element, Event, EventEmitter, Prop, Watch } from '@stencil/core';

import Quill from 'quill';

@Component({
  tag: 'quill-component',
  scoped: true,
  shadow: false
})
export class QuillComponent implements ComponentDidLoad, ComponentDidUnload {

  @Event() onInitialised: EventEmitter<any>;
  @Event() onContentChanged: EventEmitter<{
    editor: any
    content: any
    text: string
    html: string
    delta: any
    oldDelta: any
    source: string
  }>;
  @Event() onSelectionChanged: EventEmitter<{
    editor: any
    range: any
    oldRange: any
    source: string
  }>;

  @Element() wrapperElement: HTMLElement;

  @Prop() format: 'object' | 'html' | 'text' | 'json' = 'html';
  @Prop() bounds: HTMLElement | string;
  @Prop() content: string;
  @Prop() debug: string = 'warn';
  @Prop() formats: string[];
  @Prop() modules: { [index: string]: Object };
  @Prop() placeholder: string = 'Insert text here ...';
  @Prop() readOnly: boolean;
  @Prop() scrollingContainer: HTMLElement | string;
  @Prop() strict: boolean = true;
  @Prop() styles: any = {};
  @Prop() theme: string;
  @Prop() customToolbarPosition: 'top' | 'bottom' = 'top';

  quillEditor: any;
  editorElement: HTMLDivElement;
  private defaultModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction

      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [
        { color: [].slice() },
        { background: [].slice() }
      ], // dropdown with defaults from theme
      [{ font: [].slice() }],
      [{ align: [].slice() }],

      ['clean'], // remove formatting button

      ['link', 'image', 'video'] // link and image, video
    ]
  }

  selectionChangeEvent: any;
  textChangeEvent: any;

  setEditorContent(value: any) {
    if (this.format === 'object') {
      this.quillEditor.setContents(value, 'api');
    } else if (this.format === 'html') {
      const contents = this.quillEditor.clipboard.convert(value);
      this.quillEditor.setContents(contents, 'api');
    } else if (this.format === 'text') {
      this.quillEditor.setText(value);
    } else if (this.format === 'json') {
      try {
        this.quillEditor.setContents(JSON.parse(value), 'api');
      } catch (e) {
        this.quillEditor.setText(value, 'api');
      }
    } else {
      this.quillEditor.setText(value, 'api');
    }
  }

  getEditorContent() {
    const text = this.quillEditor.getText();
    const content = this.quillEditor.getContents();

    let html: string | null = this.editorElement.children[0].innerHTML;
    if (html === '<p><br></p>' || html === '<div><br><div>') {
      html = '';
    }

    if (this.format === 'object') {
      return content;
    } else if (this.format === 'html') {
      return html;
    } else if (this.format === 'text') {
      this.quillEditor.getText();
    } else if (this.format === 'json') {
      try {
        return JSON.stringify(content);
      } catch (e) {
        return text;
      }
    } else {
      return text;
    }
  }

  componentDidLoad() {
    let modules: any = this.modules || this.defaultModules;

    const toolbarElem = this.wrapperElement.querySelector(
      '[slot="quill-toolbar"]'
    );
    if (toolbarElem) {
      modules['toolbar'] = toolbarElem;
    }

    if (this.styles) {
      Object.keys(this.styles).forEach((key: string) => {
        this.editorElement.style[key] = this.styles[key];
      });
    }

    this.quillEditor = new Quill(this.editorElement, {
      debug: this.debug,
      modules: modules,
      placeholder: this.placeholder,
      readOnly: this.readOnly || false,
      theme: this.theme || 'snow',
      formats: this.formats,
      bounds: this.bounds ? (this.bounds === 'self' ? this.editorElement : this.bounds) : document.body,
      strict: this.strict,
      scrollingContainer: this.scrollingContainer
    });

    if (this.content) {
      this.setEditorContent(this.content);

      this.quillEditor['history'].clear();
    }

    this.onInitialised.emit(this.quillEditor);

    this.selectionChangeEvent = this.quillEditor.on(
      'selection-change',
      (range: any, oldRange: any, source: string) => {
        this.onSelectionChanged.emit({
          editor: this.quillEditor,
          range: range,
          oldRange: oldRange,
          source: source
        });
      }
    );

    this.textChangeEvent = this.quillEditor.on(
      'text-change',
      (delta: any, oldDelta: any, source: string) => {
        const text = this.quillEditor.getText();
        const content = this.quillEditor.getContents();

        let html: string | null = this.editorElement.querySelector('.ql-editor').innerHTML;
        if (html === '<p><br></p>' || html === '<div><br><div>') {
          html = null;
        }

        this.onContentChanged.emit({
          editor: this.quillEditor,
          content,
          delta,
          html,
          oldDelta,
          source,
          text
        });
      }
    );
  }

  componentDidUnload() {
    if (this.selectionChangeEvent) {
      this.selectionChangeEvent.removeListener('selection-change');
    }
    if (this.textChangeEvent) {
      this.textChangeEvent.removeListener('text-change');
    }
  }

  @Watch('content')
  updateContent(newValue: any): void {
    const editorContents = this.getEditorContent();

    if (['text', 'html', 'json'].indexOf(this.format) > -1 && newValue === editorContents) {
      return null
    } else {
      let changed = false
      try {
        const newContentString = JSON.stringify(newValue)
        changed = JSON.stringify(editorContents) !== newContentString;
      } catch {
        return null
      }

      if (!changed) {
        return null
      }
    }

    this.setEditorContent(newValue)
  }

  @Watch('readOnly')
  updateReadOnly(newValue: boolean, oldValue: boolean): void {
    if (!this.quillEditor) {
      return;
    }
    if (newValue !== oldValue) {
      this.quillEditor.enable(!newValue);
    }
  }

  @Watch('placeholder')
  updatePlaceholder(newValue: string, oldValue: string): void {
    if (!this.quillEditor) {
      return;
    }
    if (newValue !== oldValue) {
      this.quillEditor.root.dataset.placeholder = newValue;
    }
  }

  @Watch('styles')
  updateStyle(newValue: object, oldValue: object): void {
    console.log(newValue, oldValue)
    if (!this.quillEditor) {
      return;
    }

    if (oldValue) {
      Object.keys(oldValue).forEach((key: string) => {
        this.editorElement.style[key] = '';
      });
    }
    if (newValue) {
      Object.keys(newValue).forEach((key: string) => {
        this.editorElement.style[key] = newValue[key];
      });
    }
  }

  render() {
    const editor = <div quill-element ref={(el: HTMLDivElement) => this.editorElement = el}></div>
    const elements = [<slot name="quill-toolbar" />]
    if (this.customToolbarPosition === 'bottom') {
      elements.unshift(editor)
    } else {
      elements.push(editor)
    }
    return (elements);
  }
}