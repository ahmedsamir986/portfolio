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
window.addEventListener("scroll",function(){

const nav=document.querySelector(".navbar");

nav.classList.toggle("scrolled",window.scrollY>80);

});
const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.2});

sections.forEach(section=>{

observer.observe(section);

});
