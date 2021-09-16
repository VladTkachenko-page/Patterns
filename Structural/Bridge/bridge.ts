class Page {
  protected theme: Theme;
  
  constructor(theme: Theme) {
    this.theme = theme;
  }

  getContent(): string {
    return "Page in " + this.theme.getColor()
  }
  setTheme(theme: Theme): void {
      this.theme = theme
  }
}

interface Theme {
  getColor(): string;
}

class DarkTheme implements Theme {
  getColor(): string  {
    return 'Dark Black'
  }
}

class WhiteTheme implements Theme {
  getColor(): string  {
    return 'White'
  }
}

const darkTheme = new DarkTheme();
const whiteTheme = new WhiteTheme();

const page = new Page(darkTheme);

console.log(page.getContent());
page.setTheme(whiteTheme);
console.log(page.getContent());
