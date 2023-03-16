let activeTask = [] ;
let activeCount = -1 ;
let completedTask = [] ;
let completedCount = 0 ;
let allTask = [] ;
let count = -1 ;
let newTodo = "" ;

// input event for input new todo
document.querySelector("#in-new-todo").addEventListener("input" , (e)=>{
	newTodo = e.target.value
})
// click event for Add task button
document.querySelector("#btn-add-task").addEventListener("click" , ()=>{
	count++ ;
	activeCount++ ;
	if(newTodo == ""){
		alert("Enter new task !") ;
		return undefined ;
	}
	activeTask[activeCount] = document.createElement("div") ;
	activeTask[activeCount].id = `list-${count+1}` ;
	activeTask[activeCount].classList.add("box") ;
	activeTask[activeCount].setAttribute("draggable", "true") ;
	// state of the div (active , completed)
	activeTask[activeCount].state = "active" ;
	document.querySelector("#task-screen").appendChild(activeTask[activeCount]) ;

	// span tag for active or completed circle 
	activeTask[activeCount].circle = document.createElement("span") ;
	activeTask[activeCount].circle.classList.add("active-circle") ;
	activeTask[activeCount].appendChild(activeTask[activeCount].circle) ;
	// inside circle span we have 2 things (small-circle , check-icon)
	// small-circle
	activeTask[activeCount].circle.smallCircle = document.createElement("span") ;
	activeTask[activeCount].circle.smallCircle.classList.add("complete-small-circle") ;
	activeTask[activeCount].circle.appendChild(activeTask[activeCount].circle.smallCircle) ;
	// check-icon
	activeTask[activeCount].circle.checkIcon = document.createElement("img") ;
	activeTask[activeCount].circle.checkIcon.setAttribute("src" , "./Images/icon-check.svg") ;
	activeTask[activeCount].circle.appendChild(activeTask[activeCount].circle.checkIcon) ;

	// span tag for info
	activeTask[activeCount].info = document.createElement("span") ;
	activeTask[activeCount].info.classList.add("info") ;
	activeTask[activeCount].info.textContent = newTodo ;
	activeTask[activeCount].appendChild(activeTask[activeCount].info) ;

	// span tag for cross
	activeTask[activeCount].cross = document.createElement("span") ;
	activeTask[activeCount].cross.classList.add("cross") ;
	activeTask[activeCount].cross.id = `cross-list-${count}` ;
	activeTask[activeCount].appendChild(activeTask[activeCount].cross) ;
	// inside cross span we need 2 images
	// cross image
	activeTask[activeCount].cross.image = document.createElement("img") ;
	activeTask[activeCount].cross.image.setAttribute("src" , "./Images/icon-cross.svg") ;
	activeTask[activeCount].cross.appendChild(activeTask[activeCount].cross.image) ;
	// hover cross image
	activeTask[activeCount].cross.hoverImage = document.createElement("img") ;
	activeTask[activeCount].cross.hoverImage.setAttribute("src" , "./Images/cross-hover.svg") ;
	activeTask[activeCount].cross.appendChild(activeTask[activeCount].cross.hoverImage) ;

	// ********************************************************************************************************
	// click event on circle
	activeTask.forEach((ele)=>{
		ele.circle.addEventListener("click" , ()=>{
			if(ele.state == "active"){
				ele.state = "completed" ;
				ele.circle.classList.remove("active-circle") ;
				ele.circle.classList.add("completed-circle") ;
		
			}
			else{
				ele.state = "active" ;
				ele.circle.classList.remove("completed-circle") ;
				ele.circle.classList.add("active-circle") ;
			}
		})
	})


	newTodo = "" ;
	document.querySelector("#in-new-todo").value = "" ;
})

