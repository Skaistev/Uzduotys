//2 mentoriaus uzduotis

const manoVardas = 'Gėlė';
const manoPavarde = 'Gėlytė';
const gimimoMetai = 2000;
const esamiMetai = 2024;

function amzius (a,b,c,d){

    ///duomenu validacija 

   return `Aš esu ${a} ${b}. Man yra ${d-c} metai(ų).`
}
console.log(amzius(manoVardas,manoPavarde,gimimoMetai,esamiMetai));

//3 mentoriaus uzduotis
// var nr.1

const vardas = 'Dzonis';
const pavarde = 'Bravo';

function trysPaskutinesRaides (vard, pavard){

    if (vard === undefined|| pavard===undefined){
        return 'truksta duomenu'
    }
    if (typeof vard !== "string"||typeof pavard!=="string"){

        return'truksta duomenu'
    }

    let trys = '';
    let trys2 = '';
    let i = 0;

    for (i=vard.length-3; i<vard.length;i++){
      
        trys += vard[i];
    } 
    for (i=pavard.length-3; i<pavard.length;i++){
      
        trys2 += pavard[i];
    } 

    return trys+trys2;
}
console.log (trysPaskutinesRaides(vardas, pavarde));


// var nr.2

function sujungtas (a,b){

    if (a === undefined|| b===undefined){
        return 'truksta duomenu'
    }
    if (typeof a !== "string"||typeof b!=="string"){

        return'truksta duomenu'
    } 
  const x = a.split('').slice(a.length-3,a.length).
            concat(b.split('').slice(b.length-3,b.length)).
            join('');
    return x;

}

console.log(sujungtas(vardas,pavarde));

//4 uzduotis

const stringas = "Once upon a time in Hollywood"

function pakeisti(stringas) {
if (typeof stringas!=="string"){
    return "pateiktas ne tekstas"
}
    let array = stringas.toLowerCase().split('');

      for (let i = 0; i < array.length; i++) {
        array[i] = array[i].replace('o', '*')
        
      }
      return array.join('');
    }
    console.log(pakeisti(stringas));
  



    
