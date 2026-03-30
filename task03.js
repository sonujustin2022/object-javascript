let str =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum like";

// find the duplicating words in the string
// duplicate elements in an array


let strArr = str.split(' ');
 
let wordCount = {};
let secondObj = {};



strArr.forEach(eachEl=>{
        if(Object.hasOwn(wordCount,eachEl)){
        secondObj[eachEl]=1;
    }else{
        wordCount[eachEl] = 1;
    }
})

let duplicate = Object.keys(secondObj);
console.log(duplicate);



