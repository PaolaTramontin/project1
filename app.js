console.log("hi");

//GLOBAL VARIABLES

let squares = document.querySelectorAll(".square");
let arrMatch = [];
let arrMatch2= [];
let snowArr =[];
let snowArr2 =[];
let kahleesiArr =[]
let kahleesiArr2 =[]
let cerseiArr=[]
let cerseiArr2 =[]

let div0 = document.getElementById("div0");
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4= document.getElementById("div4")
let div5= document.getElementById("div5")
let div6= document.getElementById("div6")
let div7= document.getElementById("div7")
let div8= document.getElementById("div8")
let div9= document.getElementById("div9")
let div10= document.getElementById("div10")
let div11= document.getElementById("div11")

let drogoPic = document.getElementById("drogo0");
let drogoPic2 = document.getElementById("drogo2");
let snow1= document.getElementById("snow1")
let snow3= document.getElementById("snow3")
let kahleesi4= document.getElementById("kahleesi4")
let kahleesi7= document.getElementById("kahleesi7")
let cersei5= document.getElementById("cersei5")
let cersei11= document.getElementById("cersei11")

let makeItDifferent= document.createElement("p")
let makeItDifferentSnow= document.createElement("p")
let makeItDifferentKahleesi= document.createElement("p")
let makeItDifferentCersei= document.createElement("p")

//function for drogo match

// if(divId) if classlist[1] is the same but is not gimme alert radding event listener only once. how to temp remove event listener as soon as the div is clicked. if not match put the evvent back on.



//maybe try doing if arr 1 or 2. because i poushe diffeent numbers into all of them


const drogoSnow = () => {
  if (arrMatch.length === 1) {   //cheking for john and drogo
    if (snowArr.length === 1) {
      setTimeout(function () {
        alert("No Match. Hurry up! winter is Coming!");
      }, 1000);
      snowArr = [];
      snowArr2= [];
      arrMatch = [];
      arrMatch2 = [];
      kahleesiArr =[];
     kahleesiArr2 =[];
     cerseiArr =[];
     cerseiArr2 =[];
    }
  }
  if (arrMatch.length === 1) {      //checking for drogo and danny
    if (kahleesiArr.length === 1) {
      setTimeout(function () {
        alert("No Match. Hurry up! winter is Coming!");
      }, 1000);
      snowArr = [];
      snowArr2= [];
      arrMatch = [];
      arrMatch2 = [];
      kahleesiArr =[];
     kahleesiArr2 =[];
     cerseiArr =[];
     cerseiArr2 =[];
    }
  }
};


//longest way possibe to check for matches

const checkMatches = () => {
  for (let i = 0; i < arrMatch.length; i++) {
    drogoSnow()
    if (arrMatch[0] === arrMatch[1]) {
      if(arrMatch2[0] !== arrMatch2[1]){
      console.log("win drogo");
      setTimeout(function () {
        document.getElementById("drogo0").style.display = "block";
      }, 4000);
      setTimeout(function () {
        document.getElementById("drogo2").style.display = "block";
      }, 4000);
      setTimeout(function () {
        alert("Good Job! Match found (づ｡◕‿‿◕｡)づ");
      }, 2000);
      div0.removeEventListener('click', changeDiv0);
      div2.removeEventListener('click', changeDiv2);
      
      snowArr = [];
      snowArr2= [];
      arrMatch = [];
      arrMatch2 = [];
      kahleesiArr =[];
     kahleesiArr2 =[];
     cerseiArr =[];
     cerseiArr2 =[];
      } else {
        snowArr = [];
        snowArr2= [];
        arrMatch = [];
        arrMatch2 = [];
        kahleesiArr =[];
       kahleesiArr2 =[];
       cerseiArr =[];
     cerseiArr2 =[];
    }
  }
}
}

const checkMatchesSnow = () => {
  for (let i = 0; i <snowArr.length; i++) {
   drogoSnow()
    if (snowArr[0] === snowArr[1]) {
      if(snowArr2[0] !== snowArr2[1]){
      console.log("win snow");
      setTimeout(function () {
        document.getElementById("snow1").style.display = "block";
      }, 4000);
      setTimeout(function () {
        document.getElementById("snow3").style.display = "block";
      }, 4000);
      setTimeout(function () {
        alert("Good Job! here is a popular Jon Snow quote: They Were The Shields That Guarded The Realms Of Men.");
      }, 2000);
      div1.removeEventListener('click', changeDiv1);
      div3.removeEventListener('click', changeDiv3);
      
      snowArr = [];
      snowArr2= [];
      arrMatch = [];
      arrMatch2 = [];
      kahleesiArr =[];
      kahleesiArr2 =[];
      cerseiArr =[];
     cerseiArr2 =[];
      } else {
        setTimeout(function () {
          alert("Try again!");
        }, 2000);
        snowArr = [];
      snowArr2= [];
      arrMatch = [];
      arrMatch2 = [];
      kahleesiArr =[];
     kahleesiArr2 =[];
     cerseiArr =[];
     cerseiArr2 =[];
    }
  }
}
}

const checkMatchesKahleesi = () => {
  for (let i = 0; i <kahleesiArr.length; i++) {
   drogoSnow()
    if (kahleesiArr[0] === kahleesiArr[1]) {
      if(kahleesiArr2[0] !== kahleesiArr2[1]){
      console.log("win kahleesi");
      setTimeout(function () {
        document.getElementById("kahleesi4").style.display = "block";
      }, 4000);
      setTimeout(function () {
        document.getElementById("kahleesi7").style.display = "block";
      }, 4000);
      setTimeout(function () {
        alert("Dracarys! a Match has been made.");
      }, 2000);
      div4.removeEventListener('click', changeDiv1);
      div7.removeEventListener('click', changeDiv3);
      
      snowArr = [];
      snowArr2= [];
      arrMatch = [];
      arrMatch2 = [];
      kahleesiArr =[];
     kahleesiArr2 =[];
     cerseiArr =[];
     cerseiArr2 =[];
      } else {
        setTimeout(function () {
          alert("Try again!");
        }, 2000);
        snowArr = [];
        snowArr2 = [];
        arrMatch = [];
        arrMatch2 = [];
        kahleesiArr =[];
     kahleesiArr2 =[];
     cerseiArr =[];
     cerseiArr2 =[];
    }
  }
}
}

const checkMatchesCersei = () => {
  for (let i = 0; i <cerseiArr.length; i++) {
   drogoSnow()
    if (cerseiArr[0] === cerseiArr[1]) {
      if(cerseiArr2[0] !== cerseiArr2[1]){
      console.log("win Cersei");
      setTimeout(function () {
        document.getElementById("cersei5").style.display = "block";
      }, 4000);
      setTimeout(function () {
        document.getElementById("cersei11").style.display = "block";
      }, 4000);
      setTimeout(function () {
        alert("Well Played, You matched Cersei Lannister. Everyone Who Isn't Us Is An Enemy..");
      }, 2000);
      div5.removeEventListener('click', changeDiv5);
      div11.removeEventListener('click', changeDiv11);
      
      snowArr = [];
      snowArr2= [];
      arrMatch = [];
      arrMatch2 = [];
      kahleesiArr =[];
     kahleesiArr2 =[];
     cerseiArr =[]
     cerseiArr2 =[]
      } else {
        setTimeout(function () {
          alert("Try again!");
        }, 2000);
        snowArr = [];
        snowArr2 = [];
        arrMatch = [];
        arrMatch2 = [];
        kahleesiArr =[];
      kahleesiArr2 =[];
      cerseiArr =[]
     cerseiArr2 =[]
    }
  }
}
}


//this has info about div0

let changeDiv0 = (e) => {
  div0.classList.add("drogo");
  makeItDifferent.innerText="0"
  div0.appendChild(makeItDifferent)

  setTimeout(function () {
    document.getElementById("drogo0").style.display = "block";
  }, 1000);
  setTimeout(function () {
    document.getElementById("drogo0").style.display = "none";
  }, 2000);
  arrMatch.push(div0.classList[1]);
  arrMatch2.push(div0.querySelector("p").innerText)
  console.log(e.target);
  console.log(e.type);
  console.log(arrMatch);
  console.log(arrMatch2)
  checkMatches();
};


//this has info about div 1 

let changeDiv1 = (e) => {
  div1.classList.add("snow");
  makeItDifferentSnow.innerText="1"
  div1.appendChild(makeItDifferentSnow)

  setTimeout(function () {
    document.getElementById("snow1").style.display = "block";
  }, 30);
  setTimeout(function () {
    document.getElementById("snow1").style.display = "none";
  }, 2000);
  snowArr.push(div1.classList[1]);
  snowArr2.push(div1.querySelector("p").innerText)
  console.log(e.target);
  console.log(e.type);
  console.log(snowArr);
  console.log(snowArr2)
  checkMatchesSnow();
};


//this has info about div2

let changeDiv2 = (e) => {
  div2.classList.add("drogo");
  
  //make it different so it doesnt match with itself
  let makeItDifferent= document.createElement("p")
  makeItDifferent.innerText="2"
  div2.appendChild(makeItDifferent)
  //show the photo
  setTimeout(function () {
    document.getElementById("drogo2").style.display = "block";
  }, 1000);

  //hide the photo
  setTimeout(function () {
    document.getElementById("drogo2").style.display = "none";
  }, 2000);

  //push into the array
  arrMatch.push(div2.classList[1]);
  arrMatch2.push(div2.querySelector("p").innerText)

  //make sure it works
  console.log(e.target);
  console.log(e.type);
  console.log(arrMatch);
  console.log(arrMatch2)
  checkMatches();
};


//this has info about div 3

let changeDiv3 = (e) => {
  div3.classList.add("snow");
  makeItDifferentSnow.innerText="3"
  div3.appendChild(makeItDifferentSnow)

  setTimeout(function () {
    document.getElementById("snow3").style.display = "block";
  }, 30);
  setTimeout(function () {
    document.getElementById("snow3").style.display = "none";
  }, 2000);
  snowArr.push(div3.classList[1]);
  snowArr2.push(div3.querySelector("p").innerText)
  console.log(e.target);
  console.log(e.type);
  console.log(snowArr);
  console.log(snowArr2)
  checkMatchesSnow();
};


//this has info about div 4

let changeDiv4 = (e) => {
  div4.classList.add("kahleesi");
  makeItDifferentKahleesi.innerText="4"
  div4.appendChild(makeItDifferentKahleesi)

  setTimeout(function () {
    document.getElementById("kahleesi4").style.display = "block";
  }, 30);
  setTimeout(function () {
    document.getElementById("kahleesi4").style.display = "none";
  }, 2000);
  kahleesiArr.push(div4.classList[1]);
  kahleesiArr2.push(div4.querySelector("p").innerText)
  console.log(e.target);
  console.log(e.type);
  console.log(kahleesiArr);
  console.log(kahleesiArr2)
  checkMatchesKahleesi();
};


//this has info about div 5

let changeDiv5 = (e) => {
  div5.classList.add("cersei");
  makeItDifferentCersei.innerText="5"
  div5.appendChild(makeItDifferentCersei)

  setTimeout(function () {
    document.getElementById("cersei5").style.display = "block";
  }, 30);
  setTimeout(function () {
    document.getElementById("cersei5").style.display = "none";
  }, 2000);
  cerseiArr.push(div5.classList[1]);
  cerseiArr2.push(div5.querySelector("p").innerText)
  console.log(e.target);
  console.log(e.type);
  console.log(cerseiArr);
  console.log(cerseiArr2)
  checkMatchesCersei();
};


//this has info about div 7

let changeDiv7 = (e) => {
  div7.classList.add("kahleesi");
  makeItDifferentKahleesi.innerText="7"
  div7.appendChild(makeItDifferentKahleesi)

  setTimeout(function () {
    document.getElementById("kahleesi7").style.display = "block";
  }, 30);
  setTimeout(function () {
    document.getElementById("kahleesi7").style.display = "none";
  }, 2000);
  kahleesiArr.push(div7.classList[1]);
  kahleesiArr2.push(div7.querySelector("p").innerText)
  console.log(e.target);
  console.log(e.type);
  console.log(kahleesiArr);
  console.log(kahleesiArr2)
  checkMatchesKahleesi();
};


// this has info about div 11 

let changeDiv11 = (e) => {
  div11.classList.add("cersei");
  makeItDifferentCersei.innerText="11"
  div11.appendChild(makeItDifferentCersei)

  setTimeout(function () {
    document.getElementById("cersei11").style.display = "block";
  }, 30);
  setTimeout(function () {
    document.getElementById("cersei11").style.display = "none";
  }, 2000);
  cerseiArr.push(div11.classList[1]);
  cerseiArr2.push(div11.querySelector("p").innerText)
  console.log(e.target);
  console.log(e.type);
  console.log(cerseiArr);
  console.log(cerseiArr2)
  checkMatchesCersei();
};



//put it in the dom

document.addEventListener("DOMContentLoaded", () => {
  div0.addEventListener("click", changeDiv0);
  div1.addEventListener("click", changeDiv1);
  div2.addEventListener("click", changeDiv2);
  div3.addEventListener("click", changeDiv3);
  div4.addEventListener("click", changeDiv4);
  div5.addEventListener("click", changeDiv5);
  div7.addEventListener("click", changeDiv7);
  div11.addEventListener("click", changeDiv11);
});



// set images to have same class. and then do a function with a conditional. if these two divs have the same class. then change the image style to block;