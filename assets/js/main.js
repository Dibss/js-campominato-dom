/*Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nel range dei numeri della griglia: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
BONUS:
1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
3- l'utente indica un livello di difficoltà in base al quale viene generato un numero variabile di celle:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Le bombe dovranno essere generate nello stesso range delle caselle di gioco.*/

let grid = document.getElementById("grid");


// DA CONTROLLARE
function box(cells) {
  let arr = []
  for (let i = 0; i < cells; i++){
    arr.push(i);
  }
  for(let i = arr.length - 1; i > 0; i++){
    const numArr = Math.floor(Math.random() * (i + 1));
    arr[i] = arr[numArr];
    arr[numArr] = arr[i];
  }
  for (i = 1; i <= cells; i++){
    let box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = arr[i - 1];
    grid.appendChild(box);
    box.addEventListener("click",
      function (){
        this.classList.add("clicked");
      }
    )
  }
}

play.addEventListener("click",
  function play(){
    let choice = document.getElementById("choice").options[document.getElementById("choice").selectedIndex].text;

    let cells = 0;
  
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

    grid.innerHTML = '';

    box(cells);
  }
);

// NON UTILIZZATA
function numRandom(){
  let num = Math.round(Math.random() * 100 + 1);
  return num;
}