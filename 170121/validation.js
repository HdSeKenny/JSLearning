
const valUsername = () => {
  const regex = /^[a-zA-Z0-9_]+$/;
  const username = $("#username").val();
  let errorMsg = '';
  if (regex.test(username)) {
    valSuccess('username');
  } else {
    valError('username');
    if (!username) {
      errorMsg = 'Username is repuired';
    } else {
      errorMsg = 'Username should contains charaters, numbers and _'
    }
  }
  $('.username .help-block').text(errorMsg);
}

const valEmail = () => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const email = $("#email").val();
  let errorMsg = '';
  if (regex.test(email)) {
    valSuccess('email');
  } else {
    valError('email');
    if (!email) {
      errorMsg = 'Email is repuired';
    } else {
      errorMsg = 'Email format should be xxx@xxx.com'
    }
  }
  $('.email .help-block').text(errorMsg);
}


const valSuccess = (field) => {
  $(`.${field}`).removeClass('has-error has-feedback');
  $(`.${field}`).addClass('has-success has-feedback');
  $(`.${field} .glyphicon-ok`).show();
  $(`.${field} .glyphicon-remove`).hide();
}

const valError = (field) => {
  $(`.${field}`).removeClass('has-success has-feedback');
  $(`.${field}`).addClass('has-error has-feedback');
  $(`.${field} .glyphicon-ok`).hide();
  $(`.${field} .glyphicon-remove`).show();
}
