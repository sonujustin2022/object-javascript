const salesData = [
  { city: "New York", sales: 5000 },
  { city: "Los Angeles", sales: 7000 },
  { city: "Chicago", sales: 6000 },
  { city: "New York", sales: 8000 },
  { city: "Los Angeles", sales: 8500 },
  { city: "Chicago", sales: 9000 },
  { city: "Houston", sales: 4000 },
  { city: "Houston", sales: 5500 },
];

// Print each city with its highest sales value

let highestSales = {};

salesData.forEach((eachData)=>{
    let currCity = eachData.city;
    let currSales = eachData.sales;

    if(Object.hasOwn(highestSales,currCity)){
        if(currSales>highestSales[currCity]){
             highestSales[currCity] = currSales;
        }

    }else {
        highestSales[currCity] = currSales;
    }
});

console.log(highestSales);