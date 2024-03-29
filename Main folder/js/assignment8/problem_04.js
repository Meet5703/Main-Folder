class shape {
  draw() {
    console.log("Drawing a shape for draw select shape from subclasses");
  }
}

class circle extends shape {
  constructor(r) {
    this.r = r;
  }
  draw() {
    console.log(`Drawing a circle with radius ${this.r}`);
  }
}

class rectangle extends shape {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
  draw() {
    console.log(
      `Drawing a rectangle with width ${this.w} and height ${this.h}`
    );
  }
}

let s = new shape();
s.draw();
let c = new circle(10);
c.draw();
let r = new rectangle(10, 20);
r.draw();

//Polymorphism:
//              Polymorphism is the ability of an object to take on many forms. The most common use of polymorphism is in inheritance. By using polymorphism, you can perform a single action in many different ways. in this example we are using polymorphism to draw different shapes shape is parent class and circle and rectangle are child classes method of shape draw is overridden in circle and rectangle
