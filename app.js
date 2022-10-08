const initialPrice = document.querySelector("#initial-price");
const totalQty = document.querySelector("#stocks-qty");
const currentPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector(".check-button");
const output = document.querySelector(".output-msg");


// var initial = initialPrice.value;
// var qty = totalQty.value;
// var current = currentPrice.value
function clickHandler() {
    var initial = Number(initialPrice.value);
    var qty = Number(totalQty.value);
    var current = Number(currentPrice.value);
    console.log(initial, qty, current);

    if (initial < 0 || qty < 0 || current < 0) {
        output.innerHTML =  `<span style="color:#dc2626">Please input a valid value.</span>`;
        document.querySelector("#body").style.backgroundColor = "#1F2937";
    } else {
        calculatePL(initial, qty, current);
    }
}


function calculatePL(initial, qty, current) {

    if(initial > current) {
        var loss = (initial - current) * qty;
        var lossPercentage = (loss / (initial*qty)) * 100;
        output.innerHTML = ` <span style = "color: #fee2e2">📉 Your loss is ₹${loss} and the percent is ${lossPercentage.toFixed(2)}%. <br> <h1 style="margin: 0.5rem auto">😔</h1></span>`;
        document.querySelector("#body").style.backgroundColor = "#b91c1c";

    } else if (current > initial) {
        var profit = (current - initial) * qty;
        var profitPercentage = (profit/(initial*qty)) * 100;
        output.innerHTML = `<span style="color: #ecfccb">📈 Your profit is ₹${profit} and the percent is ${profitPercentage.toFixed(2)}%. <br> <h1 style="margin: 0.5rem auto">🎉🎊</h1></span>`;
        document.querySelector("#body").style.backgroundColor = "#4d7c0f";
        
    } else {
        output.innerHTML = `<span style="color: whitesmoke">No Pain No Gain, No Gain No Pain.<br> <h1 style="margin: 0.5rem auto">🚫😢🚫💪</h1>`;
        document.querySelector("#body").style.backgroundColor = "#1F2937";
    }
}


checkBtn.addEventListener("click", clickHandler);