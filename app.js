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

    calculatePL(initial, qty, current);
}


function calculatePL(initial, qty, current) {

    if(initial > current) {
        var loss = (initial - current) * qty;
        var lossPercentage = (loss / (initial*qty) * 100;
        output.innerHTML = ` <span style = "color: #fee2e2">📉 Your loss is ${loss} and the percent is ${lossPercentage.toFixed(2)}%.</span>`;
        document.querySelector("#body").style.backgroundColor = "#b91c1c";

    } else if (current > initial) {
        var profit = (current - initial) * qty;
        var profitPercentage = (profit/(initial*qty)) * 100;
        output.innerHTML = `<span style="color: #ecfccb">📈 Your profit is ${profit} and the percent is ${profitPercentage.toFixed(2)}%.`;
        document.querySelector("#body").style.backgroundColor = "#4d7c0f";
        
    } else {
        output.innerHTML = `<span style="color: whitesmoke">No Pain No Gain, No Gain No Pain.`;
    }
}


checkBtn.addEventListener("click", clickHandler);