/*******************|
|* EMAIL VALIDATOR *|
|*******************/
//validateEmail checks for spacing and special characters
function validateEmail(email) {
  const require = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return require.test(email);
}

//validator grabs user input and runs validateEmail function
function validator() {
  const $result = $("#result");
  const email = $("#email").val();
  $result.text("");

  //if the email is valid send success message & save to DB or invalid sends error message
  if (validateEmail(email)) {
    //handleContactSubmit defined in "SAVE CONTACT TO DB" section below but called here to prevent submission if validator is false
    handleContactSubmit();
    $result.text("Successful Submition ✔");
    $result.css("color", "#00c02b");
  }
  else {
    $result.text(email + " is not a valid email address ❌");
    $result.css("color", "#d50000");
  }
  return false;
}
//on click handles the user submit action and runs validate function
$("#validate").on("click", validator);


/**********************|
|* SAVE CONTACT TO DB *|
|**********************/
const $firstName = $(".firstName");
const $lastName = $(".lastName");
const $email = $(".email");
const $message = $(".message");
const $submitBtn = $(".submitBtn");

// contact is used to keep track of the user input
let contact = {};

// A function for getting all contacts from the db
const getContacts = () => {
  return $.ajax({
    url: "/api/contacts",
    method: "GET",
  });
};

// A function for submitting a contact to the db
const saveContact = (contact) => {
  return $.ajax({
    url: "/api/contacts",
    data: contact,
    method: "POST",
  });
};

// Get the user data from the inputs, save it to the db
const handleContactSubmit = function () {
  const newContact = {
    firstName: $firstName.val(),
    lastName: $lastName.val(),
    email: $email.val(),
    message: $message.val()
  };
  saveContact(newContact)
};
getContacts();
