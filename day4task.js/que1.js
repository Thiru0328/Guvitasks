 // THIRUGNANAM K
 //DAY4 TASK
 // JSON 
 var myDetails = {
    Name: "Thirugnanam K",
    DoB: "1995",
    City: "Tenkasi",
    Address: "Tirunelveli Dt,",
    MobileNumber: "82******15",
    BloodGroup: "B +ve"
}


// For loop

// for (initialization; condition; incrementation/decrementation) -> Arrays
// for...in -> for(var index in arrayName){} (or) for(var key in objName){}
// for...of -> for(var value of arrayName){}

// i++ -> i = i + 1
// i-- -> i = i - 1
var numbers = [10, 20 ,30, 40 ,50 ,60, 70, 80, 90, 100];

for(var i = 0; i < numbers.length; i++){
    // console.log('Index: ' , i);
    // console.log('Value: ', numbers[i])

    // console.log('Index: ' + i + "; Value: " + numbers[i]);

     console.log(`Index: ${i}; Value: ${numbers[i]}`);

};
//for loop
var obj = myDetails[i];
for(var i = 0; i < myDetails.length; i++) {
    obj+= myDetails[i]+ "";
}
   console.log(obj);

// for..in

for(var i in numbers){
    console.log(i) 
    console.log(numbers[i]) 
}

 for(var i in myDetails){
    console.log(i) // keys
    console.log(myDetails[i]) // values -> userDetails['name']
}

//for..off
 for(var value of numbers){
     console.log(value)
 }

 let text = "";
for (let x of myDetails[i]) {
 text += x + ""; 
}
 console.log(text);
 //myDetails.forEach(function() { console.log(i); });

//forEach

numbers.forEach((value) => {
    console.log('Value inside ForEach: ', value*2)
});

myDetails.forEach(() =>{
    console.log('key inside ForEach: ', myDetails["name"])
});

