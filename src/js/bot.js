	document.querySelector('.contact-btn').onclick = function(){
	let name = '<Name:> '+ (document.querySelector('.name').value)+'     ';	
	let email = '<Email:> '+ (document.querySelector('.email').value)+'     ';
	let sub = '<Sub:> '+ (document.querySelector('.subject').value)+'     ';
	let message = '<Message:> '+ (document.querySelector('.message').value)+'     ';
	let tmp = 'Waxom:  ' + name + email + sub + message;
	var token = '1082381907:AAFGyu6URAZk_yc-i6sM8yVPDeBvj3r_KHk';
	const url = 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id=-340898761&text=';
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", url + tmp, true);
	xhttp.send();
}



