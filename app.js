console.log("hi");


//GLOBAL VARIABLES

let squares = document.querySelectorAll(".square")
let arrMatch = [];
let ArrLength = 2;


 const checkMatches = () => {
  for (let i=0; i<ArrLength; i++){
   if(arrMatch[0]==arrMatch[1] ==!undefined)
   console.log("win")

   //drogoWin = document.createElement(img)
   //console.log(arrMatch[0])  
  //document.getElementById("drogo2").style.display = "block";
  //document.getElementById("drogo0").style.display = "block";
}
 }
// while (arrMatch.length <= 2) {
//   arrMatch.push("")
// }

//changing pic on div0
let div0 = document.getElementById("div0");
let drogoPic = document.getElementById("drogo0");



let changeDiv0 = (e) => {
    div0.appendChild(drogoPic);
    div0.classList.add("drogo")
  setTimeout(function () {
    document.getElementById("drogo0").style.display = "block";
  }, 1000);
  setTimeout(function () {
    document.getElementById("drogo0").style.display = "none";
  }, 3000);
  arrMatch.push(div0.classList[1])
  console.log(e.target)
  console.log(e.type)
  console.log(arrMatch)
  checkMatches()
};


//this has info about div2

let div2 = document.getElementById("div2");
let drogoPic2 = document.getElementById("drogo2");

let changeDiv2 = (e) => {
    div2.appendChild(drogoPic2);
    div2.classList.add("drogo")
    setTimeout(function () {
        document.getElementById("drogo2").style.display = "block";
    }, 1000);
    setTimeout(function () {
        document.getElementById("drogo2").style.display = "none";
    }, 3000);
    arrMatch.push(div2.classList[1])
    console.log(e.target)
    console.log(e.type)
    console.log(arrMatch)
    checkMatches()
}


//winning conditionals

// document.addEventListener("click", function (e){
//     for(let i=0; i<squares.length; i++)
//     if (event.target.matches("[drogo]")){
//             alert("hi")
//         }
//  }) 
//  const winningMatches = (e) =>{
//     if (e.target == div0 || e.target== div2){
//         alert("this worked")
//  }
//  }
//     for(let i=0; i<squares.length; i++){
//     if (squares[i].classList.contains("drogo")) {
//             alert("this worked")
//     }
// }
// }




// const winningMatches = () =>{
//     if (e.target == div0 && event.target==div2)
//             alert("this worked")
//     }




//put it in the dom

document.addEventListener("DOMContentLoaded", () => {
    div0.addEventListener("click", changeDiv0);
    div2.addEventListener("click", changeDiv2);

});

//append drogo to div0. but hide it. then set an add event listener for a click. once it is clicked, set a time out of 3 seconds. 
//if div 0 and div 2 get clicked after each other than display the pics, aka change the img style to display block instead of none.




// set images to have same class. and then do a function with a conditional. if these two divs have the same class. then change the image style to block;