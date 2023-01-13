// //console.log(new Date())
// // const now = new Date();
// // const today = now.getDate();
// // let month = now.getMonth();
// // let newMon = month + 1 ;
//  const  months = [
// 	'Yanvar',
// 	'Fevral',
// 	'Mart',
// 	'Aprel',
// 	'May',
// 	'Iyun',
// 	'Iyul',
// 	'August',
// 	'Sentyabr',
// 	'Oktyabr',
// 	'Noyabr',
// 	'Dekabr'
// ];
// // const year = now.getFullYear();
// // console.log('Today:', today);
// // console.log('Month:', newMon);
// // console.log('Year:', year);
// const second = document.getElementById('second');
// const minut = document.getElementById('minut');
// const hours = document.getElementById('hours');
// const day = document.getElementById('day');
// const month = document.getElementById('month');
// const year = document.getElementById('year');
// let array = [];
// let ism = 'Samandar';
// setInterval(()=>{
// 	second.innerHTML = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
// 	minut.innerHTML = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
// 	hours.innerHTML = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours();
// 	year.innerHTML = new Date().getFullYear();
// 	day.innerHTML = new Date().getDate();
// 	month.innerHTML = months[new Date().getMonth()]
// }, 100)