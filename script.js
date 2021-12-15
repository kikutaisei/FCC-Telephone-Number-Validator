function telephoneCheck(str) {

    // Variable to store the regex for the specified criteria
    let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;
  
    // Variable to store the test result of the parameter string
    let validCheck = regex.test(str);
    
    return validCheck;
  }
  
  telephoneCheck("555-555-5555");