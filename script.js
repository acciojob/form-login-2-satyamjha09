let submitButton = document.getElementById("submitBtn");

submitButton.addEventListener("click", () => {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let emailId = document.getElementById("emailId").value;

  const alertMessage = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailId}`;
  alert(alertMessage);
});
