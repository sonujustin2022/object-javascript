const products = [
  { pid: 100, pName: "Apple", brand: "5G", price: 120000, display: "OLED" },
  { pid: 101, pName: "Samsung", brand: "4G", price: 90000, display: "AMOLED" },
  {
    pid: 102,
    pName: "OnePlus",
    brand: "4G",
    price: 75000,
    display: "Fluid AMOLED",
  },
  { pid: 103, pName: "Pixel", brand: "3G", price: 85000, display: "OLED" },
  {
    pid: 104,
    pName: "Xiaomi",
    brand: "3G",
    price: 40000,
    display: "Super AMOLED",
  },
];

// print product name only -

//  products.forEach((eachProd)=>{
//     console.log(eachProd.pName);
//  });


// print all mobile details whose display is oled :

// products.forEach((eachProd)=>{
//     if(eachProd.display == "OLED"){
//         console.log(eachProd);
//     }
// })




// print 3g mobile phone names :

// products.forEach(eachProd=>{
//     if(eachProd.brand == "3G"){
//         console.log(eachProd);
//     }
// })


// sort mobile based on price - sort

let sortedPrice = products.sort((sm,lg)=>sm.price-lg.price);
console.log(sortedPrice);


// print costly mobile price


// print low cost mobile