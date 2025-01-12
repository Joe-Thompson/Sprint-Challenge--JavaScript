// 1. Copy and paste your prototype in here and refactor into class syntax.

//prototype function converted to class 
class CuboidMaker {
  constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  };
  volume() {
    return this.length * this.width * this.height;
  };
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  };
};

//stretch goal to create an extendsion of CuboidMaker
class CubeMaker extends CuboidMaker {
  constructor(cubeAttributes) {
    super(cubeAttributes);
  };
  cubeVolume() {
    return this.length * 3;
  };
  cubeSurfaceArea() {
    return 6 * (this.length * this.length);
  };
};

//cuboid object to test CuboidMaker class
const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5,
});

//stretch goal cube object to test new CubeMaker class
const cube = new CubeMaker({
  length: 4,
  width: 5,
  height: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
//console.logs to test CubeMaker class
console.log(cube.cubeVolume());//12
console.log(cube.cubeSurfaceArea());//96

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.