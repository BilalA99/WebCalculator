function calculateMPG() {
    let miles = parseFloat(document.getElementById('miles').value);
    let gallons = parseFloat(document.getElementById('gallons').value);

    if (isNaN(miles) || isNaN(gallons) || gallons <= 0) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        return;
    }

    let mpg = miles / gallons;
    document.getElementById('result').innerText = "Your Miles Per Gallon is: " + mpg.toFixed(2);
}

// Basic Calculator Logic
function appendToDisplay(value) {
    document.getElementById('calc-display').value += value;
}

function clearDisplay() {
    document.getElementById('calc-display').value = "";
}

function calculateResult() {
    try {
        document.getElementById('calc-display').value = eval(document.getElementById('calc-display').value);
    } catch (error) {
        document.getElementById('calc-display').value = "Error";
    }
}

// Tab Switching Logic
function showTab(tabId) {
    document.getElementById('basicCalc').style.display = (tabId === 'basicCalc') ? 'block' : 'none';
    document.getElementById('mpgCalc').style.display = (tabId === 'mpgCalc') ? 'block' : 'none';
}
