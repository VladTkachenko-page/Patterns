class UALanguage {
  public request(): string {
      return 'Мені тринадцятий минало';
  }
}

class ForeignLanguage {
  public specificRequest(): string {
      return 'I was herding lambs outside the village';
  }
}

class Adapter extends UALanguage {
  private ForeignLanguage: ForeignLanguage;

  constructor(ForeignLanguage: ForeignLanguage) {
      super();
      this.ForeignLanguage = ForeignLanguage;
  }

  public request(): string {
      return `Adapter: (TRANSLATED): Я пас ягнята за селом`;
  }
}

const ua = new UALanguage();
const en = new ForeignLanguage();
const adapter = new Adapter(en);
console.log(ua.request());
console.log(en.specificRequest());

console.log(adapter.request());