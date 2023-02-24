// const grad = [0, -8, -13, -10, 4, 20, 25, 30, 16];
// let farangeyt = grad.map((item)=>{
// 	return (item * 1.8 + 10)
// })
// console.log(farangeyt)
// const z = [
// 	{name:' Ivan', order: 12, sum: '123,5'},
// 	{name:' Sergey   ', order: 12, sum: '123. 5'},
// 	{name:'matilda   ', order: 12, sum: '123, 5'},
// 	{name:' Ivanov peter  ', order: 12, sum: '123,5'}
// ]

// for(i = 0; i < z.length; i ++){
// 	let a = z[i].name.trim();
// 	z[i].name = a;
// 	z[i].order = i;
// 	let c = new RegExp(' ')
// 	let d = new RegExp(',')
// 	let e = z[i].sum.replace(c, '')
// 	z[i].sum = e
// 	let f = z[i].sum.replace(d, '.')
// 	z[i].sum = f
// }
// console.log(z)
// let client = [
// 	{lin: 'qwb5kg8f', user:"Ivanov", debt: 4},
// 	{lin: '44fjsh78', user:"Sergey", debt: 117},
// 	{lin: 's88hdbg2', user:"Pavlov", debt: 54},
// 	{lin: 'gade4838', user:"Yevgeni", debt: 10},
// 	{lin: 'jkkh00hm', user:"Denisov", debt: 18},
// 	{lin: '23re334d', user:"Maksimov", debt: 9},
// 	{lin: '23rvfd4r', user:"Savchinov", debt: 150}
// ]
// let a = client.filter((item, index)=>{
// 	return item.debt > 10
// })

// console.log(a)

// let id = [
// 	{id: 100.55, city:'NewYork'},
// 	{id: 101.83, city:'London'},
// 	{id: 584.47, city:'Moscow'},
// 	{id: 464.17, city:'Tashkent'}
// ]

// let c = id.reduce((accum, item, index, arrat)=>{
// 	accum.push(item.id)
// 	return accum
// }, [])

//console.log(c)
// let a = [3, 4, 5, 6, 7, 89, 0, 45, 98, 12, 2, 3, 5, 6, 8];
// let c = a.reduce((accum, item, index, array)=>{
// 	if(item > 10){
// 		accum.push(array[index])
// 	}
// 	return accum
// }, [])
// console.log(c)
// const d = [11, 22, 33, 44, 55, 66]
// let f = d.unshift(11, 22)
// console.log(f, d)
// const b = [11, 22, 33, 44, 55, 66]
// let s = d.shift()
// console.log(s, b)
//================================
let a = 'hello world fvfvfvfv'
let b = a.split(' ');

let c = b.map((item)=>{
	return item = item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase();
})
console.log(c.join(' '))