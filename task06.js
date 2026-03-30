// Find the first recursive character from the given pattern = "ABCCBAD"
// ans: B

let str = "ABBCCBAD";

let strArr = str.split('');

let recuschar = {};

// strArr.forEach((eachChar)=>{
//     if (Object.hasOwn(recuschar,eachChar)){

//         console.log(eachChar, " is the first recursive character")
//     }else{
//         recuschar[eachChar] = 1;
//     }
// })


for(let char of strArr){
    if (Object.hasOwn(recuschar,char)){
        console.log(char, " is the first recursive")
        break;

    }else {
        recuschar[char]  = 1;
    }
}
