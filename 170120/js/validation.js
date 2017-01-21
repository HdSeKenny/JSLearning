const validateUsername = () => {
  const regex = /^[a-zA-Z0-9_]+$/;
  const username = $('#username').val();
  if (regex.test(username)) {
    $('.username').addClass('has-success has-feedback');
    $('.username .glyphicon-remove').hide();
    $('.username .glyphicon-ok').show();
  } else {
    $('.username').addClass('has-error has-feedback');
    $('.username .glyphicon-ok').hide();
    $('.username .glyphicon-remove').show();
  }
}


const loadData = () => {
  $.get('/data', (data, status) => {
    if (status === 'success') {
      $('.well').append(data);
    }
  })
}

const loadJson = () => {
  $.get('/json', (data, status) => {
    const arr = JSON.parse(data);
    arr.forEach((a, index) => {
      if (index < 3) {
        $('.value').append(`<div class="well">${a._id.value} -- ${a.dbcolumn}</div>`);
      }
    })
  })
}

const register = (event) => {
  event.preventDefault();
  const userInfo = {
    username: $('#username').val(),
    password: $('#password').val()
  }

  $.post('/validate', userInfo, (data, status) => {
    if (data) {

    } else {

    }
  })
}

$('.register-btn').click(register);
