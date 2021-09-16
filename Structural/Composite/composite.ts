abstract class Component {
  protected parent: Component;
  
  public setParent(parent: Component) {
    this.parent = parent;
  }

  public getParent(): Component {
      return this.parent;
  }
  public abstract operation(): string;
}


class Leaf extends Component {
  public operation(): string {
      return "Leaf";
  }
}

class Composite extends Component {

  private children: Component[] = [];

  public add(component: Component): void {
    this.children.push(component);
    component.setParent(this);
  }

  public remove(component: Component): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);
    component.setParent(null);

  }

  public operation(): string {
    const results = [];
    for (const child of this.children) {
        results.push(child.operation());
    }

    return `Branch(${results.join('+')})`;
    }
}

const tree = new Composite();
const branch1 = new Composite();
const branch2 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
console.log(tree.operation());