console.log("hi");


//GLOBAL VARIABLES
let container =document.getElementsByClassName("container")
let squares = document.querySelectorAll(".square");
let score= document.getElementById("score")



//global arrays
let arrMatch = [];
let arrMatch2= [];
let snowArr =[];
let snowArr2 =[];
let kahleesiArr =[]
let kahleesiArr2 =[]
let cerseiArr=[]
let cerseiArr2 =[]
let tyrionArr =[]
let tyrionArr2=[]
let aryaArr =[]
let aryaArr2=[]
let winningA = []
let whoWins = [];
let scoreSum = 0;
let scoreSum2=0;
let finalArray = []
let finalArray2= []

  console.log(scoreSum)
  score.innerHTML=`${scoreSum}`


//global variale divs
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
let tyrion6= document.getElementById("tyrion6")
let tyrion11= document.getElementById("tyrion11")
let arya9= document.getElementById("arya9")
let arya10= document.getElementById("arya10")

let makeItDifferent= document.createElement("p")
let makeItDifferentSnow= document.createElement("p")
let makeItDifferentKahleesi= document.createElement("p")
let makeItDifferentCersei= document.createElement("p")
let makeItDifferentTyrion= document.createElement("p")
let makeItDifferentArya= document.createElement("p")

//global variable buttons

let shuffleButton = document.getElementById("buttonShuffle")



///////////////  GENERATING GAME MATCHES //////////////

//checking for multiple matches for game
const drogoSnow = () => {
  if (arrMatch.length === 1) {
    //cheking for john and drogo
    if (snowArr.length === 1) {
      console.log("no match john and drogo");
      snowArr = [];
      snowArr2 = [];
      arrMatch = [];
      arrMatch2 = [];
      kahleesiArr = [];
      kahleesiArr2 = [];
      cerseiArr = [];
      cerseiArr2 = [];
      aryaArr = [];
      aryaArr2 = [];
    }
  }
  if (arrMatch.length === 1) {
    //checking for drogo and danny
    if (kahleesiArr.length === 1) {
      console.log("no match kahleesi and drogo");
      snowArr = [];
      snowArr2 = [];
      arrMatch = [];
      arrMatch2 = [];
      kahleesiArr = [];
      kahleesiArr2 = [];
      cerseiArr = [];
      cerseiArr2 = [];
      tyrionArr = [];
      tyrionArr2 = [];
      aryaArr = [];
      aryaArr2 = [];
    }
  }
  if (arrMatch.length === 1) {
    //drogo and cersei
    if (cerseiArr.length === 1) {
      console.log("no match cersei and drogo");
      snowArr = [];
      snowArr2 = [];
      arrMatch = [];
      arrMatch2 = [];
      kahleesiArr = [];
      kahleesiArr2 = [];
      cerseiArr = [];
      cerseiArr2 = [];
      tyrionArr = [];
      tyrionArr2 = [];
      aryaArr = [];
      aryaArr2 = [];
    }
  }
  if (arrMatch.length === 1) {
    //drogo and arya
    if (aryaArr.length === 1) {
      console.log("no match arya and drogo");
      snowArr = [];
      snowArr2 = [];
      arrMatch = [];
      arrMatch2 = [];
      kahleesiArr = [];
      kahleesiArr2 = [];
      cerseiArr = [];
      cerseiArr2 = [];
      tyrionArr = [];
      tyrionArr2 = [];
      aryaArr = [];
      aryaArr2 = [];
    }
  }
  if (cerseiArr.length === 1) {
    //cersei and kahleesi
    if (kahleesiArr.length === 1) {
      console.log("no match cersei and kahleesi");
      snowArr = [];
      snowArr2 = [];
      arrMatch = [];
      arrMatch2 = [];
      kahleesiArr = [];
      kahleesiArr2 = [];
      cerseiArr = [];
      cerseiArr2 = [];
      tyrionArr = [];
      tyrionArr2 = [];
      aryaArr = [];
      aryaArr2 = [];
    }
  }
};

//longest way possibe to check for matches
const checkMatches = () => {
  for (let i = 0; i < arrMatch.length; i++) {
    drogoSnow();
    if (arrMatch[0] === arrMatch[1]) {
      if (arrMatch2[0] !== arrMatch2[1]) {
        console.log("win drogo");
        winningA.push("0");
        whoWins.push("Match");
        console.log(whoWins);
        console.log(winningA);
        scoreSum++;
        score.innerHTML = `${scoreSum}`;
        console.log(scoreSum);
        setTimeout(function () {
          document.getElementById("drogo0").style.display = "block";
        }, 4000);
        setTimeout(function () {
          document.getElementById("drogo2").style.display = "block";
        }, 4000);
        setTimeout(function () {
          document.getElementById("matchFound").style.display = "block";
        }, 2000);
        setTimeout(function () {
          document.getElementById("matchFound").style.display = "none";
        }, 3000);
        div0.removeEventListener("click", changeDiv0);
        div2.removeEventListener("click", changeDiv2);
        setTimeout(function () {
          winner();
        }, 3000);

        snowArr = [];
        snowArr2 = [];
        arrMatch = [];
        arrMatch2 = [];
        kahleesiArr = [];
        kahleesiArr2 = [];
        cerseiArr = [];
        cerseiArr2 = [];
        tyrionArr = [];
        tyrionArr2 = [];
        aryaArr = [];
        aryaArr2 = [];
      } else {
        snowArr = [];
        snowArr2 = [];
        arrMatch = [];
        arrMatch2 = [];
        kahleesiArr = [];
        kahleesiArr2 = [];
        cerseiArr = [];
        cerseiArr2 = [];
        tyrionArr = [];
        tyrionArr2 = [];
        aryaArr = [];
        aryaArr2 = [];
      }
    }
  }
};

//check matches for jon snow
const checkMatchesSnow = () => {
  for (let i = 0; i < snowArr.length; i++) {
    drogoSnow();
    if (snowArr[0] === snowArr[1]) {
      if (snowArr2[0] !== snowArr2[1]) {
        console.log("win snow");
        winningA.push("1");
        whoWins.push("Match");
        console.log(whoWins);
        console.log(winningA);
        scoreSum++;
        score.innerHTML = `${scoreSum}`;
        setTimeout(function () {
          document.getElementById("snow1").style.display = "block";
        }, 4000);
        setTimeout(function () {
          document.getElementById("snow3").style.display = "block";
        }, 4000);
        setTimeout(function () {
          document.getElementById("matchFound").style.display = "block";
        }, 2000);
        setTimeout(function () {
          document.getElementById("matchFound").style.display = "none";
        }, 3000);
        div1.removeEventListener("click", changeDiv1);
        div3.removeEventListener("click", changeDiv3);
        setTimeout(function () {
          winner();
        }, 3000);

        snowArr = [];
        snowArr2 = [];
        arrMatch = [];
        arrMatch2 = [];
        kahleesiArr = [];
        kahleesiArr2 = [];
        cerseiArr = [];
        cerseiArr2 = [];
        tyrionArr = [];
        tyrionArr2 = [];
        aryaArr = [];
        aryaArr2 = [];
      } else {
        // setTimeout(function () {
        //   alert("Try again!");
        // }, 2000);
        snowArr = [];
        snowArr2 = [];
        arrMatch = [];
        arrMatch2 = [];
        kahleesiArr = [];
        kahleesiArr2 = [];
        cerseiArr = [];
        cerseiArr2 = [];
        tyrionArr = [];
        tyrionArr2 = [];
        aryaArr = [];
        aryaArr2 = [];
      }
    }
  }
};

//check matches for kahleesi
const checkMatchesKahleesi = () => {
  for (let i = 0; i < kahleesiArr.length; i++) {
    drogoSnow();
    if (kahleesiArr[0] === kahleesiArr[1]) {
      if (kahleesiArr2[0] !== kahleesiArr2[1]) {
        console.log("win kahleesi");
        winningA.push("2");
        console.log(winningA);
        whoWins.push("Match");
        scoreSum++;
        score.innerHTML = `${scoreSum}`;
        console.log(scoreSum);
        setTimeout(function () {
          document.getElementById("kahleesi4").style.display = "block";
        }, 4000);
        setTimeout(function () {
          document.getElementById("kahleesi7").style.display = "block";
        }, 4000);
        setTimeout(function () {
          document.getElementById("matchFound").style.display = "block";
        }, 2000);
        setTimeout(function () {
          document.getElementById("matchFound").style.display = "none";
        }, 3000);
        div4.removeEventListener("click", changeDiv1);
        div7.removeEventListener("click", changeDiv3);
        winner();

        snowArr = [];
        snowArr2 = [];
        arrMatch = [];
        arrMatch2 = [];
        kahleesiArr = [];
        kahleesiArr2 = [];
        cerseiArr = [];
        cerseiArr2 = [];
        tyrionArr = [];
        tyrionArr2 = [];
        aryaArr = [];
        aryaArr2 = [];
      } else {
        // setTimeout(function () {
        //   alert("Try again!");
        // }, 2000);
        snowArr = [];
        snowArr2 = [];
        arrMatch = [];
        arrMatch2 = [];
        kahleesiArr = [];
        kahleesiArr2 = [];
        cerseiArr = [];
        cerseiArr2 = [];
        tyrionArr = [];
        tyrionArr2 = [];
        aryaArr = [];
        aryaArr2 = [];
      }
    }
  }
};

//check matches for cersei
const checkMatchesCersei = () => {
  for (let i = 0; i < cerseiArr.length; i++) {
    drogoSnow();
    if (cerseiArr[0] === cerseiArr[1]) {
      if (cerseiArr2[0] !== cerseiArr2[1]) {
        console.log("win Cersei");
        winningA.push("3");
        console.log(winningA);
        whoWins.push("Match");
        scoreSum++;
        score.innerHTML = `${scoreSum}`;
        console.log(scoreSum);
        setTimeout(function () {
          document.getElementById("cersei5").style.display = "block";
        }, 4000);
        setTimeout(function () {
          document.getElementById("cersei11").style.display = "block";
        }, 4000);
        setTimeout(function () {
          document.getElementById("matchFound").style.display = "block";
        }, 2000);
        setTimeout(function () {
          document.getElementById("matchFound").style.display = "none";
        }, 3000);
        div5.removeEventListener("click", changeDiv5);
        div11.removeEventListener("click", changeDiv11);
        setTimeout(function () {
          winner();
        }, 3000);

        snowArr = [];
        snowArr2 = [];
        arrMatch = [];
        arrMatch2 = [];
        kahleesiArr = [];
        kahleesiArr2 = [];
        cerseiArr = [];
        cerseiArr2 = [];
        tyrionArr = [];
        tyrionArr2 = [];
        aryaArr = [];
        aryaArr2 = [];
      } else {
        // setTimeout(function () {
        //   alert("Try again!");
        // }, 2000);
        snowArr = [];
        snowArr2 = [];
        arrMatch = [];
        arrMatch2 = [];
        kahleesiArr = [];
        kahleesiArr2 = [];
        cerseiArr = [];
        cerseiArr2 = [];
        tyrionArr = [];
        tyrionArr2 = [];
        aryaArr = [];
        aryaArr2 = [];
      }
    }
  }
};

//check matches for tyrion
const checkMatchesTyrion = () => {
  for (let i = 0; i < tyrionArr.length; i++) {
    drogoSnow();
    if (tyrionArr[0] === tyrionArr[1]) {
      if (tyrionArr2[0] !== tyrionArr2[1]) {
        console.log("win tyrion");
        winningA.push("4");
        console.log(winningA);
        whoWins.push("Match");
        scoreSum++;
        score.innerHTML = `${scoreSum}`;
        console.log(scoreSum);
        setTimeout(function () {
          document.getElementById("tyrion6").style.display = "block";
        }, 4000);
        setTimeout(function () {
          document.getElementById("tyrion8").style.display = "block";
        }, 4000);
        setTimeout(function () {
          document.getElementById("matchFound").style.display = "block";
        }, 2000);
        setTimeout(function () {
          document.getElementById("matchFound").style.display = "none";
        }, 3000);
        div6.removeEventListener("click", changeDiv5);
        div8.removeEventListener("click", changeDiv11);
        setTimeout(function () {
          winner();
        }, 3000);

        snowArr = [];
        snowArr2 = [];
        arrMatch = [];
        arrMatch2 = [];
        kahleesiArr = [];
        kahleesiArr2 = [];
        cerseiArr = [];
        cerseiArr2 = [];
        tyrionArr = [];
        tyrionArr2 = [];
        aryaArr = [];
        aryaArr2 = [];
      } else {
        // setTimeout(function () {
        //   alert("Try again!");
        // }, 2000);
        snowArr = [];
        snowArr2 = [];
        arrMatch = [];
        arrMatch2 = [];
        kahleesiArr = [];
        kahleesiArr2 = [];
        cerseiArr = [];
        cerseiArr2 = [];
        tyrionArr = [];
        tyrionArr2 = [];
        aryaArr = [];
        aryaArr2 = [];
      }
    }
  }
};

//check matches for arya
const checkMatchesArya = () => {
  for (let i = 0; i < aryaArr.length; i++) {
    drogoSnow();
    if (aryaArr[0] === aryaArr[1]) {
      if (aryaArr2[0] !== aryaArr2[1]) {
        console.log("win arya");
        winningA.push("5");
        console.log(winningA);
        whoWins.push("Match");
        scoreSum++;
        score.innerHTML = `${scoreSum}`;
        console.log(scoreSum);
        setTimeout(function () {
          document.getElementById("arya9").style.display = "block";
        }, 4000);
        setTimeout(function () {
          document.getElementById("arya10").style.display = "block";
        }, 4000);
        setTimeout(function () {
          document.getElementById("matchFound").style.display = "block";
        }, 2000);
        setTimeout(function () {
          document.getElementById("matchFound").style.display = "none";
        }, 3000);
        div9.removeEventListener("click", changeDiv9);
        div10.removeEventListener("click", changeDiv10);

        setTimeout(function () {
          winner();
        }, 3000);
        // setTimeout(function () {
        //   reStart()
        //  }, 5000);

        snowArr = [];
        snowArr2 = [];
        arrMatch = [];
        arrMatch2 = [];
        kahleesiArr = [];
        kahleesiArr2 = [];
        cerseiArr = [];
        cerseiArr2 = [];
        tyrionArr = [];
        tyrionArr2 = [];
        aryaArr = [];
        aryaArr2 = [];
      } else {
        // setTimeout(function () {
        //   alert("Try again!");
        // }, 2000);
        snowArr = [];
        snowArr2 = [];
        arrMatch = [];
        arrMatch2 = [];
        kahleesiArr = [];
        kahleesiArr2 = [];
        cerseiArr = [];
        cerseiArr2 = [];
        tyrionArr = [];
        tyrionArr2 = [];
        aryaArr = [];
        aryaArr2 = [];
      }
    }
  }
};



////// THIS IS WHERE THE CODE IS TO MAKE THE IMAGES SHOW UP AND DISSAPEAR ////////


//this has info about div0
let changeDiv0 = (e) => {
  div0.classList.add("drogo");
  makeItDifferent.innerText="0"
  div0.appendChild(makeItDifferent)

  setTimeout(function () {
    document.getElementById("drogo0").style.display = "block";
  }, 30);
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
  }, 30);

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

//this has info about div 6 
let changeDiv6 = (e) => {
  div6.classList.add("tyrion");
  makeItDifferentTyrion.innerText="6"
  div6.appendChild(makeItDifferentTyrion)

  setTimeout(function () {
    document.getElementById("tyrion6").style.display = "block";
  }, 30);
  setTimeout(function () {
    document.getElementById("tyrion6").style.display = "none";
  }, 2000);
  tyrionArr.push(div6.classList[1]);
  tyrionArr2.push(div6.querySelector("p").innerText)
  console.log(e.target);
  console.log(e.type);
  console.log(tyrionArr);
  console.log(tyrionArr2)
  checkMatchesTyrion();
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

//this has info about div 8
let changeDiv8 = (e) => {
  div8.classList.add("tyrion");
  makeItDifferentTyrion.innerText="8"
  div8.appendChild(makeItDifferentTyrion)

  setTimeout(function () {
    document.getElementById("tyrion8").style.display = "block";
  }, 30);
  setTimeout(function () {
    document.getElementById("tyrion8").style.display = "none";
  }, 2000);
  tyrionArr.push(div8.classList[1]);
  tyrionArr2.push(div8.querySelector("p").innerText)
  console.log(e.target);
  console.log(e.type);
  console.log(tyrionArr);
  console.log(tyrionArr2)
  checkMatchesTyrion();
};

//this has info about div 9
let changeDiv9 = (e) => {
  div9.classList.add("arya");
  makeItDifferentArya.innerText="9"
  div9.appendChild(makeItDifferentArya)

  setTimeout(function () {
    document.getElementById("arya9").style.display = "block";
  }, 30);
  setTimeout(function () {
    document.getElementById("arya9").style.display = "none";
  }, 2000);
  aryaArr.push(div9.classList[1]);
  aryaArr2.push(div9.querySelector("p").innerText)
  console.log(e.target);
  console.log(e.type);
  console.log(aryaArr);
  console.log(aryaArr2)
  checkMatchesArya();
};

// this has info about div 10
let changeDiv10 = (e) => {
  div10.classList.add("arya");
  makeItDifferentArya.innerText="10"
  div10.appendChild(makeItDifferentArya)

  setTimeout(function () {
    document.getElementById("arya10").style.display = "block";
  }, 30);
  setTimeout(function () {
    document.getElementById("arya10").style.display = "none";
  }, 2000);
  aryaArr.push(div10.classList[1]);
  aryaArr2.push(div10.querySelector("p").innerText)
  console.log(e.target);
  console.log(e.type);
  console.log(aryaArr);
  console.log(aryaArr2)
  checkMatchesArya();
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


/////// FUNCTIONS FOR GAME LOGIC ///////

const reStart = () => {   //THIS FUNCTION RESETS THE ENTIRE GAME
  document.getElementById("clock").disabled = false;

  //resetting drogo
  console.log("is this working");
  document.getElementById("drogo0").style.display = "none";
  document.getElementById("drogo2").style.display = "none";
  div0.addEventListener("click", changeDiv0);
  div2.addEventListener("click", changeDiv2);

  //resetting jon snow
  document.getElementById("snow1").style.display = "none";
  document.getElementById("snow3").style.display = "none";
  div1.addEventListener("click", changeDiv1);
  div3.addEventListener("click", changeDiv3);

  //resetting kahleesi

  document.getElementById("kahleesi4").style.display = "none";
  document.getElementById("kahleesi7").style.display = "none";
  div4.addEventListener("click", changeDiv4);
  div7.addEventListener("click", changeDiv7);

  //resetting cersei
  document.getElementById("cersei11").style.display = "none";
  document.getElementById("cersei5").style.display = "none";
  div5.addEventListener("click", changeDiv5);
  div11.addEventListener("click", changeDiv11);

  //resetting tyrion
  document.getElementById("tyrion6").style.display = "none";
  document.getElementById("tyrion8").style.display = "none";
  div6.addEventListener("click", changeDiv6);
  div8.addEventListener("click", changeDiv8);

  //resetting Arya
  document.getElementById("arya9").style.display = "none";
  document.getElementById("arya10").style.display = "none";
  div9.addEventListener("click", changeDiv9);
  div10.addEventListener("click", changeDiv10);

  shuffle2(); //shuffle the cards again for new game

  //reset the score board
  scoreSum = 0;
  score.innerHTML = 0;
  //reset player stats
  player2.innerHTML = "Player 2";
  player1.innerHTML = "Player 1";
  //hide the pop up winner images
  document.getElementById("player1Wins").style.display = "none";
  document.getElementById("player2Wins").style.display = "none";
  document.getElementById("tieGame").style.display = "none";
  document.getElementById("allMatchesFound").style.display = "none";

  //reset all the arrays
  arrMatch = [];
  arrMatch2 = [];
  snowArr = [];
  snowArr2 = [];
  kahleesiArr = [];
  kahleesiArr2 = [];
  cerseiArr = [];
  cerseiArr2 = [];
  tyrionArr = [];
  tyrionArr2 = [];
  aryaArr = [];
  aryaArr2 = [];
  winningA = [];
  whoWins = [];
  scoreSum = 0;
  scoreSum2 = 0;
  finalArray = [];
  finalArray2 = [];


};

const winner = () => {   //WINNING LOGIC, SINGLE PLAYER
  if (winningA.length >= 6) {
    setTimeout(function () {
      document.getElementById("allMatchesFound").style.display = "block"; //show the single winner image after 2 secs
    }, 2000);
    setTimeout(function () {
      reStart();
    }, 5000);
  }
  document.getElementById("clock").disabled = false;
};

const start1Player = () => {
  reStart(); //reset everythhing from previous games including arrays
  document.getElementById("clock").disabled = true; //disable the 2 player mode  so no 2 games at once
  //push the score into the screen. should already do that once a match happens
  shuffleButton.addEventListener("click", reStart);
};


//how to change it manually 
//div0.style.order="5"

const shuffle = () => {  //this shuffle will erase the players scores and divs from the screen. this is also he function for the button on the screen. so make sure it resets everything
  reStart()
  document.getElementById("clock").disabled = false; 
}

const shuffle2 = () => {
  //this shuffle wont reset p1 status.
  let availableDivs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  for (let i = 0; i < squares.length; i++) {
    const randomNum = Math.floor(Math.random() * availableDivs.length);
    {
      availableDivs.splice(randomNum, 1);
      //randomNum.splice(availableDivs); doesnt work
      console.log(randomNum);
      console.log(availableDivs);
      console.log(squares[i]); //shows me a random div
      //  squares.style.order(randomNum) //doesnt work
      const randomNumDiv = (squares[i].style.order = randomNum);
      console.log(randomNumDiv);
    }
  }
};

const countdown2 = () => {  //timeout for player 2 and has the winner logic
  winningA = []
  //reset the divs for p2
  document.getElementById("drogo0").style.display = "none";
  document.getElementById("drogo2").style.display = "none";
  div0.addEventListener("click", changeDiv0);
  div2.addEventListener("click", changeDiv2);

  //resetting jon snow
  document.getElementById("snow1").style.display = "none";
  document.getElementById("snow3").style.display = "none";
  div1.addEventListener("click", changeDiv1);
  div3.addEventListener("click", changeDiv3);

  //resetting kahleesi

  document.getElementById("kahleesi4").style.display = "none";
  document.getElementById("kahleesi7").style.display = "none";
  div4.addEventListener("click", changeDiv4);
  div7.addEventListener("click", changeDiv7);

  //resetting cersei
  document.getElementById("cersei11").style.display = "none";
  document.getElementById("cersei5").style.display = "none";
  div5.addEventListener("click", changeDiv5);
  div11.addEventListener("click", changeDiv11)

  //resetting tyrion
  document.getElementById("tyrion6").style.display = "none";
  document.getElementById("tyrion8").style.display = "none";
  div6.addEventListener("click", changeDiv6);
  div8.addEventListener("click", changeDiv8);

  //resetting Arya
  document.getElementById("arya9").style.display = "none";
  document.getElementById("arya10").style.display = "none";
  div9.addEventListener("click", changeDiv9);
  div10.addEventListener("click", changeDiv10);

// you need to reshuffle the cards without setting the p1 status 

  shuffle2()   //this shuffle wont reset p1 score on the div 

  //reset score
  score.innerHTML=0   //resets the score on the screen for P2
  var timeleft = 20; //give p2 15 sec timer 
  var downloadTimer = setInterval(function(){

    const stopIt = ()=> {    //stop timer func in case player presses reset
      clearInterval(downloadTimer);
      document.getElementById("clock").innerHTML = "Start 2 Player Game (Timed)" //reset button text
      reStart() //restart game 
    }

    shuffleButton.addEventListener("click", stopIt); 

    if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("clock").innerHTML = "Time is Up!";
      let player2= document.getElementById("player2") 
      player2.innerHTML= "Player2 Score: " + `${scoreSum}`  //show P2 score on the div
      finalArray2.push(scoreSum) //push p2 score into an array to find winner
      console.log(finalArray2)  // show me that the array worked

    //if the game is a tie
      if (finalArray2[0]===finalArray2[1]){
        setTimeout(function () {
          document.getElementById("tieGame").style.display="block";;  //show the tie image after 2 secs
        }, 2000);
        setTimeout(function () {
          document.getElementById("clock").innerHTML = "Start 2 Player Game (Timed)";   //change the wording on the button after 4 secs
        }, 4000);
        setTimeout(function () { reStart() }, 6000); // have a way to restart the game afte 6 secs
      }

      //if player 1 wins
      if (finalArray2[0]>finalArray2[1]){
        setTimeout(function () {
          document.getElementById("player1Wins").style.display="block";; //show p1 winner image after 2 secs
        }, 2000);
        setTimeout(function () {
          document.getElementById("clock").innerHTML = "Start 2 Player Game (Timed)";   //change the wording on the button after 4 secs
        }, 4000);
        setTimeout(function () { reStart() }, 6000); // have a way to restart the game afte 6 secs
      }

        //if player 2 wins
      if (finalArray2[0]<finalArray2[1]){
        setTimeout(function () {
          document.getElementById("player2Wins").style.display="block";;  //show p2 winner image after 2 secs
        }, 2000);
        setTimeout(function () {
          document.getElementById("clock").innerHTML = "Start 2 Player Game (Timed)";  //change the working on the button
         }, 4000);
         setTimeout(function () { reStart() }, 6000); // have a way to restart the game afte 6 secs
      }
    } else {
        document.getElementById("clock").innerHTML = timeleft + " seconds remaining";
        winningA = []
    }
    timeleft -= 1;
  }, 1000);
}

const addEvents = ()=> { //has all the event listeners. stops it from being clicked
  div0.addEventListener("click", changeDiv0);
  div1.addEventListener("click", changeDiv1);
  div2.addEventListener("click", changeDiv2);
  div3.addEventListener("click", changeDiv3);
  div4.addEventListener("click", changeDiv4);
  div5.addEventListener("click", changeDiv5);
  div6.addEventListener("click", changeDiv6);
  div7.addEventListener("click", changeDiv7);
  div8.addEventListener("click", changeDiv8);
  div9.addEventListener("click", changeDiv9);
  div10.addEventListener("click", changeDiv10);
  div11.addEventListener("click", changeDiv11);
  shuffleButton.addEventListener("click", shuffle);
}

const countdown = () => {  //timeout for player 1
  //timeout for player 1 and pushes the score for p1 to screen
  addEvents();

  var timeleft = 20; //15 sec timer
  var downloadTimer = setInterval(function () {
    const stopIt = () => {
      //stop timer func
      clearInterval(downloadTimer);
      document.getElementById("clock").innerHTML =
        "Start 2 Player Game (Timed)";
      reStart(); //restart game
    };
    shuffleButton.addEventListener("click", stopIt); //if reset button is clicked, game resets
    if (timeleft <= 0) {
      //when the timer hits zero
      clearInterval(downloadTimer); //clear the clock
      document.getElementById("clock").innerHTML = "Time is Up! + Player 2 Go!"; //alert player 2 turn
      let player1 = document.getElementById("player1");
      player1.innerHTML = "Player1 Score: " + `${scoreSum}`; //this will push P1 score to the screen
      finalArray2.push(scoreSum); //push p1 score to an array to figure out who won game
      console.log(finalArray2); //show me that the array is working
      scoreSum = 0; //reset score for next turn
      countdown2(); //make a new timer for p2
      //reStart()
    } else {
      document.getElementById("clock").innerHTML =
        timeleft + " seconds remaining";
      winningA = [];
    }
    timeleft -= 1;
  }, 1000);
};








///old code 


 //press reset and then start again new game?

//dom stuff
// document.addEventListener("DOMContentLoaded", () => {
//   div0.addEventListener("click", changeDiv0);
//   div1.addEventListener("click", changeDiv1);
//   div2.addEventListener("click", changeDiv2);
//   div3.addEventListener("click", changeDiv3);
//   div4.addEventListener("click", changeDiv4);
//   div5.addEventListener("click", changeDiv5);
//   div6.addEventListener("click", changeDiv6);
//   div7.addEventListener("click", changeDiv7);
//   div8.addEventListener("click", changeDiv8);
//   div9.addEventListener("click", changeDiv9);
//   div10.addEventListener("click", changeDiv10);
//   div11.addEventListener("click", changeDiv11);
//   shuffleButton.addEventListener("click", shuffle);
// });









// create an empty div that says player 1, leave it blank. once the timer runs out 
//push the game score innerhtml into that div.
//reStart() and 
//create a second empty div saying player 2, leave it blank. once they have their turn.
//psh the score into that div
//do  a function that compares the 2
//alert winner restart() and clear the player 1 and player 2 div

//or every correct match push into an array and into a div,
//at the end compare array lengths


// let whoWon = ()=> {
//   var player1;
//   var player2;
//   player1 = document.getElementById("firstGame").value;
//   player2 = document.getElementById("secondGame").value;
//   if (player1 > player2){
//       alert("player 1 wins");
//   } if (plater1 = player2){
//       alert("tie")
//   } if (player2 > player1){
//     alert("player 2 wins")
//   }
// }





// const secondPlayer = () =>{
//   //resetting drogo
//    document.getElementById("drogo0").style.display = "none";
//    document.getElementById("drogo2").style.display = "none";
//    div0.addEventListener("click", changeDiv0);
//    div2.addEventListener("click", changeDiv2);
 
//    //resetting jon snow
//    document.getElementById("snow1").style.display = "none";
//    document.getElementById("snow3").style.display = "none";
//    div1.addEventListener("click", changeDiv1);
//    div3.addEventListener("click", changeDiv3);
 
   //resetting kahleesi
 
  //  document.getElementById("kahleesi4").style.display = "none";
  //  document.getElementById("kahleesi7").style.display = "none";
  //  div4.addEventListener("click", changeDiv4);
  //  div7.addEventListener("click", changeDiv7);
 
  //  //resetting cersei
  //  document.getElementById("cersei11").style.display = "none";
  //  document.getElementById("cersei5").style.display = "none";
  //  div5.addEventListener("click", changeDiv5);
  //  div11.addEventListener("click", changeDiv11)
 
 
   //resetting tyrion
//    document.getElementById("tyrion6").style.display = "none";
//    document.getElementById("tyrion8").style.display = "none";
//    div6.addEventListener("click", changeDiv6);
//    div8.addEventListener("click", changeDiv8);
 
//    //resetting Arya
//    document.getElementById("arya9").style.display = "none";
//    document.getElementById("arya10").style.display = "none";
//    div9.addEventListener("click", changeDiv9);
//    div10.addEventListener("click", changeDiv10);
 
//    shuffle()
//    let player1= document.getElementById("player1") 
//    player1.innerHTML= "Player1 Score: " + `${scoreSum}`
//  }



// function shuffle() {
//   let elementsArray = Array.prototype.slice.call(container.getElementsByClassName('square'));
//     elementsArray.forEach(function(element){
//     container.removeChild(element);
//   })
//   shuffleArray(elementsArray);
//   elementsArray.forEach(function(element){
//   container.appendChild(element);
// })
// }

// const shuffle =()=> {
//   let random = []
//   for (let i=0; i<squares.length; i++){
//     random.push(squares[i])
//     console.log(shuffle)
//   }
// }

// const makeArray = () => {
//   makeArray.push(div0)
// }
// console.log(makeArray)



//alll the images inside div, put them in a for loop and assign them to a random div inside the dom
// let divArrayGenerator =[]

// const shuffle = () => {
//   for (let i=0; i<container.length; i++) {
//    container[i] = divArrayGenerator+i
//      }
//    }
//    console.log(shuffle)






//failed attemps to winning condition


// const winner = () => {
//   if (arrMatch[0] === arrMatch[1]) {
//     if (arrMatch2[0] !== arrMatch2[1]) {
//       if (snowArr[0] === snowArr[1]) {
//         if (snowArr2[0] !== snowArr2[1]) {
//           if (kahleesiArr[0] === kahleesiArr[1]) {
//             if (kahleesiArr2[0] !== kahleesiArr2[1]) {
//               if (cerseiArr[0] === cerseiArr[1]) {
//                 if (cerseiArr2[0] !== cerseiArr2[1]) {
//                   if (tyrionArr[0] === tyrionArr[1]) {
//                     if (tyrionArr2[0] !== tyrionArr2[1]) {
//                       if (aryaArr[0] === aryaArr[1]) {
//                         if (aryaArr2[0] !== aryaArr2[1]) {
//                           console.log("game over");
//                         } else console.log("keep playing");
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// };






// const winner = () => {
//   if (
//     drogo0.style.display === "block" && snow1.style.display === "block" && drogo2.style.display === "block" && snow3.style.display === "block" &&
//     kahleesi4.style.display === "block" &&
//     cersei5.style.display === "block" &&
//     tyrion6.style.display === "block" &&
//     kahleesi7.style.display === "block" &&
//     tyrion8.style.display === "block" &&
//     arya9.style.display === "block" &&
//     arya10.style.display === "block" &&
//     cersei11.style.display === "block"
//   );
//   {
//     alert("you win");
//   }
// };








// const winner = () => {
//   if (arrMatch[0] == arrMatch[1] && arrMatch2[0] !== arrMatch2[1] &&
//     snowArr[0] == snowArr[1] && snowArr2[0] !== snowArr2[1]) { //&&
//       // kahleesiArr[0] == kahleesiArr[1] && kahleesiArr2[0] !== kahleesiArr2[1] &&//{
//       //   cerseiArr[0] == cerseiArr[1] && cerseiArr2[0] !== cerseiArr2[1] &&
//       //     tyrionArr[0] == tyrionArr[1] && tyrionArr2[0] !== tyrionArr2[1] &&
//       //       aryaArr[0] == aryaArr[1] && aryaArr2[0] !== aryaArr2[1]){
//                  console.log("game over")
//    } else {console.log("keep playing")
//    console.log(arrMatch[0])
//    }
//  }


// const winner = () => {
//   if (arrMatch[0] === arrMatch[1] && snowArr[0] === snowArr[1] !== undefined) {
//       // if (kahleesiArr[0] == kahleesiArr[1] && kahleesiArr2[0] !== kahleesiArr2[1]) //{
//       //   if (cerseiArr[0] == cerseiArr[1] && cerseiArr2[0] !== cerseiArr2[1]) 
//       //     if (tyrionArr[0] == tyrionArr[1] && tyrionArr2[0] !== tyrionArr2[1]) 
//       //       if (aryaArr[0] == aryaArr[1] && aryaArr2[0] !== aryaArr2[1]){
//                  console.log("game over")
//                  console.log(arrMatch[0])
//    } else {console.log("keep playing")
//   }
// }
                    
                  
// set images to have same class. and then do a function with a conditional. if these two divs have the same class. then change the image style to block;

//https://sf.co.ua/13/06/wallpaper-2845886.jpgb  house stark

//https://wallpapercave.com/wp/wp3238965.jpg'     dragon

//https://wallpapercave.com/wp/bmvptdC.jpg   lamps

// https://airwallpaper.com/wp-content/uploads/images2/celebrities-game-thrones-emilia-clarke-background.jpg    danny




//trying to make an array of divs


// const makeDivArray = () => {
//   let divArray =[]
//   divArray.push(<div></div>)


// }


//TO DO:

// create one div for each modal
//each modal needs to be set to display none
//once a match is made target the id of the modal i want to display and
// style.display="block"
//or create a class with css and reember to remove the former class 


//fatima notes and tips 
//get the loop to remove the splice from the array ! done
//once that is done, take the generated number and give it to one of the squares aka div
// random to get me a random Number out th array, splcie it out of index of array . 
  //while availabe num is > 0


//1. loop thru the container
//2. i want to give each div a diff style.order number in order to do that i need to generate a randomNum
//3. in order to do it correctly w/out having the divs overlap. make an array with the total amount of divs.
//4. everytime a randomNum is selected, remove it from the array, this will avoid div overlap
//5. that random number is the order number??



//grab all divs with class of square 
//divs availavle. splice 
      //mth floor .math random * 12
      //lets say it gives me at 5.. lets ay net it gives me 5. 

  // random to get me a random Number out th array, splcie it out of index of array . 
  //while availabe num is > 0


