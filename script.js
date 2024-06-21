//your JS code here. If required.
let counterB=document.getElementById("counter");
let incremetB=document.getElementById("incrementBtn");

let counterValue=0;

incrementB.addEventListener("click",()=>{
	 alert(`${counterValue}`);
	 counterValue++;
	 counterB.textContent = counterValue;
});
