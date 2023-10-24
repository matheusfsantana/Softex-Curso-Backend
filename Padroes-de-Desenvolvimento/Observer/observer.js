const rl = require('readline-sync');

class Editor {
  constructor() {
    this.lines = [];
    this.listeners = [];
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  removeListener(listener) {
    const index = this.listeners.indexOf(listener);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }

  notifyListeners() {
    for (const listener of this.listeners) {
      listener.update(this.lines);
    }
  }

  insertLine(lineNumber, text) {
    if (lineNumber < 0 || lineNumber > this.lines.length) {
      throw new Error('Invalid line number');
    }
    this.lines.splice(lineNumber, 0, text);
    this.notifyListeners();
  }

  removeLine(lineNumber) {
    if (lineNumber < 0 || lineNumber >= this.lines.length) {
      throw new Error('Invalid line number');
    }
    this.lines.splice(lineNumber, 1);
    this.notifyListeners();
  }
}

class TextEditor extends Editor {
  constructor() {
    super();
    this.lines = [];
    this.addListener({
      update: (lines) => {
        console.log(`TextEditor updated: ${lines}`);
      },
    });
  }

  open() {
    console.log('TextEditor opened');
  }

  save() {
    console.log('TextEditor saved');
  }
}

const textEditor = new TextEditor();
textEditor.open();

let input = '';
while (input !== 'EOF') {
  input = rl.question('Digite uma linha de texto: ');
  if (input !== 'EOF') {
    textEditor.insertLine(textEditor.lines.length, input);
  }
}

textEditor.save();
console.log(textEditor.lines.join('\n'));
