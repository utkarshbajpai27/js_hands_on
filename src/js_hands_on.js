/* multiline 
comment*/
//single line comment
function myfunction(){
    var myName; var a; a=7; var b; b=a; var c=9; var myFirstName="hello"; var
    myLastName="hello"; var d=1; var e=5; var f="I am a"; d /= 1; e/= 5; f =
    f + " String!"; var studlyCapVar; var properCamelCase; var titleCaseOver;
    studlyCapVar=10; properCamelCase="A String" titleCaseOver=9000; let catName ="Oliver"; let catSound = "Meow!"; const FCC = "freeCodeCamp"; let fact = "is
    cool!"; fact = "is awesome!"; console.log(FCC, fact); const sum = 10 + 10;
    const difference = 45 - 33;
    const product = 2.5 * 2.0;
    const quotient = 4.4 / 2.0; 
    let myVar = 87;
  myVar--;
  const myDecimal = 5.7;
  const remainder = 11%3;

  const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
  const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';
  var myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";
  const myStr4 = "This is the start."+" This is the end."; 
  let myStr5 = "This is the first sentence. ";
myStr5 += "This is the second sentence.";
const myName = "hello";
const myStr6 = "world" + myName + "and I am well!";

const someAdjective = "bye";
let myStr7 = "Learning to code is ";
myStr7 += someAdjective;
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName[lastName.length-2];
let myStr8 = "Jello World";
myStr8= "Hello World"; 

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";
const myArray = [["hello",5],[7]]; 
const myData=myArray[0];
myArray[0]=45;

const myArray2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData2 = myArray2[2][1];

  const myArray3= [["John", 23], ["cat", 2]];
myArray3.push(["dog",3]);
const removedFromMyArray = myArray3.shift();
myArray.unshift(["Paul", 35]);


const myList = [
    ["Chocolate Bar", 15],
    ["Chocolate Bar", 15],
    ["Chocolate Bar", 15],
    ["Chocolate Bar", 15],
    ["Chocolate Bar", 15]
    ];

function reusableFunction(){
  console.log("Hi World");
}
    reusableFunction();

    function functionWithArgs(para,nara){
        var result=para+nara;
        console.log(result);
        }
        functionWithArgs(5,7);

        function timesFive(para){
            return para*5;
    }

    let myGlobal=10; 

function fun1() {
  oopsGlobal=5;
}


function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

function myLocalScope() {
    let myVar=5;
 
   console.log('inside myLocalScope', myVar);
 }
 myLocalScope();
 console.log('outside myLocalScope', myVar);

 const outerWear = "T-Shirt";

 function myOutfit() {
   const outerWear="sweater";
   return outerWear;
 }
 
 myOutfit();

 let sum = 0;
function addThree() {
  sum = sum + 3;
}
function addFive(){
  sum = sum+ 5;
}
addThree();
addFive();


let processed = 2;

function processArg(num) {
  processed=processArg(7);
}


function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();;
     
   }
   function welcomeToBooleans() {
    return true; 
  }


  function trueOrFalse(wasThatTrue) {
    if(wasThatTrue){
      return "Yes, that was true"
    }
    return "No, that was false"
  }
  trueOrFalse(true);
  trueOrFalse(false);

  function testEqual(a,b) {
    if (typeof 10 ===typeof "12"){
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(12,"12");
  testEqual(12);
  testEqual("12");




}
 
