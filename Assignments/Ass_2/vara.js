const Rest =document.getElementById("Rest");
const player1=document.getElementById("p1");
const player2=document.getElementById("p2");
const button=document.getElementById("rollbutton");
button.addEventListener("click",function(){
 let p1=Math.floor(Math.random()*6)+1;
 let p2=Math.floor(Math.random()*6)+1;

player1.src=`./images/dice${p1}.png`;
player2.src=`./images/dice${p2}.png`;

if(p1>p2){
    Rest.innerText="Player1 Win🏆"
}
else if(p1<p2){
    Rest.innerText="Player2 Win🥇"
}
 else
 {
    Rest.innerText="Match Draw 👌"
 }

});