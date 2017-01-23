const validateUsername = () => {
  const regex = /^[a-zA-Z0-9_]+$/;
  const username = $('#username').val();
  let errorMsg = '';
  let isSuccess = false;
  if (regex.test(username)) {
    validateSuccess('username');
    isSuccess = true;
  } else {
    validateError('username');
    if (!username) {
      errorMsg = 'Username is required';
    } else {
      errorMsg = `Username should be characters, numbers and '_'`;
    }
  }

  $('.username .help-block').text(errorMsg);

  return isSuccess;
}


const validateEmail = () => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const email = $('#email').val();
  let errorMsg = '';
  let isSuccess = false;
  if (regex.test(email)) {
    validateSuccess('email');
    isSuccess = true;
  } else {
    validateError('email');
    if (!email) {
      errorMsg = 'Email is required';
    } else {
      errorMsg = 'The format of email should be xxx@xx.com';
    }
  }
  $('.email .help-block').text(errorMsg);

  return isSuccess;
}

const validatePassword = () => {
  const password = $('#password').val();
  let errorMsg = '';
  let isSuccess = false;
  if (password.length > 4) {
    validateSuccess('password');
    isSuccess = true;
  } else {
    validateError('password');
    if (!password) {
      errorMsg = 'Password is required';
    } else {
      errorMsg = 'The length of password should be more than 8';
    }
  }
  $('.password .help-block').text(errorMsg);

  return isSuccess;
}

const comparePassword = () => {
  const confirmpassword = $('#confirm').val();
  const password = $('#password').val();
  let errorMsg = '';
  let isSuccess = false;
  if (confirmpassword && confirmpassword === password) {
    validateSuccess('confirm');
    isSuccess = true;
  } else {
    validateError('confirm');
    if (!confirmpassword) {
      errorMsg = 'Confirm password is required';
    } else {
      errorMsg = 'The password is different';
    }
  }
  $('.confirm .help-block').text(errorMsg);

  return isSuccess;
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
