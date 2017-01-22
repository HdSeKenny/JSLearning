const valUsername = () =>{
	const userStr = /^[a-zA-Z0-9_]+$/;
	const username = $("#username").val();
	let errorMsg = '';
	if(userStr.test(username)){
		valSuccess('username');
	}
	else {
		valError('username');
		if(!username){
			errorMsg = 'Username is repuired';
		}
		else {
			errorMsg = 'Username should contains charaters, numbers and _'
		}
	}
	$('.help-block').text(errorMsg);
}

const valEmail = () =>{
	const emailStr = /^[a-zA-Z0-9_]+$/;
	const email = $("#email").val();
	let errorMsg = '';
	if(emailStr.test(username)){
		valSuccess('email');
	}
	else {
		valError('email');
		if(!email){
			errorMsg = 'Email is repuired';
		}
		else {
			errorMsg = 'Email should contains charaters, numbers and _'
		}
	}
	$('.help-block').text(errorMsg);
}


const valSuccess = (field) =>{
	$(`.${field}`).removeClass('has-error has-feedback');
	$(`.${field}`).addClass('has-success has-feedback');
    $(`.${field} .glyphicon-ok`).show();
    $(`.${field} .glyphicon-remove`).hide();
}

const valError = (field) =>{
	$(`.${field}`).removeClass('has-success has-feedback');
	$(`.${field}`).addClass('has-error has-feedback');
    $(`.${field} .glyphicon-ok`).hide();
    $(`.${field} .glyphicon-remove`).show();
}