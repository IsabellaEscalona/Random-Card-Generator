import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let num=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  let picas=['Diamante','Corazon','Espada','Trebol'];

  let randomNum=Math.floor(Math.random() * num.length);
  let randomPicas=Math.floor(Math.random() * picas.length)
  
  let picaFinal=picas[randomPicas];

  document.getElementById('cardContent').innerHTML=num[randomNum];
  document.getElementById('TheCard').className="";
  document.getElementById('TheCard').classList.add('card');
  document.getElementById('TheCard').classList.add(getClasePica(picaFinal));
  
};

function getClasePica(pica){
  switch (pica) {
    case 'Diamante':return 'pica-diamante';
    case 'Corazon':return 'pica-corazon';
    case 'Espada':return 'pica-espada'
    case 'Trebol':return 'pica-trebol'
  }
}
