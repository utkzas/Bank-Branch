// //  code will run from t->b , l->r
// // // to print
// // console.log("Hello BPIT:)");
// // //  variable declare
// // // undefined
// // //***** primitive Types=> undefined, number string boolean null*******
// // // let varName;
// // // // // Maths number 
// // varName=10;
// // // // string no char 
// // varName="corona sucks";
// // varName='corona sucks';
// // boolean
// // varName=true
// // null
// // varName=null;
// // console.log("current val",varName);
//  let num=11;
// // if(num%2==0){
// //   console.log(num,"is even")
// // }else{
// //   console.log(num,"is odd");
// // }
// // // for ,while ,switch 
// // for(let i=1;i<=num;i++){
// //   // same line
// //   process.stdout.write("num is" +i);
// //   console.log("num is" ,i);
// // }

// // non primitives
// // function 
// // function declaration
// function fn(x){
//   console.log("Hello");
//   return x+4;
// }
//  fn();
// //  let rVal=fn(8);
// // //  console.log("rValue",rVal);
// // // //  array -> todo list
// // // array declare

// let arr=[1,2,3,4,5,6,7,8,9];
// // console.log(arr);
// // console.log("``````````````````")
// // console.log("length",arr.length);
// // // add last 
// arr.push(12);
// // console.log(arr);
// // // remove Last 
// arr.pop();
// // // addFirst
// arr.unshift(16);
// // // removeFirst
// arr.shift();
// arr[3]=20;

// // // console.log(arr[3]); 
// // console.log("``````````````````");

// // c++=> array is a collection homogeneous data Type
// // js => array is collection of anything
// function hellofn(){
//   console.log("I am inside an array ye hai ans");
//   return "hello";
// }
// function hello2(){
//   console.log(" I am inside hello2");
//   return "hello2";
// }
// // hellofn();
// // arr[8]();

// console.log("bahar wala ","someval",hello2());
//  object 
// I am inisde an array ye hai ans
// I am inside hello2
// bahar wala "someval" hello2

// Array => collection of anything 
   
// Objects-> key :value pair of anything
  //  declare 
  // let obj={};
  // number boolean string ,array null
// JSON=> Javascript Object Notation => data storage format
  let cap={
    name:"Steve",
    lastName:"rogers",
    isAvenger:true,
    movies:["first avenger","winter soldier","civil war"],
    age:45,
    address:{
      state:"Newyork",
      city:"Manhatten"
    }
  }
  // get 
  // console.log(cap.isAvenger);
  // console.log(cap.movies[1]);
  // console.log(cap.address.city);
// console.log(cap.age);
  // set /update
  // cap.age=46;
  console.log(cap);
console.log("``````````````")
// console.log(cap.age);

cap.friends=["peter","tony","bruce"];
console.log(cap);

// delete
delete cap.address;
console.log(cap);
