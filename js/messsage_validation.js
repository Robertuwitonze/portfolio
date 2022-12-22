function validateForm() {
   
    let ntex;
    let etex;
    let ptex;
    let ltex;
    let mtex;

  let name = document.forms["messageForm"]["name"].value;
  let email = document.forms["messageForm"]["email"].value;
  let phone = document.forms["messageForm"]["phone"].value;

  let location = document.forms["messageForm"]["location"].value;
  let message = document.forms["messageForm"]["message"].value;



  if (name == "") {
    ntex = "Name must be filled out";
      document.getElementById('ndemo').innerHTML = ntex;

  }
  if (email == "") {
    etex = "email must be filled out";
      document.getElementById('edemo').innerHTML = etex;

  }
   if (phone == "") {
    ptex = "phone must be filled out";
      document.getElementById('pdemo').innerHTML = ptex;

  }
  if (location == "") {
    ltex = "location must be filled out";
      document.getElementById('ldemo').innerHTML = ltex;

  }
  if (message == "") {
    mtex = "message must be filled out";
      document.getElementById('mdemo').innerHTML = mtex;

  }

}