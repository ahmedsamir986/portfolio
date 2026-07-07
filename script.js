const counters = document.querySelectorAll(".stats h3");

counters.forEach(counter => {

const target = counter.innerText.replace("+","").replace("%","");

let count = 0;

const update = ()=>{

count += Math.ceil(target/60);

if(count >= target){

counter.innerText = counter.dataset.text;

}else{

counter.innerText = count;

requestAnimationFrame(update);

}

}

update();

});
