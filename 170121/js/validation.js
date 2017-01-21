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
  $(`.${field}`).addClass('has-success has-feedback');
  $(`.${field} .glyphicon-ok`).show();
  $(`.${field} .glyphicon-remove`).hide();
}

const validateError = (field) => {
  $(`.${field}`).removeClass('has-success has-feedback');
  $(`.${field}`).addClass('has-error has-feedback');
  $(`.${field} .glyphicon-ok`).hide();
  $(`.${field} .glyphicon-remove`).show();
}
