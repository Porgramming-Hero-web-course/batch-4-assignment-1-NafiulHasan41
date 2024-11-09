{   
    // Write a TypeScript function sumArray that takes an array of numbers 
    // and returns the sum of all elements in the array.
    //

    const sumArray = (array : number[] ) : number => {

        return array.reduce((sum, step) => sum + step, 0);
    }

    console.log(  sumArray([1,2,3,4,5]));
    console.log(sumArray([3,4,5]));

    //
}