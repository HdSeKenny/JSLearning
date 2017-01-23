const loadData = () => {
  $.get('/data', (data, status) => {
    if (status === 'success') {
      $('.well').append(data);
    }
  })
}

const loadJson = () => {
  $.get('/json', (data, status) => {
    const newArr = convertJsonData(data);
    newArr.forEach(object => {
      const htmlString = `<div class="well">${object._id} ${object.dbcolumn} ${object.dbvalues[0].display_literal}</div>`
      $('.value').append(htmlString);
    })
  })
}


const convertJsonData = (data) => {
  const stringArr = JSON.parse(data);
  // arr._id = arr._id.value;
  console.log(stringArr);
  stringArr.map(arr => {
    arr._id = arr._id.value;
    const newDbvalues = [];
    arr.dbvalues.forEach(value => {
      if (value.active === true) {
        newDbvalues.push(value);
      }
    })

    return arr.dbvalues = newDbvalues;
  })
  return stringArr;
}


const login = () => {
  // event.preventDefault();
  const userInfo = {
    username: $('#username').val(),
    password: $('#password').val()
  }
  $.post('/validate', userInfo, (data, status) => {
    if (data.user) {
      window.location.href = '/home';
    }
    alert(data.msg);
  })
}

const register = () => {
  const username = $("#username").val();
  const password = $("#password").val();
  const email = $("#email").val();
  const newUser = { username, password, email };
  const isUsername = validateUsername();
  const isEmail = validateEmail();
  const isPassword = validatePassword();
  const isConfirmPassword = comparePassword();

  if (isUsername && isEmail && isPassword && isConfirmPassword) {
    $.post('/register', newUser, (data, status) => {
      if (!data.user) {
        $('.responseMsg .help-block').text(data.msg);
      } else {
        // console.log(data);
        alert(data.msg);
        window.location.href = '/home';
      }
    })
  }
}

const moveToLogin = () => {
  window.location.href = '/login';
}
