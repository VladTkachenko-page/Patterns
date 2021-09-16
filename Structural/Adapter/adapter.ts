interface USB {
  connectWithUsbCable(): void;
}

class MemoryCard {
  public insert(): void {
    console.log('Карта памяти успешно вставлена!');
  }
  public copyData(): void {
    console.log('Данные скопированы на компьютер!');
  }
}

class Adapter implements USB {
  private memoryCard: MemoryCard;

  constructor(memoryCard: MemoryCard) {
      this.memoryCard = memoryCard;
  }

  connectWithUsbCable(): void {
    this.memoryCard.insert();
    this.memoryCard.copyData();
  }
}

const cardReader = new Adapter(new MemoryCard());
cardReader.connectWithUsbCable();