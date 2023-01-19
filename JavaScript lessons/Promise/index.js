/*let calc = +prompt('Iltimos 5 dan katta son kiriting');
let internet = calc > 5 ? true : false;
function webPack() {
	return new Promise((resolve, reject) => {
		if(internet){
			resolve("Yes internet")
		}else{
			reject("No internet")
		}
	})
}
webPack().then((item)=>{
	console.log(item)
}).catch((item)=>{
	console.log(item)
})*/
function getTodo(params) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", (data) => {
      if (request.status == 200 && request.readyState == 4) {
        resolve(data);
      } else if(request.readyState == 4){
        reject("Malumot yoq");
      }
    });
    request.open("GET", params);
    request.send();
  });
}
getTodo("./jkapap.json")
  .then((data) => {
		data = "malum"
    console.log(data);
  })
  .catch((err)=>{
		console.log(err)
		console.error(err);
	});
