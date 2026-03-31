const employeeAttendance = [
  { employee: "John", status: "Present" },
  { employee: "Mary", status: "Absent" },
  { employee: "John", status: "Present" },
  { employee: "Mary", status: "Present" },
  { employee: "Steve", status: "Present" },
  { employee: "Steve", status: "Absent" },
  { employee: "Mary", status: "Present" },
  { employee: "John", status: "Absent" },
  { employee: "Ameer", status: "Absent" },
];

// Question: Print how many days each employee was "Present".


let empAttCount = {};

employeeAttendance.forEach((eachAtt)=>{
    let currEmp = eachAtt.employee;
    let currStatus = eachAtt.status;
    
    if(Object.hasOwn(empAttCount,currEmp)){
        if(currStatus == "Present" ){
             empAttCount[currEmp] += 1;
        }

    }else{
        if(currStatus == "Present" ){
            empAttCount[currEmp] = 1;
        }else{
           empAttCount[currEmp] = 0; 
        }
    }

});

console.log(empAttCount);