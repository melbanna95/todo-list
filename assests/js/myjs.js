document.body.classList.add(localStorage.getItem('bgColor' || 'defult '))
var el = document.querySelectorAll('.color-switcher li')
var classesList = [];
for(var i =0;i<el.length;i++){
  classesList.push(el[i].getAttribute('data-color'));
  el[i].addEventListener('click',function(){
    document.body.classList.remove(...classesList)
document.body.classList.add(this.getAttribute('data-color'))
localStorage.setItem('bgColor',this.getAttribute('data-color'))
  },false


 )
}

// degital clock
function digitalClock(){
  let date1 = new Date();
  var hours = date1.getHours();
   var minutes = date1.getMinutes();
  var seconds = date1.getSeconds();
  flag = 'AM'
  if (hours == 0){
    hours = 12
  }
  if(hours > 12){
    hours = hours - 12 
    flag = 'PM'
  }
  if(seconds<10){
    seconds = "0"+seconds
  }
  if(minutes<10){
    minutes = "0"+minutes
  }
  if(hours<10){
    hours = "0"+hours
  }
setTimeout(function(){
  digitalClock()
},1000)
  document.querySelector('.digitalClock').innerHTML=` time now is : ${hours}:${minutes}:${seconds}:${flag}`
}
digitalClock();
// analogue clock 
var hr = document.getElementById('hr')
var mn = document.getElementById('mn')
var sc = document.getElementById('sc')
function analogueClock(){
  let date = new Date();
var hours = date.getHours() * 30;
   var minutes = date.getMinutes() * 6;
  var seconds = date.getSeconds() * 6;
  hr.style.transform='rotatez(' + ((hours) + (minutes/12)) +  'deg)'
  mn.style.transform='rotatez(' + minutes +'deg)'
  sc.style.transform='rotatez(' + seconds +'deg)'
  setTimeout(() => {
    analogueClock()
  }, 1000);
}
analogueClock()
//count time down

function countdown(){

  let theDate = document.getElementById('Date').value
  var countDownDate = new Date('2022-11-1').getTime();


 

  var now = new Date().getTime();
    console.log(now);

  var distance = countDownDate - now;
    
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  
    document.getElementById("counter").innerHTML = days + "d: " + hours + "h: "
    + minutes + "m: " + seconds + "s: ";
    let xo = setInterval(function() {countdown()}, 1000);
    
    if (distance <= 0 || theDate === "") {
      clearInterval(xo);
      document.getElementById("counter").innerHTML = "EXPIRED";
      
    }
   
    }

  
// todo list 
let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksUl = document.querySelector(".tasks");


let arrayOfTasks = [];


if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}


getDataFromLocalStorage();


submit.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value); 
    input.value = ""; 
    delall.style.visibility='visible'
    
  }
};


tasksUl.addEventListener("click", (e) => {
 
  if (e.target.classList.contains("btn-close")) {
   
    deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
  
    e.target.parentElement.remove();
    
  }
 
  if (e.target.classList.contains("task")) {
    
    toggleStatusTaskWith(e.target.getAttribute("data-id"));
    
    e.target.classList.toggle("done");
  }
});

function addTaskToArray(taskText) {
  
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
 
  arrayOfTasks.push(task);
  
  addElementsToPageFrom(arrayOfTasks);
  
  addDataToLocalStorageFrom(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks) {
 
  tasksUl.innerHTML = "";
 
  arrayOfTasks.forEach((task) => {
   
      let li = document.createElement("li");
    li.className = "task";
    
   
    if (task.completed) {
      li.className = "task done";

    }

    
   li.setAttribute("data-id", task.id);

li.appendChild(document.createTextNode(task.title)) ;
  
    let span = document.createElement("span");
    span.className = "btn-close";
    
    
    
   
 
    li.appendChild(span);
    
    tasksUl.appendChild(li);
    }
    
  )
  
}

function addDataToLocalStorageFrom(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElementsToPageFrom(tasks);
  }
}

function deleteTaskWith(taskId) {
 
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addDataToLocalStorageFrom(arrayOfTasks);
}

function toggleStatusTaskWith(taskId) {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == taskId) {
      arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
    }
  }
  addDataToLocalStorageFrom(arrayOfTasks);
}
for (let i = 0; i < arrayOfTasks.length; i++){
  if (arrayOfTasks[i]!==null){
    var delall=document.createElement('button')

  } else { delall.style.display='none'}
  console.log()
}
 
delall=document.querySelector('.delall')

checkTasks = window.localStorage.getItem("tasks")
if(checkTasks == null ){
  
 delall.style.visibility='hidden'
 

 
} else {
  delall=document.querySelector('.delall')
}
delall.addEventListener('click',celarData)
function celarData(){
  localStorage.removeItem('tasks')
  document.getElementById("checkList").innerHTML = ""
  
  this.style.visibility='hidden'
 arrayOfTasks = []
}



modeButton = document.querySelector('.mode')

if(window.matchMedia('(prefers-color-scheme: light)').matches){
  modeButton.addEventListener('click',toDarkMode)

} if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark-mode')
  modeButton.addEventListener('click',toLightMode)

  
}
function toDarkMode(){
  var ele = document.body;
  ele.classList.toggle('dark-mode')

} 
function toLightMode(){
 document.body.classList.toggle('dark-mode')

}
