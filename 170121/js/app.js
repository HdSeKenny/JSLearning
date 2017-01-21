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

const login = (event) => {
  event.preventDefault();
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

$('.login-btn').click(login);


const removeSpace = (string) => {
  let firstIndex = 0;
  let lastIndex = 0;
  if (string.length) {
    const stringArr = string.split('');
    stringArr.forEach((char, index) => {
      if (char !== ' ') {
        firstIndex = index;
      }
    })

    for (var i = stringArr.length - 1; i >= 0; i--) {
      if(stringArr[i] !== ' ') {
        lastIndex = i;
      }
    }
  }

  return string.substring(firstIndex, lastIndex);
}

console.log(removeSpace('  xx   hello world  dasda  '));
