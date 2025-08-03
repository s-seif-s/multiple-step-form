let balls = document.querySelectorAll(".step .ball");
let nextBtn = document.querySelector(".next");
let backBtn = document.querySelector(".back");
let firstStep = document.querySelector(".firstStep");
let secondStep = document.querySelector(".secondStep");
let thirdStep = document.querySelector(".thirdStep");
let fourthStep = document.querySelector(".fourthStep");
let x = 0;
let h4 = document.querySelector(".subscribtion span h4");
let change = document.querySelector(".subscribtion span p");
let mainPrice = document.querySelector(".subscribtion .price");
let allTypePrices = document.querySelectorAll(".secondStep .cont p");
let totalPrice = document.querySelector(".total .totalPrice");
let y =[]; //for main sub
let z = []; //for total price array
let total = []; //total price


document.addEventListener("DOMContentLoaded", () => {
    const checkBoxesContainer = document.querySelectorAll(".checkbox-cont");
    const checkBoxes = document.querySelectorAll(".thirdStep input[type=checkbox]");
    const mainSub = document.querySelectorAll(".secondStep .cont input[type=radio]");

        checkBoxesContainer.forEach((ele, ind) => {
        ele.addEventListener("click", () => {
            checkBoxes[ind].checked = !checkBoxes[ind].checked;
            ele.classList.toggle("clicked");
        });
    });

    mainSub.forEach(function(ele,ind){
        ele.onclick = () => {
            mainSub.forEach(function(e){
                e.removeAttribute("clicked");
                y = [];
            })
            ele.toggleAttribute("clicked");
            y.push(mainSub[ind].value,allTypePrices[ind].innerHTML);
            
            console.log(y);
        }
    });
});


//switch from month and year subsrcibtion
document.addEventListener("DOMContentLoaded", () => {
    let whiteBall = document.querySelector(".white-ball");
    let whiteBallInput = document.querySelector(".type-of-describtion input[type=radio]");
    
    whiteBallInput.onclick = function(){
        if(whiteBallInput.value == "monthly"){
            whiteBallInput.value = "yearly";
            whiteBall.classList.toggle("move-right");
            allTypePrices[0].innerHTML = "$90/yr";
            allTypePrices[1].innerHTML = "$120/yr";
            allTypePrices[2].innerHTML = "$150/yr";
        }
        else{
            whiteBallInput.value = "monthly";
            whiteBall.classList.toggle("move-right");
            allTypePrices[0].innerHTML = "$9/mo";
            allTypePrices[1].innerHTML = "$12/mo";
            allTypePrices[2].innerHTML = "$15/mo";
        }
    }
})


document.addEventListener("DOMContentLoaded",function(){
    nextBtn.onclick = (event) => {
        event.preventDefault();
        if(x === 0){
            if(document.getElementById("name").value !== "" && document.getElementById("email").value.includes("@gmail.com") && document.getElementById("number").value.length == 11){
                firstStep.style.left = "-1000px";
                secondStep.style.left = "35px";
                balls[0].style.backgroundColor = "transparent";
                balls[0].style.color = "white";
                balls[1].style.backgroundColor = "hsl(228, 100%, 90%)";
                balls[1].style.color = "hsl(213, 96%, 16%)";
                backBtn.style.display = "block";
            }
            else{
                x--;
            }
        }
        if(x === 1){
            if(document.getElementById("Arcade").hasAttribute("clicked") || document.getElementById("Advanced").hasAttribute("clicked") || document.getElementById("Pro").hasAttribute("clicked")){
                secondStep.style.left = "-1000px";
                thirdStep.style.left = "35px";
                balls[1].style.backgroundColor = "transparent";
                balls[1].style.color = "white";
                balls[2].style.backgroundColor = "hsl(228, 100%, 90%)";
                balls[2].style.color = "hsl(213, 96%, 16%)";
                let val = document.querySelector(".type-of-describtion input").value;
                let all = document.querySelectorAll(".type-of");
                let month = ["+$1/mo","+$2/mo","+$2/mo"];
                let year = ["+$10/yr","+$20/yr","+$20/yr"];
                console.log(all);
                if(val === "monthly"){
                    for(i=0;i<all.length;i++){
                        all[i].innerHTML = month[i];
                    }
                }
                else{
                    for(j=0;j<all.length;j++){
                        all[j].innerHTML = year[j];
                    }
                }
            }
            else {
                x--;
            }
        }
        if(x === 2){
            thirdStep.style.left = "-1000px";
            fourthStep.style.left = "35px";
            balls[2].style.backgroundColor = "transparent";
            balls[2].style.color = "white";
            balls[3].style.backgroundColor = "hsl(228, 100%, 90%)";
            balls[3].style.color = "hsl(213, 96%, 16%)";
            nextBtn.style.display = "none";
            document.querySelector(".sf").style.display = "block";
            if(y.length !== 0){
                h4.innerHTML = "";
                mainPrice.innerHTML = "";
                h4.innerHTML = y[0] + " " + `(${document.querySelector(".type-of-describtion input[type=radio]").value})`;
                mainPrice.innerHTML = y[1];
                z = []; //make the sum for the total price
                z.push(y[1]);
                console.log(z);
            }
            let clickedAddOns = document.querySelectorAll(".clicked");
            /*console.log(clickedAddOns[1].childNodes[5]);*/
            let addons = document.querySelectorAll(".summary-cont .add-ons");
            if(addons.length !== 0){
                for(i=0;i<addons.length;i++){
                    addons[i].remove();
                }
                for(j=1;j<z.length;j++){
                    z[j] = "";
                }
            }
            console.log(document.querySelector(".summary-cont"));//7
            for(i=0;i<clickedAddOns.length;i++){
                let addOns = document.createElement("div");
                let addOnsP = document.createElement("p");
                let addOnsspan = document.createElement("span");
    
                addOns.className = "add-ons";
                addOnsspan.className = "price";
    
                var l = clickedAddOns[i].childNodes[3].childNodes[1];
                addOnsP.innerHTML = l.innerHTML;
                addOnsspan.innerHTML = clickedAddOns[i].childNodes[5].innerHTML;
                z.push(addOnsspan.innerHTML);
                addOns.append(addOnsP,addOnsspan);
                document.querySelector(".summary-cont .subscribtion").after(addOns);
            }
            total = z.reduce((sum,price) => {
                let numericValue = parseFloat(price.replace(/[^0-9.-]+/g,""));
                return sum + numericValue;
            }, 0); //calc and get total price
            totalPrice.innerHTML = "";
            if(document.querySelector(".type-of-describtion input[type=radio]").value == "monthly"){
                totalPrice.innerHTML = `$${total}/mo`;
            }
            else {
                totalPrice.innerHTML = `$${total}/yr`;
            }
        }
        x++;
    }
})


backBtn.onclick = (event) => {
    event.preventDefault();
    if(x === 3){
        fourthStep.style.left = "900px";
        thirdStep.style.left = "35px";
        balls[3].style.backgroundColor = "transparent";
        balls[3].style.color = "white";
        balls[2].style.backgroundColor = "hsl(228, 100%, 90%)";
        balls[2].style.color = "hsl(213, 96%, 16%)";
        nextBtn.style.display = "block";
        document.querySelector(".sf").style.display = "none";
    }
    if(x === 2){
        thirdStep.style.left = "900px";
        secondStep.style.left = "35px";
        balls[2].style.backgroundColor = "transparent";
        balls[2].style.color = "white";
        balls[1].style.backgroundColor = "hsl(228, 100%, 90%)";
        balls[1].style.color = "hsl(213, 96%, 16%)";
    }
    if(x === 1){
        secondStep.style.left = "900px";
        firstStep.style.left = "35px";
        balls[1].style.backgroundColor = "transparent";
        balls[1].style.color = "white";
        balls[0].style.backgroundColor = "hsl(228, 100%, 90%)";
        balls[0].style.color = "hsl(213, 96%, 16%)";
        backBtn.style.display = "none";
    }
    x--;
}


document.querySelector(".sf").onclick = function(){
    document.forms[0].submit();
}
