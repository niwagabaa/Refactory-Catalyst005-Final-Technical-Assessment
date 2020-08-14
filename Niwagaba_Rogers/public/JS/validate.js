
const sname = document.getElementByName('sname');
const givenName = document.getElementByName('givenName');
const dateOfBirth = document.getElementByName('dateOfBirth');
const occupation = document.getElementByName('occupation');
const nationality = document.getElementByName('nationality');
var genderM= document.getElementByName('male');
var genderF= document.getElementByName('female');

const validator = (form) => {
    // Validating the product name
    // creating a regular expression
    var charactersOnly = /^[A-Za-z]+$/;
    if (surname.value.match(charactersOnly)){
        surname.style.border = "1px solid red"
        alert("The surname should be in alphabets");

        if (surname.value.length < 1 || surname.value.length > 16) {
          alert("Sur name should be between 1 to 16 characters");
          surname.style.border = "1px solid red";
        }
    }

    //validating given name
    if (givenName.value.match(charactersOnly)){
        givenName.style.border = "1px solid red"
        alert("The given name should be in alphabets");

        if (givenName.value.length < 1 || givenName.value.length > 16) {
          alert("Given name should be between 1 to 16 characters");
          givenName.style.border = "1px solid red";
        }
    }

    //validating the date of birth

    //validating place of Residence
    if (placeOfResidence.value.match(charactersOnly)){
        placeOfResidence.style.border = "1px solid red"
        alert("The place of Residence should be in alphabets");

          alert("The place of residence be between 1 to 20 characters");
          if (placeOfResidence.value.length < 1 || placeOfResidence.value.length > 20) {
          placeOfResidence.style.border = "1px solid red";
        }
    }

    //validating the occupation
    if (occupation.value.match(charactersOnly)){
        occupation.style.border = "1px solid red"
        alert("The occupation should be in alphabets");

        if (occupation.value.length < 5 || occupation.value.length > 50) {
          alert("The occupation be between 5 to 50 characters");
          occupation.style.border = "1px solid red";
        }
    }
    //validating the nationality
    if (nationality.value.match(charactersOnly)){
        nationality.style.border = "1px solid red"
        alert("The Nationality should be in alphabets");

        if (nationality.value.length < 5 || occupation.value.length > 20) {
          alert("The Nationality be between 5 to 20 characters");
          nationality.style.border = "1px solid red";
        }
    }

    //validating Gender
    if(genderM.checked==false && genderF.checked==false ) {
        alert("You must select male or female");
        return false;
    }
}