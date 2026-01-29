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



let count = 0;
let score = 1000000;
let basecost =  1000;
let level = 1
let inactivityTimer;
let passive = 0;
let ppoolcost= 3000;
let royalsubjectscost= 25000;
let nftscost= 100000;
let timer= 0;
let passiveactive = true;

//save object for JSON is savedata. call savegame() to update savedata before parsing.
function savegame() {
const savedata = {
count,
score,
basecost,
level,
passive,
ppoolcost,
royalsubjectscost,
nftscost,
timer
}
const json = JSON.stringify(savedata);
localStorage.setItem("savefile", json);
};

save.addEventListener("click", () => {
    savegame();
});

function loadgame () {
    const json = localStorage.getItem("savefile");
    if (!json) return;
    const data = JSON.parse(json);

    count = data.count;
    score = data.score;
    basecost = data.basecost;
    level = data.level;
    passive = data.passive;
    ppoolcost = data.ppoolcost;
    royalsubjectscost = data.royalsubjectscost;
    nftscost = data.nftscost;
    timer = data.timer;
    updateUI();
}

//basic function to update the UI after each upgrade.
function updateUI() {
balance.textContent = `Points: ${count}`;
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
    count += score;
    let points = count;
    if ( score == 1){
        pointslog.textContent= `you gained 1 point`
    } else {
pointslog.textContent= ` you gained ${score} points`;
}
clickmessage.textContent = ` your current balance is ${points}`;
balance.innerHTML = `Balance: ${count}`;
currentscore.textContent= `Points per click:${score}`;

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
//function for the main clicker upgrade. max lvl 9. (671,000 cost)
upgradebtn.addEventListener("click", () => {
    let missing =  basecost - count;
    if ( count < basecost){
        pointslog.textContent = " you do not have enough points to upgrade!";
        pointslog.textContent = `you need ${missing} points to upgrade.`
        setTimeout (( ) => { 
            pointslog.textContent = "";
        }, 5000); // message fades after 5 seconds.
    }

    // mouse upgrade button functions
    if ( count >= basecost){
        pointslog.textContent= " Upgrade Complete!";
        score ++;
        count -= basecost;
        basecost =  Math.round(basecost*1.85);
        updateUI();
        upgradebtn.textContent= `Upgrade Clicker: ${basecost}`;
        if (basecost > 1000000){
            upgradebtn.textContent= "Max Level";
            upgradebtn.disabled = true; // disables the upgrade button to prevent future upgrades.
            updateUI();
        }
        updateUI();
    }
});

// passive pool button function, used to increase passive pool and update ui of the button.
ppool.addEventListener("click", () => {
let ppoolmissing = ppoolcost - count;
if ( count >= ppoolcost ) { 
    passive ++;
    count -= ppoolcost;
    pointslog.textContent=" you Upgraded your Passive Pool.";
    incomep.innerHTML=`points/s:${passive}`;
    ppoolcost= Math.round(ppoolcost*1.5); 
    ppool.textContent = `Passive Pool, cost: ${ppoolcost}`;
    updateUI();
} else {
    pointslog.textContent = `you need ${ppoolmissing} points to upgrade.`;
    setTimeout(() => {    
    }, 5000);
}
if ( ppoolcost >= 116000){
    ppool.disabled=true;
    ppool.textContent = " Max Level.";
}
});
//passive income for royal subjects button functions
royalsubjects.addEventListener ("click", () => {
    let missingroyalsubjects = royalsubjectscost - count;
    if ( count >= royalsubjectscost){
    passive += 5;
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


loadgame();
//next plan is to connect the rewards buttons to the main program to track and subtract points from the count when nfts are claimed.
//then we need to add the prestige reset function to this program, max of 3x resets for 2x point values next season.
//JSON functions can all be created as well while we wait for server connection. 
//