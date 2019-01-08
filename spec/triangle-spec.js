import { Triangle } from './../src/triangle.js';
describe('Triangle', function() {

  it('should test if a triangle is possible', function(){
    let newTriangle = new Triangle(0, 1, 3);
    expect(newTriangle.isTriangle()).toEqual(false);
  });
});
