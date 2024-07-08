interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

abstract class Shape {
  constructor(public properties: ShapeProperties) {}
  abstract clone(): Shape;
}

class Rectangle extends Shape {
  constructor(
    public properties: ShapeProperties,
    public width: number,
    public height: number
  ) {
    super(properties);
  }
  public clone(): Shape {
    const clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };
    return new Rectangle(clonedProperties, this.width, this.height);
  }
}

class Circle extends Shape {
  constructor(properties: ShapeProperties, public radius: number) {
    super(properties);
  }

  public clone(): Shape {
    const clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };

    return new Circle(clonedProperties, this.radius);
  }
}

const blueRectangle = new Rectangle(
  {
    color: "blue",
    x: 5,
    y: 10,
  },
  20,
  10
);

const redRectangle = blueRectangle.clone();
redRectangle.properties.color = "red";
