// required elements from HTML
let inLen = document.querySelector("#in-len") ;
let inScreen_2 = document.querySelector("#in-screen-2") ;
let opScreen = document.querySelector("#op-screen") ;
let btnSubmitScreen_1 = document.querySelector("#btn-submit-screen-1")

let inLenValue ;
let inScreen_2Value = [] ;

// input event for inLen to update the lenght of array
inLen.addEventListener("input" , (e)=>{
	inLenValue = e.target.value ;
})

// creating input element inside the in-screen-2 based inLenValue to take some input value when clicked in btnSubmitScreen_1
btnSubmitScreen_1.addEventListener("click" , ()=>{
	for(let i=0; i<inLenValue; i++){
		inScreen_2Value[i] = {} ;
		
		inScreen_2Value[i][`inTag_${i}`] = document.createElement("input") ;
		inScreen_2Value[i][`inTag_${i}`].className = "input-screen-2" ;
		// console.log(inScreen_2Value[i][`inTag_${i}`]) ;


		// document.body.appendChild(inScreen_2Value[i][`inTag_${i}`]) ;
		document.inScreen_2.appendChild(inScreen_2Value[i][`inTag_${i}`]) ;
	}
})







