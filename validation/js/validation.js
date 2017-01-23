const validateUsername = () => {
  const regex = /^[a-zA-Z0-9_]+$/;
  const username = $('#username').val();
  let errorMsg = '';
  if (regex.test(username)) {
    validateSuccess('username');
  } else {
    validateError('username');
    if (!username) {
      errorMsg = 'Username is required';
    } else {
      errorMsg = `Username should be characters, numbers and '_'`;
    }
  }

  $('.username .help-block').text(errorMsg);
}


const validateEmail = () => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const email = $('#email').val();
  let errorMsg = '';
  if(regex.test(email)) {
    validateSuccess('email');
  }
  else {
    validateError('email');
    if (!email){
      errorMsg = 'Email is required';
    }else {
      errorMsg = 'The format of email should be xxx@xx.com';
    }
  }
  $('.email .help-block').text(errorMsg);
}

const validatePassword = () => {
  const password = $('#password').val();
  let errorMsg = '';
  if (password.length > 8){
       validateSuccess('password');
  }
  else {
    validateError('password');
    if (!password){
      errorMsg = 'Password is required';
    }else {
      errorMsg = 'The length of password should be more than 8';
    }
  }
  $('.password .help-block').text(errorMsg);
}

const comparePassword = () => {
  const confirmpassword = $('#confirm').val();
  const password = $('#password').val();
  let errorMsg = '';
  if (confirmpassword===password){
    validateSuccess('confirm');
  }
  else {
    validateError('confirm');
    if(!confirmpassword){
      errorMsg = 'Confirm password is required';
    }else {
      errorMsg = 'The password is different';
    }
  }
  $('.confirm .help-block').text(errorMsg);
}

const validateSuccess = (field) => {
  $(`.${field}`).removeClass('has-error has-feedback');
  $(`.${field} .glyphicon-remove`).removeClass('show');

  $(`.${field}`).addClass('has-success has-feedback');
  $(`.${field} .glyphicon-ok`).addClass('show');
}

const validateError = (field) => {
  $(`.${field}`).removeClass('has-success has-feedback');
  $(`.${field} .glyphicon-ok`).removeClass('show');

  $(`.${field}`).addClass('has-error has-feedback');
  $(`.${field} .glyphicon-remove`).addClass('show');
}
