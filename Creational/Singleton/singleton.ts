class Singleton {
  private static instance: Singleton;

  private constructor() { }
  //commit
  //commit2
  public static getInstance(): Singleton {
      if (!Singleton.instance) {
          Singleton.instance = new Singleton();
      }
      return Singleton.instance;
  }
}

const s1 = new Singleton(); // error
const s2 = Singleton.getInstance();

