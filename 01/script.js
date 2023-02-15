function beker() {
  var osszeg = 0;
  var szam;
  var szamTomb = [];
  var n = 5;

  for (var i = 0; i < n; i++) {
    szam = prompt(i + 1 + ". szám:");
    szam = parseInt(szam);
    szamTomb.push(szam);
  }

  var j = 0;

  while (j < n) {
    osszeg += szamTomb[j];
    j++;
  }

  document.getElementById("eredmeny").innerHTML = osszeg;
}

const t1Cost = 1;
const t2Cost = 2;
const t3Cost = 3;
const t4Cost = 4;

var t1DB = 0;
var t2DB = 0;
var t3DB = 0;
var t4DB = 0;

var tarca = 3;

var kedvezmeny = 0;

function checkDB(DB) {
  if (DB < 0) {
    DB = 0;
  }
  return DB;
}

function Kiir(termek) {
  var kosarErteke =
    t1DB * t1Cost + t2DB * t2Cost + t3DB * t3Cost + t4DB * t4Cost;
  var egyenlegNum = tarca;
  kosarErteke = (kosarErteke - kosarErteke * (kedvezmeny / 100)).toFixed(0);
  if (egyenlegNum - kosarErteke < 0) {
    window.alert("Erre nincs elég pénze!");
    minus(termek);
  }else {
    egyenlegNum = egyenlegNum - kosarErteke;

    document.getElementById("kosar").innerHTML = kosarErteke + " Ft";
    document.getElementById("egyenleg").innerHTML = egyenlegNum + " Ft";

    document.getElementById("t1DBKiir").innerHTML = t1DB + " db";
    document.getElementById("t2DBKiir").innerHTML = t2DB + " db";
    document.getElementById("t3DBKiir").innerHTML = t3DB + " db";
    document.getElementById("t4DBKiir").innerHTML = t4DB + " db";

    document.getElementById("kedvezmeny").innerHTML = kedvezmeny + " %";
    document.getElementById("kedvezmeny").innerHTML = kedvezmeny + " %";
  }

  if (t1DB+t2DB+t3DB+t4DB == 0) {
    window.alert("Minden tételt eltávolított");
  } 
}

function plus(termek) {
  if (termek == "t1") {
    t1DB++;
  }
  if (termek == "t2") {
    t2DB++;
  }
  if (termek == "t3") {
    t3DB++;
  }
  if (termek == "t4") {
    t4DB++;
  }

  Kiir(termek);
}
function minus(termek) {
  if (termek == "t1") {
    t1DB--;
    t1DB = checkDB(t1DB);
  }
  if (termek == "t2") {
    t2DB--;
    t2DB = checkDB(t2DB);
  }
  if (termek == "t3") {
    t3DB--;
    t3DB = checkDB(t3DB);
  }
  if (termek == "t4") {
    t4DB--;
    t4DB = checkDB(t4DB);
  }
  Kiir(termek);
}

function reset() {
  t1DB = 0;
  t2DB = 0;
  t3DB = 0;
  t4DB = 0;
  Kiir();
}

function Kupon() {
  kedvezmeny = 0.1//(Math.random() * 100).toFixed(2);
  Kiir();
}
