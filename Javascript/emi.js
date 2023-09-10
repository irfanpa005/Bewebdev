

function calculateEMI(){
    let P = parseInt(document.getElementById("loanAmount").value)
    let R = parseFloat(document.getElementById("interestRate").value)
        R = parseFloat(R/12/100)
    let N = parseInt(document.getElementById("durationMonths").value)

const emiDisplay = document.getElementById("emiDisplay")
    let emi =  (P * R * (Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1));    
    console.log(P,R,N)
    console.log(emi)
    emiDisplay.innerText = `Rs. ${emi.toFixed(2)}`;
}