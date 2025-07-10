//your JS code here. If required.
const input=document.querySelector("#ip");
const btn=document.querySelector("#btn");
const output=document.querySelector("#output");

btn.addEventListener("click",()=>{
promiseAndTransform()
.then(res=>{
	output.innerText="Final Result: "+res;
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(res*2);
		},2000);
	});
})
.then(res=>{
	output.innerText="Final Result: "+res;
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(res-3);
		},1000);
	});
})
.then(res=>{
	output.innerText="Final Result: "+res;
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(res/2);
		},1000);
	});
})
.then(res=>{
	output.innerText="Final Result: "+res;
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(res+10);
		},1000);
	});
})
.then(res=>{
		output.innerText="Final Result: "+res;
});
});
function promiseAndTransform() {
	const val = parseInt(input.value); 
	return new Promise((resolve)=>{
		if (isNaN(val)) {
			alert("Please enter a valid number");
			return;
		}
		setTimeout(()=>{
			resolve(parseInt(input.value));
		},2000);
	});
}