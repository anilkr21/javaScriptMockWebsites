
   
function creditTransaction(){
    let amount= 1000000;
    let amountReceivedIn = parseInt(document.getElementById("amountReceived").value);
    let showBalance =(amount+amountReceivedIn);
   let totalBalance=  document.getElementById("creditBalance").value=showBalance;

}
// let amountDebitAmountReceivedIn = parseInt(document.getElementById("debitAmountReceived"));

// let showDebitBalance =(amount-amountDebitAmountReceivedIn);

// let totalDebitBalance = document.getElementById("debitBalance").value=showDebitBalance;
function debitTransaction(){
    let amount= 1000000;
    let amountReceivedIn = parseInt(document.getElementById("debitAmountReceived").value);
    let showBalance =(amount-amountReceivedIn);
   let totalBalance=  document.getElementById("debitBalance").value=showBalance;
}

document.addEventListener('DOMContentLoaded', (event) => {
    let debitPinBtn = document.querySelector(".debitPinBtn");
    let redirectLink = document.getElementById("redirectLink");
    let debitPinInput = document.querySelector(".debitPin");

    debitPinBtn.addEventListener('click', function(event) {
        event.preventDefault();
        let debitPin = debitPinInput.value.trim();
        
        const correctPin = '0000';
        
        if (debitPin === correctPin) {
            window.location.href = redirectLink.href;
        } else {
            alert("Incorrect PIN!  Please try again.");
            debitPinInput.value = ''; 
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    
    let debitPinBtn1 = document.querySelector(".debitPinBtn1");
    let redirectLink1 = document.getElementById("redirectLink1");
    let debitPinInput1 = document.querySelector(".debitPin1");

    debitPinBtn1.addEventListener('click', function(event) {
        
        event.preventDefault();
        let debitPin1 = debitPinInput1.value.trim();
        const correctPin1 = '0000';
        if (debitPin1 === correctPin1) {
            window.location.href = redirectLink1.href;
        } else {
            alert("Incorrect PIN!  Please try again.");
            debitPinInput1.value = ''; 
        }
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the button and the link
    let debitPinBtn2 = document.querySelector(".debitPinBtn2");
    let redirectLink2 = document.getElementById("redirectLink2");
    let debitPinInput2 = document.querySelector(".debitPin2");

    debitPinBtn2.addEventListener('click', function(event) {
        // Prevent the default action of the button if the PIN is incorrect
        event.preventDefault();
        
        // Get the PIN input value and trim any extra spaces
        let debitPin2 = debitPinInput2.value.trim();
        
        // Define the correct PIN as a string
        const correctPin = '0000';
        
        // Check if the entered PIN matches the correct PIN
        if (debitPin2 === correctPin) {
            // PIN is correct, proceed with the redirect
            window.location.href = redirectLink2.href;
        } else {
            // PIN is incorrect, display a message instead of redirecting
            alert("Incorrect PIN!  Please try again.");
            debitPinInput2.value = ''; // Optionally clear the input field
        }
    });
});




        // let bebitPinBtn = document.querySelector(".debitPinBtn");
        // let redirectLink = document.getElementById("redirectLink");
        //let debitPinInput = document.querySelector(".debitPin");


        // bebitPinBtn.addEventListener('click', function(event){
        //    event.preventDefault();
        //     
        //     const pin = '0000';
        //     if(debitPin === pin){
        //         window.location.href = redirectLink.href;
        //     }
        //     else
        //     {
        //         alert("Incorrect PIN! Please try again.");
                    //debitPinInput.value = '';
        //     }
        // });






    // document.getElementById('togglePassword').addEventListener('change', function() {
    //     const passwordField = document.getElementById('pinInput');
    //     const eyeIcon = document.querySelector('.eye');
    //     const eyeSlashIcon = document.querySelector('.eye-slash');
        
    //     if (this.checked) {
    //         passwordField.type = 'text';
    //         eyeIcon.style.display = 'none';
    //         eyeSlashIcon.style.display = 'block';
    //     } else {
    //         passwordField.type = 'password';
    //         eyeIcon.style.display = 'block';
    //         eyeSlashIcon.style.display = 'none';
    //     }
    // });

