const products = [
   'lenovo core i5 black color',
    'Dell letitude 520 Black color',
    ' Radmi slim 2 8gb ram Black color',
    'samsung laptop 2  16gb ram Black color',

]
const sarching = 'color';
const output = [];

//for(const product of products){
   //if(product.toLocaleLowerCase().indexOf(sarching.toLocaleLowerCase()) != -1){
    //output.push(product);
    
   //}
//}
/* for(const product of products){
if(product.toLocaleLowerCase().includes(sarching.toLocaleLowerCase())){
    output.push(product);
}}console.log(output); */

/* for(const product of products){
if(product.toLocaleLowerCase().startsWith(sarching.toLocaleLowerCase())){
    output.push(product);
}} */

for(const product of products){
if(product.toLocaleLowerCase().endsWith(sarching.toLocaleLowerCase())){
    output.push(product);
}}

console.log(output);