import { Triangle } from './../src/triangle.js';
describe('Triangle', function() {

  it('It should test if a triangle is impossible', function(){
    let newTriangle = new Triangle(0, 1, 3);
    expect(newTriangle.isTriangle()).toEqual(false);
  });

  it('It should test what type of triangle', function(){
    let newTriangle = new Triangle(3, 3, 3);
    expect(newTriangle.triangleType()).toEqual("equilateral");
  });

  it('It should test what type of triangle', function(){
    let newTriangle = new Triangle(2, 3, 3);
    expect(newTriangle.triangleType()).toEqual("isosceles");
  });

  it('It should test what type of triangle', function(){
    let newTriangle = new Triangle(2, 3, 4);
    expect(newTriangle.triangleType()).toEqual("scalene");
  });
});
