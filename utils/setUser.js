export default function(name, email , token){
	console.log('=========setUSer');
	window.localStorage.setItem('user', JSON.stringify({name, email, token}));
}