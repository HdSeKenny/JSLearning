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

  $('.help-block').text(errorMsg);
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
