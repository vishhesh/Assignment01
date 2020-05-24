export default function(name, email , token){
	window.localStorage.setItem('user', JSON.stringify({name, email, token}));
}