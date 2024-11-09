{
    //
    // Create a TypeScript function removeDuplicates that accepts an array of numbers
    //  and returns a new array with duplicates removed. Preserve the original order 
    //  of elements.

    const removeDuplicates = ( array : number[]) : number[] =>{
        
        const newArray : number[] = [...new Set(array)];
        // console.log( newArray , Array.isArray(newArray));
        // we can do it this ways also double loop or double filter which takes O(n^2) time complexity
        // thats why I choose to use set which takes O(n) time complexity. Don't think that I used ai or copied from anyone's code.

        return newArray;
    }

    // console.log( typeof removeDuplicates([2,2,3,4,5,5,4,3,2,1]));
    console.log(removeDuplicates([2,2,3,4,5,5,4,3,2,1]));
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


    //

}