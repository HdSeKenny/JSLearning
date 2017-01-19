//验证name

const valName = () => {
  const username = document.getElementById("name");
  const nameStr = /^[a-zA-Z]+$/;

  if (nameStr.test(username.value)) {

    document.getElementById('nameerror').innerHTML = "";
    document.getElementById("name").style.border = "2px solid #66CDAA";

  } else {
    document.getElementById('nameerror').innerHTML = "Username should be characters only!";
    document.getElementById("name").style.border = "2px solid #DC143C";
    if (username.value.length === 0) {
      document.getElementById('nameerror').innerHTML = "Username field is required!"
      document.getElementById("name").style.border = "2px solid #DC143C";
    }
  }
}


//验证 password
const valPassword = () => {
  const password = document.getElementById("password");

  if (password.value.length < 8) {
    document.getElementById('passworderror').innerHTML = "Password is invalid!";
    document.getElementById("password").style.border = "2px solid #DC143C";
    if (password.value.length === 0) {
      document.getElementById('passworderror').innerHTML = "Password field is required!";
      document.getElementById("password").style.border = "2px solid #DC143C";
    }
  } else {
    document.getElementById('passworderror').innerHTML = "";
    document.getElementById("password").style.border = "2px solid #66CDAA";
  }
}


// 验证 Confirm password
const valConfirm = () => {
  const password = document.getElementById("password");
  const confirm = document.getElementById("confirm");

  if (confirm.value.length !== 0 && password.value !== confirm.value) {
    document.getElementById('confirmerror').innerHTML = "The password is different!";
    document.getElementById("confirm").style.border = "2px solid #DC143C";

  } else {
    if (confirm.value.length === 0) {
      document.getElementById('confirmerror').innerHTML = "Confirm field is required!"
      document.getElementById("confirm").style.border = "2px solid #DC143C";
    } else {
      document.getElementById('confirmerror').innerHTML = "";
      document.getElementById("confirm").style.border = "2px solid #66CDAA";
    }

  }
}


// 验证 email
const valEmail = () => {
  const email = document.getElementById("email");
  const emailStr = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailStr.test(email.value)) {

    document.getElementById('emailerror').innerHTML = "";
    document.getElementById("email").style.border = "2px solid #66CDAA";

  } else {
    document.getElementById('emailerror').innerHTML = "This email address is invalid";
    document.getElementById("email").style.border = "2px solid #DC143C";
    if (email.value.length === 0) {
      document.getElementById('emailerror').innerHTML = "Email field is required!"
      document.getElementById("email").style.border = "2px solid #DC143C";
    }
  }
}
