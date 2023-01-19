const request = new XMLHttpRequest();
request.open("GET", "aekjrgnaer");
request.send();
request.addEventListener("readystatechange", (e) => {
 console.log(e.target);
});
