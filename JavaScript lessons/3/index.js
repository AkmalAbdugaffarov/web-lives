let prom = prompt('Ismingizni kiriting');
let big = prom.charAt().toUpperCase();
let small = prom.slice(1).toLowerCase();
console.log(big+small);

let array = ['akmal', 'axror', 'doniyor'];
for(i=0; i<array.length; i++){
	katta = array[i].charAt().toUpperCase()
	kichik = array[i].slice(1).toLowerCase()
	console.log(katta + kichik)
}
let ismlar = ['samandar', 'ozoda', 'akmal', 'toxirjon', 'nilufar'];
 let y=0;
 while(y<ismlar.length){
	 bosh = ismlar[y].charAt().toUpperCase()
	 mayda = ismlar[y].slice(1).toLowerCase()
	 console.log(bosh + mayda);
	 y++
 }
let x = 0;
do{
	head = ismlar[x].charAt().toUpperCase();
	text = ismlar[x].slice(1).toLowerCase();
	console.log(head + text);
	x++;
}while(x<ismlar.length);