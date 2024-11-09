# The significance of union and intersection types in typescript

## So , todays topic is union and intersection types in typescript , which is one of the important and most used types in typescript.

### Before we discuss about them at first we need to know about them

* **Union types :** Union type help a variable to use multiple type. But at a time only one type can be used. It increase the flexibility of the variable to use multiple type.
   * *Example:* 
   ` type student = { name:string;roll:number }  `
   ` type teacher = {name:string , id:number}`
   `type person = student | teacher`

     So, this is teh example of type union. We can see that type person can be both student and teacher. When we use dynamic component in web development, then we some time does not know what type will come, but we know these two or there type will come so we can do that using union type. 

 * **Intersection Type :** This type is whole different than union. We know about interface. The interface has a property calls extends. By using that we can add new property to the interface. But in type we can not do that. So, when we try to merge different type data and want to make a new type of data then the intersection type give us upper hand. 
      * *Example:* 
   ` type student = { name:string;roll:number }  `
   ` type teacher = {name:string , id:number}`
   `type person = student & teacher`
    
   Here we can see that person type has all the property type name, roll, id . So, when we want merge the student and teacher then intersection type works best.

So, both types are important in typescript for type safety and used by most the developer. It enables better code structure and developers can define more precise types for their variables, functions, and data structures.

 


 