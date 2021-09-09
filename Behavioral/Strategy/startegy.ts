interface FavoriteSport {
  play(): void;
}

class Soccer implements FavoriteSport {
  play(): void {
    console.log('Play soccer with friends');
  }
}

class Tennis implements FavoriteSport {
  play(): void {
    console.log('Play tennis with friends');
  }
}

class Hockey implements FavoriteSport {
  play(): void {
    console.log('Play hockey with friends');
  }
}

class Person {
  sport: FavoriteSport

  constructor(sport: FavoriteSport) {
    this.sport = sport
  }

  playSport(): void {
    this.sport.play();
  }
}

let vlad = new Person(new Soccer());
vlad.playSport()
vlad = new Person(new Hockey());
vlad.playSport()
vlad = new Person(new Tennis());
vlad.playSport()