interface IButton {
  render(): void;
  onClick(f: Function): void;
}

interface ICheckbox {
  render(): void;
  toggle(): void;
}

interface IGUIFactory {
  createButton(): IButton;
  createCheckbox(button: IButton): ICheckbox; // here is the dependency
}

class WindowsButton implements IButton {
  render(): void {
    console.log("Render button in windows style");
  }

  onClick(f: Function): void {
    console.log("Windows button was clicked");
    f();
  }
}

class WindowsCheckbox implements ICheckbox {
  constructor(private button: IButton) {}

  render(): void {
    console.log("Render checkbox in windows style");
  }

  toggle(): void {
    this.button.onClick(() => console.log("Windows checkbox toggled"));
  }
}

class MacButton implements IButton {
  render(): void {
    console.log("Render button in Mac style");
  }

  onClick(f: Function): void {
    console.log("Mac button was clicked");
    f();
  }
}

class MacCheckbox implements ICheckbox {
  constructor(private button: IButton) {}

  render(): void {
    console.log("Render checkbox in Mac style");
  }

  toggle(): void {
    this.button.onClick(() => console.log("Mac checkbox toggled"));
  }
}

class WindowFactory implements IGUIFactory {
  createButton(): IButton {
    return new WindowsButton();
  }

  createCheckbox(button: IButton): ICheckbox {
    return new WindowsCheckbox(button);
  }
}

class MacFactory implements IGUIFactory {
  createButton(): IButton {
    return new MacButton();
  }

  createCheckbox(button: IButton): ICheckbox {
    return new MacCheckbox(button);
  }
}

// Client side code

function renderUI(factor: IGUIFactory) {
  const button = factor.createButton();
  const checkbox = factor.createCheckbox(button);

  button.render();
  checkbox.render();

  button.onClick(() => console.log("Button has been clicked"));

  checkbox.toggle();
}

renderUI(new WindowFactory());
