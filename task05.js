const weatherData = [
  { district: "Thrissur", temp: 32 },
  { district: "Thiruvananthapuram", temp: 33 },
  { district: "Kozhikode", temp: 31 },
  { district: "Thrissur", temp: 28 },
  { district: "Kozhikode", temp: 27 },
  { district: "Ernakulam", temp: 26 },
  { district: "Ernakulam", temp: 35 },
  { district: "Thiruvananthapuram", temp: 29 },
];

// {thrissur:32,Thiruvananthapuram:33,Kozhikode:31,}

// print district with its highest temperature

let highestTemp = {};

weatherData.forEach((eachTemp)=>{
    let currDis = eachTemp.district;
    let currTemp = eachTemp.temp;
    
    if(Object.hasOwn(highestTemp,currDis)){
        if(currTemp>highestTemp[currDis]){
            highestTemp[currDis] = currTemp;
        }

    }else {
        highestTemp[currDis] = currTemp;
    }
});

// console.log(highestTemp);


// to print the highest temp among this

let highestTempArr  = Object.entries(highestTemp);
// console.log(highestTempArr);

let highTempDis = highestTempArr.reduce((accu,curr)=>accu[1]>curr[1]?accu:curr);

console.log(highTempDis);