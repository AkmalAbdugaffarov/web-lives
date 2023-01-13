let mevalar = ['Olma', 'Nok', 'Uzum', 'Behi', 'Xurmo', 'Tarvuz', 'Xandalak'];
let [olma, nok, uzum, behi, ...boshqalar] = mevalar;
console.log(mevalar);
let obj = {name:'Akmal', age:23, city:'Angren', lang:'Onliy Uzbek'};
let {name, age, city:angren, ...ture} = obj;
console.log(angren);