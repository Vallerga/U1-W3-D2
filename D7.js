/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
/*ricevere 2 stringhe come parametri
selezionare primi 2 caratteri della prima stringa
selezionare gli ultimi 3 della seconda stringa
concatenare due stringe risultanti
converti la prima stringa rislutante maiuscola
fai console.log del risultato */

/* const stringConcatenator = function (string1, string2, modificator) {
  let stringTroncated1 = string1.substring(0,2);
  let stringTroncated2 = string2.split('').reverse().join('').substring(0,3).split('').reverse().join('');
  return modificator(stringTroncated1+stringTroncated2);
} */

console.log("\n EXECISE 1°\n");

let stringFirst = "antonio";
let stringSecond = "vallerga";

const stringConcatenator = (string1, string2, modificator) =>
  modificator(
    string1.substring(0, 2) + string2.split("").reverse().join("").substring(0, 3).split("").reverse().join("")
  );

const madeUpString = (strToUpper) => strToUpper.toUpperCase();

console.log(stringConcatenator(stringFirst, stringSecond, madeUpString));

/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

console.log("\n EXECISE 2°\n");

let randomRange = 100;
let arrDim = 10;

const createArray = function (num, variability) {
  let arrayGenerated = [];
  for (i = 0; i < num; i++) {
    arrayGenerated[i] = randomNum(variability);
  }
  return arrayGenerated;
};

const randomNum = function (range) {
  return Math.floor(Math.random() * range);
};

console.log(createArray(arrDim, randomRange));

/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici (suggerimento: il metodo filter può aiutare)
*/

console.log("\n EXECISE 3°\n");
const onlyEvenNum = (arrayToFilter) => arrayToFilter.filter((evenFunction) => evenFunction % 2 === 0);

let resultEx3 = createArray(arrDim, randomRange);
console.log("lista completa", resultEx3);
console.log("solo numeri pari", onlyEvenNum(resultEx3));

/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
/*scrivi una funzione
riceve numeri da array
li somma*/

console.log("\n EXECISE 4°\n");
const sumArrFor = function (arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
const arrayToSum = [2, 4, 5, 3, 7];
console.log("somma calcolata con for loop", sumArrFor(arrayToSum));

/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/

console.log("\n EXECISE 5°\n");
const sumArr = function (arr) {
  let arraySum = arr.reduce((acc, val) => acc + val);
  return arraySum;
};
const arrNumEx5 = [2, 4, 5, 3, 7];
console.log("somma calcolata con il metodo reduce", sumArr(arrNumEx5));

/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

console.log("\n EXECISE 6°\n");

let n = 5;
let arrEx6 = [4, 6, 8, 3, 2, 1, 9];

const arrChanger = (arrTar, change) => arrTar.map((arr) => arr + change);

console.log(arrChanger(arrEx6, n));

/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

console.log("\n EXECISE 8°\n");

let countMe = ["viva", "informatica", "sempre"];

const strLength = (param) => param.map((param) => param.length);

console.log(countMe);
console.log(strLength(countMe));

/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

console.log("\n EXECISE 9°\n");

rangeEx9 = 100;

const oddNum = (param) => {
  let container = [];
  for (i = 0; i < param; i++) {
    container[i] = i;
  }
  return container.filter((element) => element % 2 !== 0);
};

console.log(oddNum(rangeEx9));

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

console.log("\n EXECISE 10°\n");

const olderMovie = (param) => {
  let arrYears = [];
  let oldYear;
  param.forEach((element, i) => (arrYears[i] = element.Year));
  oldYear = arrYears.reduce((acc, val) => (acc > val ? acc : val));
  let index = arrYears.indexOf(oldYear);
  return movies[index];
};

console.log(olderMovie(movies));

/* ESERCIZIO 11  
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

console.log("\n EXECISE 11°\n");

const moviesNum = (param) => {
  let numberOfMovies = 0;
  let numberOfOther = 0;
  param.forEach((element) => (element.Type === "movie" ? numberOfMovies++ : numberOfOther++));
  console.log("i film sono: ", numberOfMovies);
  console.log("i non film sono: ", numberOfOther);
  return numberOfMovies;
};

console.log(moviesNum(movies));

/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

console.log("\n EXECISE 12°\n");
const titleMov = (param) => param.map((element) => element.Title);

console.log(titleMov(movies));

/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

console.log("\n EXECISE 13°\n");
const newMilMovies = (param) => param.filter((element) => Number(element.Year) > 2000);

console.log(newMilMovies(movies));

/* ESERCZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

console.log("\n EXECISE 14°\n");

let movieID = "tt1731697";

const findByID = (param, id) => (idMovie = param.filter((element) => element.imdbID === id));

console.log(findByID(movies, movieID));

/* ESERCIZIO 15
  Scrivi funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

console.log("\n EXECISE 15°\n");

let sumOfYears;

const totalYear = (param) => {
  let yearArr = param.map((element) => Number(element.Year));
  return yearArr.reduce((acc, val) => acc + val) 
};

console.log("la somma degli anni è: ", totalYear(movies));