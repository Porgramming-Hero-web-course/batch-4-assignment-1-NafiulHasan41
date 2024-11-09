{
    // Define an interface Profile with properties name, age, and email. 
    // Create a function updateProfile that accepts an object of type Profile and an object of
    //  type Partial representing the updates. The function should return the updated profile.
      
    interface Profile {
        name:string;
        age:number;
        email:string;
    }
    
    // I tried to make another type interface but  it was not working so I use type mapping.
    type partialProfile = {
        [k in keyof Profile] ?: Profile[k];
    }

    
    // we can also use built in Partial type in typescript.
    const updateProfile = (pro : Profile, updates : partialProfile) : Profile => {
        return {...pro, ...updates};
    }
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));
    console.log(updateProfile(myProfile, { name: 'Mac' }));



    //
}