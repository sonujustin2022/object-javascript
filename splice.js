let str = "i am a civil engineer";

let strArr = str.split(' ');

strArr.splice(3,2,"soft","developer") // it modifies the orginal array

console.log(strArr.join(' '))

