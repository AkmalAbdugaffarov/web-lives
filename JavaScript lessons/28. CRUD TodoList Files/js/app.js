const formCreate = document.getElementById('form-create')
const formEdit = document.getElementById('form-edit')
const listGroupTodo = document.getElementById('list-group-todo')
//const messageCreate = document.getElementById('message-create')
const time = document.getElementById('time')
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
/* time elements */
const fullDay = document.getElementById('full-day')
const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')
const closeEl = document.getElementById('close')
let editItemId ;
//\\\\\\\\\\\\\\\\\\\\\\\\\\ FUNKSIYALAR|||||||||||||||||||||||||||||||||||||||
//*******************todos***********
let todos = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : [];
if(todos.length) showTodos()
/********************show Message*/
function showMessage(where, message) {
	document.getElementById(where).innerHTML = message;
	setTimeout(()=>{
		document.getElementById(where).innerHTML = '';
	}, 2000)
}
//**********************show Todos**/
function showTodos() {
	listGroupTodo.innerHTML = '';
	todos = JSON.parse(localStorage.getItem('list'));
	todos.forEach((item, i)=>{
		listGroupTodo.innerHTML += `
		<li ondblclick=(competedTodos(${i})) class="list-group-item d-flex justify-content-between ${item.competed == true ? "complated" : '' }">
		${item.name}
            <div class="todo-icons">
						<span class="opacity-25 me-2">${item.date}</span>
						<img src="./img/edit.svg" width = '25' height="25" onclick="editTodo(${i})">
						<img src="./img/delete.svg" width = '25' height="25" onclick="deleteTodo(${i})">
					</div>
        </li>
		`
	});
}
//************************time */
function timeTodo() {
	let now = new Date();
	let month = (now.getMonth() + 1)< 10 ? '0'+(now.getMonth()+1) : (now.getMonth()+1);
	let day = now.getDay() < 10 ? '0' + now.getDay() : now.getDay();
	let year = now.getFullYear();
	let hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
	let minute = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
	let second = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
	fullDay.innerHTML = `${day} . ${month} . ${year}`
	hourEl.innerHTML = `${hours}`
	minuteEl.innerHTML = `${minute}`
	secondEl.innerHTML = `${second}`
	return `${hours}:${minute}, ${day}/${month}/${year}`
}
//*********************set Todos */
function setTodos() {
	localStorage.setItem('list', JSON.stringify(todos))
}
//************************deletedTodos */
function deleteTodo(id) {
	let deletedTodos = todos.filter((item, i)=>{
		return i !== id;
	})
	todos = deletedTodos;
	setTodos()
	showTodos()
}
//*********************edit todo **************************/
function editTodo(id) {
	open()
	editItemId = id;
	document.addEventListener('keydown', (e)=>{
		if(e.key == 'Escape')close()
	})
	overlay.addEventListener('click', close);
	closeEl.addEventListener('click', close);
	formEdit.addEventListener('submit', (e)=>{
		e.preventDefault();
		let todoText = formEdit["input-edit"].value.trim();
		formEdit.reset();
		if(todoText.length){
			todos.splice(editItemId, 1, {name: todoText, date: timeTodo(), competed: false});
			setTodos();
			showTodos();
			close();
		}else{
			showMessage("message-edit", "Iltimos biror jumla kiriting.....")
		}
	}
	)
}
function open() {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
}
function close() {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
}
//****************************complated Todos************/
function competedTodos(id) {
	let completeTodos = todos.map((item, i)=>{
		if(id == i){
			return {...item, competed: item.competed == true ? false : true}
		}else{
			return {...item}
		}
	})
	todos = completeTodos;
	setTodos();
	showTodos();
}
//|||||||||||||||||||||||||||||BOSHQALARI||||||||||||||||||||||||||||||||||||||
setInterval(timeTodo, 1000)
//*********************get Todo *****************************************/
formCreate.addEventListener('submit', (e)=>{
	e.preventDefault();
	let todoText = formCreate["input-create"].value.trim();
	formCreate.reset();
	if(todoText.length){
		todos.push({name: todoText, date: timeTodo(), competed: false});
		setTodos();
		showTodos();
	}else{
		showMessage("message-create", "Iltimos biror jumla kiriting.....")
	}
})
/*<li class="list-group-item d-flex justify-content-between">
<div class="todo-icons">
<span class="opacity-25 me-2"></span>
<img src="./img/edit.svg" width = '25' height="25">
<img src="./img/delete.svg" width = '25' height="25">
</div>
</li>*/