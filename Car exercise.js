/*
  You're given an array of cars, iterate through each car and apply a 25%
  discount for the cars.price property of each car. 
  
  Set the discount to be the value for said property in each car. 
  
  The equation for setting a 25% discound is price * .75
*/
let cars = [
    {
      make: "Toyota",
      model: "Camry",
      year: 2022,
      color: "Silver",
      price: 30000
    },
    {
      make: "Honda",
      model: "Accord",
      year: 2022,
      color: "White",
      price: 35000
    },
    {
      make: "Tesla",
      model: "Model 3",
      year: 2021,
      color: "Red",
      price: 50000
    },
    {
      make: "Ford",
      model: "Mustang",
      year: 2022,
      color: "Black",
      price: 45000
    }
  ];

/*let priceTag = cars.price
  cars.price*/

   for (let i = 0; i < cars.length; i++){
    cars[i].price = cars[i].price * .75
    console.log(cars[i])

       }

 