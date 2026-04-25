function checkPass(){

let password=document.getElementById("pass").value;

if(password==="password123"){
document.getElementById("login").style.display="none";
document.getElementById("main").style.display="block";
startCounter();
createHeartText();
}
else{
alert("Wrong password");
}

}

/* LOVE LETTER */

function openLetter(){
document.getElementById("letter").style.display="block";
}

function closeLetter(){
document.getElementById("letter").style.display="none";
}

/* RUNAWAY BUTTON */

let noBtn=document.getElementById("no");

noBtn.addEventListener("mouseover",function(){

let x=Math.random()*window.innerWidth;
let y=Math.random()*window.innerHeight;

noBtn.style.left=x+"px";
noBtn.style.top=y+"px";

});

/* HEART TEXT */

function createHeartText(){

let container=document.getElementById("heartText");

for(let i=0;i<100;i++){

let heart=document.createElement("div");

heart.className="heart-piece";
heart.innerHTML="❤️";

heart.style.left=Math.random()*400+"px";
heart.style.top=Math.random()*120+"px";

container.appendChild(heart);

}

}

/* COUNTER */

function startCounter(){

let startDate=new Date("2025-10-03");

setInterval(function(){

let now=new Date();

let diff=now-startDate;

let days=Math.floor(diff/(1000*60*60*24));

document.getElementById("counter").innerText=days+" days with you ❤️";

},1000);

}

/* QUESTION */

function yesLove(){
document.getElementById("loveAnswer").innerText="I knew it ❤️";
}

function maybeLove(){
document.getElementById("loveAnswer").innerText="Sorry Madam 🥺";
}

/* SURPRISE */

function surprise(){
    document.getElementById("final").classList.add("show")

startHeartAnimation()
alert("You are the best thing in my life ❤️. Mai aapko aise sad nhi kr skti...mujhe aap hi chahiye hamesha...sorry dilo maaf krdo mujhe....plz gussa shod do...mt rkho narazgi....mujhe guilty feel horha hai ki aap hurt huye but mai apko hurt nhi krna chahti thi...mujhe feel hogya h maine glti ki hai lekin plz maaf krdo mt ho door mujhse bss aap hi ho mere...aap mere liye bhut sochte ho...mai nhi chhati aapse door hona kbhi bhi aapki hu m apki hi rhungi...thank you hamesha mere sath rehene k liye...hmesha meri care krne k liye...hamesha meri glti maaf krne ko...plz aap hi toh ho jo mujhe sahi rasta dikhoge...mujhe koi aur nhi chahiye...bss aap chahiye....plzz dilo maaf mngdi aa plz krdo maaf mainu....betu mere aao nayi zindagi start krte hai hum ladte bhut hai lekin pyaar bhi h dono mai....ik aap nhi reh skte mere bina aur m apke bina....I want you you you always and forever....mela bcha sorry maaf krdo mujhe mere hi rho...aapko hurt kiya maine aap roye sorry uske liye mujhe guilty feel horha...but uk what mai apse hi pyaar krti hu tbhi aapke liye try kti hu efforts kru choti si koshish kr rhi apko manane k liye...khna bhi nhi khya maine socha tha apse btt krke khungi lekin mood khrb hogya aur zyda...nhi khya ab sidha sehri hi khaungi....betuuuu meriii jaannn mere hoo plz mere hi rehna hamesha...love you so so much my man.");
}

/* ROSES */

function createRose(){

let rose=document.createElement("div");

rose.className="rose";
rose.innerHTML="🌹";

rose.style.left=Math.random()*100+"vw";
rose.style.animationDuration=(Math.random()*3+3)+"s";

document.body.appendChild(rose);

setTimeout(()=>{rose.remove();},6000);

}

setInterval(createRose,500);

/* FINAL FIREWORK */

document.getElementById("forgive").onclick=function(){

for(let i=0;i<100;i++){

let heart=document.createElement("div");

heart.className="heart";
heart.innerHTML="❤️";

heart.style.left=Math.random()*window.innerWidth+"px";
heart.style.top=Math.random()*window.innerHeight+"px";

document.body.appendChild(heart);

setTimeout(()=>{heart.remove();},1000);

}

setTimeout(function(){

document.getElementById("finalMessage").style.display="flex";

},1200);

};

function startHeartAnimation(){

const canvas=document.getElementById("heartCanvas")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let hearts=[]

for(let i=0;i<120;i++){

hearts.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:10+Math.random()*20,
speed:1+Math.random()*2
})

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

hearts.forEach(h=>{

ctx.font=h.size+"px Arial"
ctx.fillText("❤️",h.x,h.y)

h.y-=h.speed

if(h.y<0){
h.y=canvas.height
}

})

requestAnimationFrame(draw)

}

draw()

}