{
    //Define a union type Circle and Rectangle, where each type has a unique shape property.
    // Create a function calculateShapeArea that uses type guards to calculate the area
    // based on the shape type.

    type Circle ={
        shape : 'circle';
        radius :number;
    };
    type Rectangle = {
        shape : 'rectangle';
        width : number;
        height : number;
    }

    type Shape = Circle | Rectangle;
    
    // function 
    const calculateShapeArea = (shape : Shape) : number => {
        if(shape.shape === 'circle'){
            return Number((Math.PI * shape.radius * shape.radius).toFixed(2));
        }else {
            return Number((shape.width * shape.height).toFixed(2));
        }
        // as we use Shape type so we can not assign any other shape than circle and rectangular
        // so we don't need to check for other shapes.
      
    }
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });



    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });

    console.log(circleArea);
    console.log(rectangleArea);


    //

}