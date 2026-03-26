

// display the word count of  each word {key : value}

sentance = "hello hai hello hai world";

let newArr = sentance.split(' ');

let countObj = {};

newArr.forEach(eachElm=>{
    if(Object.hasOwn(countObj,eachElm)){
        countObj[eachElm]+=1;
    }else{
        countObj[eachElm]=1;
    }
})

console.log(countObj);