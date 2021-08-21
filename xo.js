var symbole = 1;

var player1 = false;
var player2 = false;
var ta3adol = false;

var user1moves = [];
var user2moves = [];

let b1 = document.getElementById("1");
let b2 = document.getElementById("2");
let b3 = document.getElementById("3");
let b4 = document.getElementById("4");
let b5 = document.getElementById("5");
let b6 = document.getElementById("6");
let b7 = document.getElementById("7");
let b8 = document.getElementById("8");
let b9 = document.getElementById("9");

b1.addEventListener("click", roundStarting);
b2.addEventListener("click", roundStarting);
b3.addEventListener("click", roundStarting);
b4.addEventListener("click", roundStarting);
b4.addEventListener("click", roundStarting);
b5.addEventListener("click", roundStarting);
b6.addEventListener("click", roundStarting);
b7.addEventListener("click", roundStarting);
b8.addEventListener("click", roundStarting);
b9.addEventListener("click", roundStarting);

function roundStarting(e) {
  if (symbole % 2 == 1) {
    user1moves.push(Number(e.target.id));
    e.target.innerHTML += " <div style='  color : #BA8C63 ; height: ;'>X</div>";
    e.target.style.background = "  url('./img/x.png')";
    e.target.style.backgroundSize = "contain";
    e.target.style.backgroundRepeat = "no-repeat";
    symbole += 1;
    document
      .getElementById(e.target.id)
      .removeEventListener("click", roundStarting);
    test(user1moves, "x");
  } else {
    user2moves.push(Number(e.target.id));
    e.target.innerHTML += " <div id='' style='  color : #00000 ; height: ;'>O</div>";
    e.target.style.background = "  url('./img/o.png')";
    e.target.style.backgroundSize = "contain";
    e.target.style.backgroundRepeat = "no-repeat";

    symbole += 1;
    document
      .getElementById(e.target.id)
      .removeEventListener("click", roundStarting);
    test(user2moves, "o");
  }
}

function test(usermoves, playerLetter) {
  let test = [];
  let a1 = [1, 2, 3];
  let a2 = [4, 5, 6];
  let a3 = [7, 8, 9];
  let a4 = [1, 4, 7];
  let a5 = [2, 5, 8];
  let a6 = [3, 6, 9];
  let a7 = [1, 5, 9];
  let a8 = [3, 5, 7];
  let tot = [a1, a2, a2, a3, a4, a5, a6, a7, a8];
  tot.forEach(function big(aX) {
    let co = 0;
    var result = [];
    usermoves.forEach(function ee(element) {
      if (aX.includes(element)) {
        result.push(element);
        co += 1;

        if (co === 3) {
          winner(result, playerLetter);
        } 
        if ((user1moves.length + user2moves.length >= 9) && (co < 3) ) {
          console.log(user1moves.length + user2moves.length)
           draw();
        }
      }
    });
  });
}

function winner(result, playerLetter) {
  while (result.length != 0) {
    var ee = String(result.shift());
    var nn = document.getElementById(ee);
    if (playerLetter === "x") {
      nn.style.background = "  url('./img/xwin.png')";
    } else {
      nn.style.background = "  url('./img/owin.png')";
    }
    nn.style.backgroundSize = "cover";
    nn.style.backgroundRepeat = "no-repeat";
  }
  setTimeout(() => winner2(playerLetter), 800);
}
 const winner2 = (playerLetter) => {
  const reloader = () => {
    return confirm( ` the winner is ${playerLetter}! do you wanna play again ??   `
    );
  };

  if (reloader() === true) {
    location.reload();
  } else {
    location.reload();
  }
};

const draw = ()=>{
  const drawReloder = () => {
    return alert(` DRAW ! do you wana play again ?    `);
  };

     location.reload();
     location.reload();
   
} 

const x = document.createElement("p")
x.innerHTML=''