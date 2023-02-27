function idCard() {
  // event.preventDefault();
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var address = document.getElementById("address").value;

  document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
  document.getElementById("postAddress").innerHTML = address;

  var age = parseInt(document.getElementById("age").value);
  var phoneNumber = parseInt(document.getElementById("phoneNumber").value);

  let numberArray = [];
  numberArray.push(age, phoneNumber);
  console.log(numberArray)

  for (let i = 0; i < numberArray.length; i++) {
    if (parseInt(numberArray[i]) <= 100) {
      document.getElementById("postAge").innerHTML = "Age: " + age;
    } else if (parseInt(numberArray[i]) > 100) {
      document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;
      break;
    }
  }
}
