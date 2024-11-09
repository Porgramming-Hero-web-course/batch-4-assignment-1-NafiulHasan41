{
    // Write a generic function getProperty that takes an object and a property name as 
    // arguments and returns the property value. Add a constraint to ensure the property
    //  name exists on the object.

    const getProperty = <T, K extends keyof T>(obj : T, key : K) : T[K] => {
        //<T, K extends keyof T> this is constraint that ensure the property name exists on the object.
        return obj[key];
    }
    // Sample Input:
    const person = { name: "Alice", age: 30 };
    const person2 = { name: "Alice", age: 30, gender:"Female"  };
    console.log(getProperty(person, "name"));
    console.log(getProperty(person2, "gender"));

    //

}