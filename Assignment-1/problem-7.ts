{
    
   //

   // did not add the question because it was taking some time to write the question.
   class Car {
    constructor(public make: string, public model:  string , public year:number ){};
    
    getCarAge(){
        const currentYear = new Date().getFullYear();
        if(this.year > currentYear){
            return 'This is future year and car is not made yet';
        }
        return currentYear - this.year;
    }
   }
   
    const car = new Car("Honda", "Civic", 2020);
    console.log(car.getCarAge());




    //


}