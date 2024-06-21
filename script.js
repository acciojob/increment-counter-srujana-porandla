//your JS code here. If required.
function increment(){
			var count=document.getElementById("counter");
			var current=parseInt(count.innerText);
		alert(current);
			count.innerText=current +1;
}
/*let counterB=document.getElementById("counter");
let incrementB=document.getElementById("incrementBtn");

let counterValue=0;

incrementB.addEventListener("click",()=>{
	 alert(`${parseInt(counterValue)}`);
	 counterValue++;
	 counterB.innerHTML = parseInt(counterValue);
});*/
