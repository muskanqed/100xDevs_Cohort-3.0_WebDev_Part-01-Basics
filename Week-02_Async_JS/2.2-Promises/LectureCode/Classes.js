// In javascript class is a blueprint of an object
// Blueprint is something like the property of that particular object that created
// Example: Rectangle(width,height,color)
class Rectangle {
  // constructor is the property
  constructor(width, height, color) {
    // Here this is rect
    this.width = width; // this is you getting access to that property of blueprint
    this.height = height;
    this.color = color;
  }

  // Function defined here are the methods
  area() {
    const area = this.width * this.height;
    return area;
  }

  paint() {
    console.log(`The color of Rectangle is: ${this.color}`);
  }
}

// When new is written the constructor is called automatically
// this variable gives access to the variable defined inside the class
const rect = new Rectangle(2, 3, "blue"); // creating a instance of the class Rectangle
const area = rect.area();
const paint = rect.paint();
console.log(area);
