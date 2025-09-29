let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#restart");
let msgContainer = document.querySelector(".msg-container");
let newBtn = document.querySelector("#newGameBtn");
let msg = document.querySelector("#msg");
let drawcontainer = document.querySelector(".drawContainer");
let drawmsg = document.querySelector(".drawmsg");
let newBtn2 = document.querySelector("#newGameBtn2");


let turnO = true;
const winPattern = [
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8],
];

const resetGame = () => {
   turnO = true;
   enableBoxes();
   msgContainer.classList.add("hide");
   drawcontainer.classList.add("hide");
};

boxes.forEach((box) =>{
   box.addEventListener("click",  () => {
      if (turnO){
         box.innerText="O";
         box.classList.add("red");
         turnO = false;
      }else{
         box.innerText="X";
         box.classList.add("green");
         turnO = true;
      } 
      box.disabled = true;
      checkWinner();
   });
}); 


const disableBoxes = () => {
   for(let box of boxes) {
      box.disabled = true;
   }
};

const enableBoxes = () => {
   for(let box of boxes) {
      box.disabled = false;
      box.innerText = "";
   }
};



const showWinner = (winner) => {
   msg.innerText=`congratulation, winner is ${winner}`;
   msgContainer.classList.remove("hide");
   disableBoxes();
};


const checkWinner = () => {
  for(let pattern of winPattern){
      let pos1val = boxes[pattern[0]].innerText;
      let pos2val = boxes[pattern[1]].innerText;
      let pos3val = boxes[pattern[2]].innerText;

      if (pos1val != "" && pos2val != "" && pos3val != ""){
         if(pos1val === pos2val && pos2val === pos3val){
            showWinner(pos1val);
         }
      }
      let isdraw = [...boxes].every(box => box.innerText !== "");
      if(isdraw){
         drawmsg.innerText = "Game Is Draw!";
         drawcontainer.classList.remove("hide");
         disableBoxes();
      }
  }
};

newGameBtn.addEventListener("click", resetGame);
newGameBtn2.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);



