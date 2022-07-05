
function add(a:number, b:number){
    return a+b;
}

console.log(add(10, 20));


const   el = document.getElementById('status');
// el.textContent = 'hello kama l'; // ~~ Object is possibly 'null'

if(el){
    el.textContent = 'hello kamal 1';
}