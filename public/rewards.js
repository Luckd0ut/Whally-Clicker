const reward1= document.getElementById("reward1");
const reward2= document.getElementById("reward2");
const reward3= document.getElementById("reward3");
const reward4= document.getElementById("reward4");
const reward5= document.getElementById("reward5");
const reward6= document.getElementById("reward6");
const reward7= document.getElementById("reward7");
const reward8= document.getElementById("reward8");
const textline = document.getElementById("textline");
const rewardsbalance= document.getElementById("rewardsbalance");
const rewardssave= document.getElementById("rewardssave");

let firstReward = "Gold nft.";
let secondReward = "Blue mob booster pack.";
let thirdReward = "Gems pack.";
let fourthReward = "Blue mob totem.";
let fifthReward = "Regal Necklace";
let sixthReward = " 100,000,000 WHALLY";
let seventhReward = "500,000,000 WHALLY";
let eighthReward = "";
let inactivetimer= null;
let rewardscount =0; //future use for json parsing

rewardsbalance.textContent = `${rewardscount}`

function loadrewards () {
    const json = localStorage.getItem("savefile");
    if (!json) return;
    const data = JSON.parse(json);

    rewardscount = data.count;

};

function updateRewardsUI() {
    rewardsbalance.textContent= `Balance: ${rewardscount}`;
}


function saveRewardCount() {
    const json = localStorage.getItem("savefile");
    if (!json) return;

    const data = JSON.parse(json);
    data.count = rewardscount;

    localStorage.setItem("savefile", JSON.stringify(data));
    rewardsbalance.textContent = " File saved!";
    setTimeout(() => {
        rewardsbalance.textContent = `${rewardscount}`;
    }, 2000);
    
}


rewardssave.addEventListener("click", () => {
    saveRewardCount();

})



reward1.addEventListener("click", () => {
    let cost = 100000;
    if ( rewardscount > cost) {
        textline.textContent = `You have redeemed a ${firstReward}`;
        textline.style.opacity =1;
        rewardscount -= cost;
      saveRewardCount();
      updateRewardsUI();
        setTimeout(() => {
            textline.textContent = "";
            textline.style.opacity = 0;
    }, 5000);
}
if ( cost > rewardscount) {
    textline.textContent = "Insufficient Balance.";
    setTimeout(() => {
       textline.textContent = ""; 
    }, 2000);
}

});


reward2.addEventListener("click", () => {
    let cost = 100000;
    if ( rewardscount > cost) {
        textline.textContent = `You have redeemed a ${firstReward}`;
        textline.style.opacity =1;
        rewardscount -= cost;
textline.textContent = `You have redeemed a ${secondReward}`;
textline.style.opacity =1;

      setTimeout(() => {
            textline.textContent = "";
            textline.style.opacity =0;
    }, 5000);
}
    if ( cost > rewardscount) {
    textline.textContent = "Insufficient Balance.";
    setTimeout(() => {
       textline.textContent = ""; 
    }, 2000);
}
});

reward3.addEventListener("click", () => {
let cost = 100000;
    if ( rewardscount > cost) {
        textline.textContent = `You have redeemed a ${firstReward}`;
        textline.style.opacity =1;
        rewardscount -= cost;
textline.textContent = `You have redeemed a ${thirdReward}`;
textline.style.opacity =1;
      setTimeout(() => {
            textline.textContent = "";
            textline.style.opacity =0;
    }, 5000);
}
    if ( cost > rewardscount) {
    textline.textContent = "Insufficient Balance.";
    setTimeout(() => {
       textline.textContent = ""; 
    }, 2000);
}
});

reward4.addEventListener("click", () => {
    let cost = 100000;
    if ( rewardscount > cost) {
        textline.textContent = `You have redeemed a ${firstReward}`;
        textline.style.opacity =1;
        rewardscount -= cost;
textline.textContent = `You have redeemed a ${fourthReward}`;
textline.style.opacity =1;
      setTimeout(() => {
            textline.textContent = "";
            textline.style.opacity =0;
    }, 5000);
}
    if ( cost > rewardscount) {
    textline.textContent = "Insufficient Balance.";
    setTimeout(() => {
       textline.textContent = ""; 
    }, 2000);
}
});

reward5.addEventListener("click", () => {
    let cost = 100000;
    if ( rewardscount > cost) {
        textline.textContent = `You have redeemed a ${firstReward}`;
        textline.style.opacity =1;
        rewardscount -= cost;
textline.textContent = `You have redeemed a ${fifthReward}`;
textline.style.opacity =1;
      setTimeout(() => {
            textline.textContent = "";
            textline.style.opacity =0;
    }, 5000);
}
    if ( cost > rewardscount) {
    textline.textContent = "Insufficient Balance.";
    setTimeout(() => {
       textline.textContent = ""; 
    }, 2000);
}
});

reward6.addEventListener("click", () => {
    let cost = 100000;
    if ( rewardscount > cost) {
        textline.textContent = `You have redeemed a ${firstReward}`;
        textline.style.opacity =1;
        rewardscount -= cost;
textline.textContent = `You have redeemed  ${sixthReward}`;
textline.style.opacity =1;
      setTimeout(() => {
            textline.textContent = "";
            textline.style.opacity =0;
    }, 5000);
    }
    if ( cost > rewardscount) {
    textline.textContent = "Insufficient Balance.";
    setTimeout(() => {
       textline.textContent = ""; 
    }, 2000);
}
});

reward7.addEventListener("click", () => {
    let cost = 100000;
    if ( rewardscount > cost) {
        textline.textContent = `You have redeemed a ${firstReward}`;
        textline.style.opacity =1;
        rewardscount -= cost;
textline.textContent = `You have redeemed  ${seventhReward}`;
textline.style.opacity =1;
      setTimeout(() => {
            textline.textContent = "";
            textline.style.opacity =0;
    }, 5000);
}
    if ( cost > rewardscount) {
    textline.textContent = "Insufficient Balance.";
    setTimeout(() => {
       textline.textContent = ""; 
    }, 2000);
}
});

/*reward8.addEventListener("click", () => {
    let cost = 100000;
    if ( rewardscount > cost) {
        textline.textContent = `You have redeemed a ${firstReward}`;
        textline.style.opacity =1;
        rewardscount -= cost;
textline.textContent = `You have redeemed a ${reward8}`;
textline.style.opacity =1;
      setTimeout(() => {
            textline.textContent = "";
            textline.style.opacity =0;
    }, 5000);
}
    if ( cost > rewardscount) {
    textline.textContent = "Insufficient Balance.";
    setTimeout(() => {
       textline.textContent = ""; 
    }, 2000);
}
}); */

loadrewards();
updateRewardsUI();