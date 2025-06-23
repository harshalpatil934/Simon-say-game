let userseq=[];
let gameseq=[];

let btns=["yellow","red","purple","green"];
let level=0;
let started=false;
let hs=0;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
let st=document.getElementById("start");

st.addEventListener("click",function(){
    if(started == false){
    console.log("game started");
    started=true;
    levelup();
    st.innerText="start";
    }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    if (level>hs){hs=level};
    h2.innerText=`level ${level}`;
    h3.innerText=`highest score: ${hs}`;
    
    let randomidx=Math.floor(Math.random()*3);
    let randomcol=btns[randomidx];
    let randombtn=document.querySelector(`.${randomcol}`)
    // console.log(randombtn,randomcol,randomidx);
    gameseq.push(randomcol);
    console.log(gameseq);
    btnflash(randombtn);

}

function check(idx){
    console.log(`current level ${level}`);
    // let idx= level-1;

    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML="game over!! your score was "+level+"<br>click restart to restart the game";
        st.innerText="restart";
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}
function btnpress(){
   let btn=this;
   userflash(btn);
   usercolor=btn.getAttribute("id");
   userseq.push(usercolor);
//    console.log(usercolor);
   check(userseq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
