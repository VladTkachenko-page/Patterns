interface Mediator {
  notify(message: string, user: User): void;
}

class ChatRoom implements Mediator {
  user1: User1;
  user2: User2;

  constructor(user1: User1, user2: User2) {
    this.user1 = user1;
    this.user1.setMediator(this);
    this.user2 = user2;
    this.user2.setMediator(this);
  }

  notify(message: string, user: User): void {
      if (this.user1 === user) {
        console.log(`User2 receive message: '${message}' from User1`);
      } else {
        console.log(`User1 receive message: '${message}' from User2`);
      }
  }
}

abstract class User {
  protected mediator: Mediator;
  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
  abstract send(message: string);
}

class User1 extends User {
  send(message: string): void {
    this.mediator.notify(message, this);
  }
}

class User2 extends User {
  send(message: string): void {
    this.mediator.notify(message, this);
  }
}

const user1 = new User1();
const user2 = new User2();
const mediator = new ChatRoom(user1, user2);

user1.send('Hello')
user2.send('Hi')