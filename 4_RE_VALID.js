// Regular expression for phone number (only numbers, exactly 10 digits)
var phonePattern = /^[0-9]{10}$/;

// Regular expression for email (simple validation like abc@gmail.com)
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Function to validate phone number
function validatePhone(phone) {
    return phonePattern.test(phone);
}

// Function to validate email
function validateEmail(email) {
    return emailPattern.test(email);
}

// Test the validation
console.log(validatePhone("1234567890"));  // true
console.log(validatePhone("12345abc90"));  // false
console.log(validateEmail("abc@gmail.com"));  // true
console.log(validateEmail("abc@gmail"));     // false



// Expected Output

// <!DOCTYPE html>
// <html>
//     <body>
//         <h2><strong> Sample: Software Testing Help</strong></h2>
//         <p id="sum_first"></p>
//         <p id="sum_second"></p>
//         <script>
//         var sum_first = 50 + 20 + ' Sajeesh Sreeni ';
//         var sum_second = " Sajeesh Sreeni " + 50 + 20;
//         document.getElementById("sum_first").innerHTML = "The first variable sum is: " + sum_first + "<br>The second variable sum is: " + sum_second;
//         </script>
//     </body>
// </html>


// The first variable sum is: 70 Sajeesh Sreeni 
// The second variable sum is:  Sajeesh Sreeni 5020

