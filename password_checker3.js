
function yourId() {
  var userId = document.getElementById("inputId").value;
  var password = document.getElementById("inputPass").value;
  // var regularExpression = /[0-9]/
  var Identification = (userId != password  && userId.length >= 6 && (!userId.includes("!") && !userId.includes("#") && !userId.includes("$")));
  var pass = (password != "password")
  && (password.includes("!") || password.includes("#") || password.includes("$"))
  && (password.includes("0") || password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9"))
  && (password != password.toUpperCase() && password != password.toLowerCase()) ;

  if (Identification && pass) {
    document.getElementById('isValid').innerHTML = "Your credentials are valid.";
  }
  else { document.getElementById('isValid').innerHTML = "Your credentials are not valid. Try again.";
  }
}
