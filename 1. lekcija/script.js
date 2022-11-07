Varijable
//parseInt pretvara string u broj
let prvi_broj = 5;
let drugi_broj = 10;
let treci_tmp;

treci_tmp=prvi_broj;
prvi_broj=drugi_broj;
drugi_broj=treci_tmp;
//prvi_broj=drugi_broj; //= ne zanci = vec znaci postaje

console.log('Prvi broj:'+prvi_broj);
console.log('Drugi broj:'+drugi_broj);/ 
......................................................

let ime = 'Hasan';
let prezime = 'Mujanovic';
let godine = 17;

godine += 4;// ili - uemesto +

let recenica=`Ja sam ${ime} imam ${godine} godina`

console.log(recenica);
.......................................................................................
Logicki operatori
let prvi_broj= 10;
let drugi_broj= 5;

let trecibr= 7;
let cetbr= 10;

console.log(prvi_broj> drugi_broj);
console.log(trecibr>cetbr);
console.log((prvi_broj> drugi_broj)||(trecibr>cetbr))//ove crte (ili ili) gledaju jel samo jedno tacno
console.log((prvi_broj> drugi_broj)&&(trecibr>cetbr))// ovi znaci i i gledaju da oba moraju da buud ttacna
.....................................................................................................................................
else i switch
let prvi_broj=5;
let drugi_broj=10;

if(prvi_broj<drugi_broj){
    console.log('prvi broj je manji od drugog')
} else{
    console.log('prvi broj nije manji od drugog')
}

let vrijeme= 199;
 
if(vrijeme < 10) {
    console.log('dobro jutro');
} else if(vrijeme<20) {
    console.log('Dobar dan');
} else{
    console.log('dobro vece')
}


let mjesec=7;

switch(mjesec){
    case 1:
        console.log('Janura');
        break;
    case 2:
        console.log('Februar');
        break;
    case 3:
        console.log('Mart');
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('Maj');
        break;
    case 6:
        console.log('Jun');
        break;
    case 7:
        console.log('Jul');
        break;
    case 8:
        console.log('Avgust');
        break;
    case 9:
        console.log('Septembar');
        break;
    case 10:
        console.log('Oktobar');
        break;
    case 11:
        console.log('Novembar');
        break;
    case 12:
        console.log('Decembar');
        break;
}
..................................................................
Petlje


let novcanice = 25; //broj novcanica
let vrijednost_novcanice = 50; //vrednost voncanica

// izobrojane novcanice
let izbrojane_novcanice= 0;

//broji novcanice sve dok je brojac manji od br novcanica
while(izbrojane_novcanice <25 ){
    izbrojane_novcanice++;
    
}
console.log(izbrojane_novcanice * vrijednost_novcanice);
.........................................................................
nizovi i petlje


let novcanice=[10, 5, 20, 50, 5, 10, 100, 20, ];
let broj_novcanica= novcanice.length;
console.log(broj_novcanica);
let izbrojane_novcanice=0;

while(izbrojane_novcanice < broj_novcanica){
    izbrojane_novcanice++;
}
console.log('Broj izbrojanih novcanica je: ' + izbrojane_novcanice)



let novcanice=[10, 5, 20, 50, 5, 10, 100, 20, ];
let broj_novcanica= novcanice.length;
let brojac = 0;
while( brojac < broj_novcanica  ){
    console.log('---------------------');
    console.log('Uslov prosao');
    console.log(`Novcanica na poziciji niza [${brojac}]: ${novcanice[brojac]}`);
    brojac++
}

console.log('--KRAJ PETLJE--')

if(brojac < broj_novcanica){
    console.log('Brojac je manji');
} else {
    console.log('Brojac nije manji')
}

console.log('Brojac:'+brojac)
.....................
    for petlja

let novcanice=[10, 5, 20, 50, 5, 10, 100, 20,];
let broj_novcanica= novcanica.length;
let brojac = 0;
let ukupno_novca = 0;
//moze i da se makne ovo let brojac i da se stavi odmah dole u for(let brojac=0; ide nastavk posle)
for(brojac= 0; brojac < broj_novcanica; brojac++){
    console.log(novcanice[brojac]);
    ukupno_novca += novcanica[brojac];
}
console.log('----KRAJ PETLJE----');
console.log('Ukupno novca imamo: ' + ukupno_novca + ' eura');



 MNOGO LAKSI NACIN DA SE ZAPISE FOR PETLJA
let novcanice=[10, 5, 20, 50, 5, 10, 100, 20,];
for (let brojac in novcanice){
    csole.log(brojac);
    csole.log(novacnice[brojac]);
    csole.log('----------')
}

//GORE TREBA SVE DA BUDE NOVCANICE NE NOVCANICA
 

let novcanice=[10, 5, 20, 50, 5, 10, 100, 20,];

for(let novcanica of novcanice){
    console.log(novcanica)
}


let automobili = ['Audi', 'BMW','Porsche','Mercedes'];

for(let automobil of automobili){
    console.log(automobil)
}



let automobili = ['Audi', 'BMW','Porsche','Mercedes'];

automobili.forEach(function(automobil) {
    console.log(automobil);

});
.................................................................................
PETLJE I OBJEKTI

let automobili = {
    audi:['70000','2019','R8'],
    mercedes:['80000','2017','S400'],
    porsche:['10000','2020','Macan'],
    bmw:['12000','2022','M']
};

for(automobil in automobili){
    let naziv = automobil
    let podaciOvozilu = automobili[automobil];

    console.log(`${naziv} model: ${podaciOvozilu[2]}, 
    godiste: ${podaciOvozilu[1]},
    cijena:${podaciOvozilu[0]}`)
}

console.log(automobili.bmw);//ne moraju []ove zagrade moze samo tacka da se stavi
............................................................................................................................
FUNKCIJE

let nekretnine= {
    kuca: 50000,
    stan: 100000,
    plac: 120000,
};

//KUCU
let godine = 15;
let mjeseci = godine*12
let rata = (nekretnine.Kuca/mjeseci);
rata= rata.toFixed(2);
console.log(`Mjesecna rata za kucu iznosi ${rata} eura na ${godine}`)

//PLAC
godine = 5
mjeseci = godine*12
rata= nekretnine.Plac/mjeseci;

console.log('--------');
console.log(`Mjesecna rata za plac iznosi ${rata} eura na ${godine}`)

//STAN
godine = 25
mjeseci = godine*12
rata= nekretnine.Plac/mjeseci;

console.log('--------');
console.log(`Mjesecna rata za kucu iznosi ${rata} eura na ${godine}`)

let nekretnine= {
    kuca: 50000,
    stan: 100000,
    plac: 120000,
};
RacunanjeMjesecneRate(15,'kuca');
RacunanjeMjesecneRate(5,'stan');
RacunanjeMjesecneRate(25,'plac');
function RacunanjeMjesecneRate(godine, vrstaNekretnine){
    let mjeseci= godine*12;
    let rata= nekretnine[vrstaNekretnine]/mjeseci;
    rata=rata.toFixed(2);
    console.log('----------------')
    console.log(`Mjesecna rata za ${vrstaNekretnine} iznosi ${rata} na ${godine} godina`);

}
....................................................................................
SELEKTOVANJE I UPRAVLJANJE HTML ELEMENTIMA

let brend =document.getElementsByTagName('span')
for(let auto of brend){
    console.log(auto.innerText);
}

console.log('-------------------------------------');
let modeli= document.getElementsByClassName('automobil-model');

for(let model of modeli){
    console.log(model.innerText);
}

let najbolji= document.getElementById('recenica')

console.log(najbolji.innerText);

console.log('-------------------------------------');


let  brend=document.querySelectorAll('span');

for (let auto of brend){
    console.log(auto.innerText);
}

let modeli=document.querySelectorAll('.automobil-model')

for(let model of modeli){
    console.log(model.innerText);
}

let recenica = document.querySelector('#recenica');
console.log(recenica.innerText);

let recenica= document.querySelector('#recenica');
recenica.remove();

let noviEl = document.createElement('div');
noviEl.classList= 'noviEl';
noviEl.innerHTML='<hr>Hasan babo';
//noviEl.innerText='Hasan babo';
let body = document.querySelector('body');//selektujemo body ag
body.appendChild(noviEl);//na kraju body taga dodajemo nas element








