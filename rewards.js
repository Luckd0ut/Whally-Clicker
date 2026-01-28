const reward1= document.getElementById("reward1");
const reward2= document.getElementById("reward2");
const reward3= document.getElementById("reward3");
const reward4= document.getElementById("reward4");
const reward5= document.getElementById("reward5");
const reward6= document.getElementById("reward6");
const reward7= document.getElementById("reward7");
const reward8= document.getElementById("reward8");
const textline = document.getElementById("textline");
//use the next few lines to build each button out. they just need to register a click function for now that has a pop up text that says they
// claimed the reward with literals. this page is just for rewards after all. keep it simple.


let firstReward = "Gold nft.";
let secondReward = "Blue mob booster pack.";
let thirdReward = "Gems pack.";
let fourthReward = "Blue mob totem.";
let fifthReward = "Regal Necklace";
let sixthReward = " 100,000,000 WHALLY";
let seventhReward = "500,000,000 WHALLY";
let eighthReward = "";
let inactivetimer= null;

console.log("test")


reward1.addEventListener("click", () => {
        textline.textContent = `You have redeemed a ${firstReward}`;
        textline.style.opacity =1;
        setTimeout(() => {
            textline.textContent = "";
            textline.style.opacity = 0;
    }, 5000);
});


reward2.addEventListener("click", () => {
textline.textContent = `You have redeemed a ${secondReward}`;
textline.style.opacity =1;

      setTimeout(() => {
            textline.textContent = "";
            textline.style.opacity =0;
    }, 5000);
});

reward3.addEventListener("click", () => {

textline.textContent = `You have redeemed a ${thirdReward}`;
textline.style.opacity =1;
      setTimeout(() => {
            textline.textContent = "";
            textline.style.opacity =0;
    }, 5000);
});

reward4.addEventListener("click", () => {
textline.textContent = `You have redeemed a ${fourthReward}`;
textline.style.opacity =1;
      setTimeout(() => {
            textline.textContent = "";
            textline.style.opacity =0;
    }, 5000);
});

reward5.addEventListener("click", () => {
textline.textContent = `You have redeemed a ${fifthReward}`;
textline.style.opacity =1;
      setTimeout(() => {
            textline.textContent = "";
            textline.style.opacity =0;
    }, 5000);
});

reward6.addEventListener("click", () => {
textline.textContent = `You have redeemed  ${sixthReward}`;
textline.style.opacity =1;
      setTimeout(() => {
            textline.textContent = "";
            textline.style.opacity =0;
    }, 5000);
});

reward7.addEventListener("click", () => {
textline.textContent = `You have redeemed  ${seventhReward}`;
textline.style.opacity =1;
      setTimeout(() => {
            textline.textContent = "";
            textline.style.opacity =0;
    }, 5000);
});

/*reward8.addEventListener("click", () => {
textline.textContent = `You have redeemed a ${reward8}`;
textline.style.opacity =1;
      setTimeout(() => {
            textline.textContent = "";
            textline.style.opacity =0;
    }, 5000);
}); */