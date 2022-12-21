function validateForm() {
    let tex;
  let name = document.forms["messageForm"]["name"].value;
    let email = document.forms["messageForm"]["email"].value;
      let phone = document.forms["messageForm"]["phone"].value;

        let location = document.forms["messageForm"]["location"].value;
          let message = document.forms["messageForm"]["message"].value;



  if (name == "") {
    tex = "Name must be filled out";
      document.getElementById('ndemo').innerHTML = tex;

  }
  if (email == "") {
    tex = "email must be filled out";
      document.getElementById('edemo').innerHTML = tex;

  }
   if (phone == "") {
    tex = "phone must be filled out";
      document.getElementById('pdemo').innerHTML = tex;

  }
  if (location == "") {
    tex = "location must be filled out";
      document.getElementById('ldemo').innerHTML = tex;

  }
  if (message == "") {
    tex = "message must be filled out";
      document.getElementById('mdemo').innerHTML = tex;

  }

}