
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
;
const firebaseConfig = {
  apiKey: "AIzaSyBk_AKqvLSl_kj-iEpTgTMoQsxAF3euPkE",
  authDomain: "whally-clicker.firebaseapp.com",
  projectId: "whally-clicker",
  storageBucket: "whally-clicker.firebasestorage.app",
  messagingSenderId: "166881539100",
  appId: "1:166881539100:web:321abfe5f4739206e51bd9",
  measurementId: "G-91V6NWJ7M2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const button = document.getElementById("click");
const clickmessage =  document.getElementById("clicked");
const pointslog =  document.getElementById("points");
const upgradebtn= document.getElementById("upgradebtn")
const balance= document.getElementById("balance");
const ppool=document.getElementById("passivepool");
const royalsubjects= document.getElementById("royalsubjects");
const incomep= document.getElementById("incomep");
const currentscore= document.getElementById("currentscore");
const afktimer=document.getElementById("afktimer");
const warning= document.getElementById("warning");
const resetstats=  document.getElementById("resetstats");
const nfts= document.getElementById("nfts");
const save=  document.getElementById("save");
const luckbtn= document.getElementById("luckbtn");
const lucktext= document.getElementById("lucktext");


let count = 0;
let score = 1;
let basecost =  1000;
let clickermax = 12;
let ppoolmax =10;
let royalmax =5;
let nftmax =5;
let level =0;
let ppoollvl =0;
let royallvl =0;
let nftlvl =0;
let inactivityTimer;
let passive = 0;
let ppoolcost= 3000;
let royalsubjectscost= 25000;
let nftscost= 100000;
let timer= 0;
let passiveactive = true;
let luck =1;
let luckcost = 35;


//save object for JSON is savedata. call savegame() to update savedata before parsing.
function savegame() {
const savedata = {
count,
score,
basecost,
level,
ppoollvl,
royallvl,
nftlvl,
passive,
ppoolcost,
royalsubjectscost,
nftscost,
timer,
luck,
luckcost
}
const json = JSON.stringify(savedata);
localStorage.setItem("savefile", json);
};

// manual save button for dev testing. enable between git pushes to test new features to prevent autosave from causing issues.
save.addEventListener("click", () => {
    savegame();
});


//load game function
function loadgame () {
    const json = localStorage.getItem("savefile");
    if (!json){
    return;}
    
    const data = JSON.parse(json);

    count = data.count;
    score = data.score;
    basecost = data.basecost;
    level = data.level;
    ppoollvl = data.ppoollvl;
    royallvl = data.royallvl;
    nftlvl = data.nftlvl;
    passive = data.passive;
    ppoolcost = data.ppoolcost;
    royalsubjectscost = data.royalsubjectscost;
    nftscost = data.nftscost;
    timer = data.timer;

    levelclamp(level, 1, clickermax);
    levelclamp(ppoollvl, 0, ppoolcost);
    levelclamp(royallvl, 0, royalmax);
    levelclamp(nftlvl, 0, nftmax);
    updateUI();
}

//basic function to update the UI after each upgrade.
function updateUI() {
balance.textContent = `Points: ${count}`;
afktimer.textContent = `afk timer: ${timer}`;
currentscore.textContent = `Points per click: ${score}`;
upgradebtn.textContent = `Upgrade clicker: ${basecost}`;
ppool.textContent = `Passive pool: ${ppoolcost}`;
royalsubjects.textContent = `Royal Subjects: ${royalsubjectscost}`;
nfts.textContent = `Stake some nfts: ${nftscost}`;
lucktext.textContent = `Luck:${luck}`;

if (ppoollvl >= ppoolmax)
    {ppool.textContent = "Max LeveL."};
if (level >= clickermax)
    {upgradebtn.textContent = "Max Level."}
if (royallvl >= royalmax){
    royalsubjects.textContent = "Max Level."}
if (nftlvl >= nftmax){
    nfts.textContent = `${nftlvl}`}
}

document.addEventListener("visibilitychange", () => {
    passiveactive = !document.hidden
});

//this itnerval function operates the passive income system.
setInterval(() => {
    if (passiveactive){

    if (passive > 0 && timer > 0) {
        count += passive;
        timer -= 1;
        afktimer.textContent = `afk timer: ${timer}`;
        if ( timer == 0){
           warning.classList.remove("hidden");
        }
        if (timer > 0) {
            warning.classList.add("hidden"); 
        }
        updateUI();
    }
}
}, 1000);



//main click function
button.addEventListener("click", () => {
    clearTimeout(inactivityTimer);
    let roll = criticalclick();
    if (roll >= 90){
        let newscore = score*3;
        count += newscore;
        pointslog.textContent= ` you gained ${newscore} points`;
clickmessage.textContent = ` your current balance is ${count}`;
balance.innerHTML = `Balance: ${count}`;
currentscore.textContent= `Points per click:${score}`;
animatewhally();
    } else if 
     (roll <= 2){
        let newscore = score*10;
        count += newscore;
        pointslog.textContent= ` you gained ${newscore} points`;
clickmessage.textContent = ` your current balance is ${count}`;
balance.innerHTML = `Balance: ${count}`;
currentscore.textContent= `Points per click:${score}`;
animatewhally();
     } else 
{
    
    count += score;
    
pointslog.textContent= ` you gained ${score} points`;
clickmessage.textContent = ` your current balance is ${count}`;
balance.innerHTML = `Balance: ${count}`;
currentscore.textContent= `Points per click:${score}`;
animatewhally();
    }

//afk timer function
if ( timer <=897){
timer +=3;
}
afktimer.textContent =` afk timer: ${timer}`;
updateUI();
inactivityTimer = setTimeout (() => {
clickmessage.textContent= ""
pointslog.textContent = ""
}, 5000);
});

// animation for the main button 
function animatewhally(){
    const whale = document.getElementById("whally");
    whale.classList.add("whale-clicked");
    setTimeout(() => 
    whale.classList.remove("whale-clicked"), 150);
} 
function criticalclick() {
    let luckroll = Math.floor((Math.random() * 100) + luck);
    return luckroll;
};

//function for the main clicker upgrade.
upgradebtn.addEventListener("click", () => {
    let missing =  basecost - count;
    if ( count < basecost){
        pointslog.textContent = " you do not have enough points to upgrade!";
        pointslog.textContent = `you need ${missing} points to upgrade.`;
        setTimeout (( ) => { 
            pointslog.textContent = "";
        }, 5000);
    }

    // mouse upgrade button functions
    if ( count >= basecost){
        pointslog.textContent= " Upgrade Complete!";
        score ++;
        level ++;
        count -= basecost;
        basecost =  Math.round(basecost*1.85);
        
        updateUI();
        upgradebtn.textContent= `Upgrade Clicker: ${basecost}`;
        if (basecost > 1000000){
            upgradebtn.textContent= "Max Level";
            upgradebtn.disabled = true; // disables the upgrade button to prevent future upgrades.
            updateUI();
        }
    }


});




luckbtn.addEventListener("click", () => {
let missingluck = luckcost - count;

 if (luckcost > count){
    pointslog.textContent= `you need ${missingluck} more points!`;
    updateUI();
 }
else if ( count >= luckcost){
    luck ++;
    count -= luckcost;
luckcost = Math.round(luckcost *1.5)
pointslog.textContent = `you have upgraded to Luck level :${luck}`;
luckbtn.textContent= `Upgrade Luck: ${luckcost}`;
updateUI();
}
});








// passive pool button function, used to increase passive pool and update ui of the button.
ppool.addEventListener("click", () => {
let ppoolmissing = ppoolcost - count;
if ( count >= ppoolcost ) { 
    passive ++;
    ppoollvl ++;
    count -= ppoolcost;
    pointslog.textContent=" you Upgraded your Passive Pool.";
    incomep.innerHTML=`points/s:${passive}`;
    ppoolcost= Math.round(ppoolcost*1.5); 
    updateUI();
} else {
    pointslog.textContent = `you need ${ppoolmissing} points to upgrade.`;
    setTimeout(() => {    
    }, 5000);
}
if ( ppoollvl >= ppoolmax){
    ppool.disabled = true;
}

});
//passive income for royal subjects button functions
royalsubjects.addEventListener ("click", () => {
    let missingroyalsubjects = royalsubjectscost - count;
    if ( count >= royalsubjectscost){
    passive += 5;
    royallvl ++;
    count -= royalsubjectscost;
    updateUI();
    pointslog.textContent="you have added a royal subject!";
    incomep.innerHTML= `points/s:${passive}`;
    royalsubjectscost = Math.round(royalsubjectscost * 1.5);
    royalsubjects.textContent = `royal subject cost: ${royalsubjectscost}`;
    }

      if ( royalsubjectscost > count){
        pointslog.textContent= `you are missing ${missingroyalsubjects} points.`;
    }
     if (royalsubjectscost > 160000){
        royalsubjects.disabled =true;
        royalsubjects.textContent =" Max Level."
     }
});

//logic for the nfts passive income button
nfts.addEventListener ("click", () => {
    let missingnfts = nftscost - count;
    if ( count >= nftscost) {
        passive += 25;
        nftlvl ++;
        count -= nftscost;
        nftscost = Math.round(nftscost *1.5);
        pointslog.textContent ="You have staked an nft!";
        nfts.textContent= `nft cost: ${nftscost}`;
        incomep.innerHTML= `points/s: ${passive}`;
        updateUI();
        setTimeout(() => {
            
        }, 5000);
    }
    if ( nftscost > count){
        pointslog.textContent= ` you are missing ${missingnfts} points`;
        updateUI();
        setTimeout (() => {

        }, 5000);

    } 
if ( nftscost > 700000)
{
    nfts.disabled= true;
    nfts.textContent = "Max Level";
}
});
//function for level capping
function levelcaps() {
    if (level >= clickermax){ 
        upgradebtn.disabled = true;
    }
    if ( ppoollvl >= ppoolmax){
        ppool.disabled =true;
    }
    if (royallvl >= royalmax){
        royalsubjects.disabled =true;
    }
    if (nftlvl >= nftmax){
        nfts.disabled =true;
    };
}

//autosave when tab is minimized or backgrounded


/*window.addEventListener("visibilitychange", () => {
    if (document.hidden) savegame();
}); 
  */

//save on close
window.addEventListener("beforeunload", savegame);

function levelclamp(level, min, max){
   return Math.max(1, Math.min(level, clickermax));
};



loadgame();
levelcaps();
updateUI();



