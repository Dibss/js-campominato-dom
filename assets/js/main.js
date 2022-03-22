let grid = document.getElementById("grid");
let paragraph = document.getElementById("welcome")
game_over.classList.add("d-none");

play.addEventListener("click",
  function play(){
    // ------------------------------------------------------------
    grid.innerHTML = '';

    let choice = document.getElementById("choice").options[document.getElementById("choice").selectedIndex].text;
    let cells;

    grid.classList.remove("d-none");
    paragraph.classList.add("d-none");
    game_over.classList.add("d-none");
  
    if(choice == "Easy"){
      cells = 100
      document.documentElement.style.setProperty('--column', '10');
    } else if (choice == "Medium"){
      cells = 81;
      document.documentElement.style.setProperty('--column', '9');
    } else {
      cells = 49;
      document.documentElement.style.setProperty('--column', '7');
    }
    // --------------------------------------------------------------

    let arrBombs = []
    let sixteenBombs = []

    // generare le bombe
    for(let k = 0; k < cells; k++){
      arrBombs.push(k + 1);
    }
    arrBombs = shuffle(arrBombs);
    for(bombs = 0; bombs < 16; bombs++){
      sixteenBombs.push(arrBombs[bombs]);
    }

    // DA NON CANCELLARE ---------------------------
    function box(cells) {
      for (i = 1; i <= cells; i++){
        let box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = arr[i - 1];
        grid.appendChild(box);
        box.addEventListener("click",
          function gameOver() {
            if (sixteenBombs.includes(parseInt(this.innerText))) {
              for(let i = 0; i < sixteenBombs.length; i++){
                game_over.classList.remove("d-none");
                this.classList.add('bomb');
                box.innerHTML = `<i class="fa-solid fa-bomb"></i>`;
                this.removeEventListener("click", gameOver);
              }
            } else {
              this.classList.add('clicked');
            }
          }
        )
      }
    }

    let arr = []
    // per i numeri casuali
    for(let y = 1; y < cells + 1; y++){
      arr.push(y);
    }
    function shuffle(arr){
      return arr.sort( () => Math.random() - 0.5)
    }
    arr = shuffle(arr);
    box(cells);
    // -----------------------------------------------------
  }
);

// NON UTILIZZATA
function numRandom(){
  let num = Math.round(Math.random() * 100 + 1);
  return num;
}