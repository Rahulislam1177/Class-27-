const anthem = 'Amar Sunar Bangla Ami Tumay Valobasi';
//const word =anthem.split(' ');

const slice = anthem.slice(11, 15);
//console.log(slice);

const substr = anthem.substr(11, 15);
//console.log(substr);

/* const first ='Rahul ';
const second = 'islam';
const fullName =first.concat(second); */

const first ='Rahul ';
const second = 'islam';
const fullName =first.concat(second).concat(' is not good')
//console.log(fullName);

const names = ['shakib','Rajab','YearHossin','shariful']
const join = names.join(' ')
//console.log(join);

const array1 =[1,2,3,4];
const array2 = [5,6,7,8];
const total = array1.concat(array2);
//console.log(total);
if(array1.includes( 4)){
    //console.log('This is hear');
}

const number = [4,5,42,3,5,4,76,45,34,23,3,6,4,34,4,756,3,45,];
const splice = number.splice(5,11);
//console.log(splice);

const shortLost = [4,5,8,3,2,9,26,6,1,9,4,];
const totael =shortLost.sort()
//console.log(totael);

const nlfjs = ['Rahul islam','shariful','yearhossin','saidur']
const givfirst = nlfjs.reverse();
//console.log(givfirst);