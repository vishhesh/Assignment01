import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';
export default function Logout({setUser}) {
	const history = useHistory();
	const [message, setMessage] = useState('');
	useEffect(()=>{
		 async function logout(){
			await window.localStorage.setItem('user', '');
			setMessage('Logged out, Redirecting soon. ');
			await setTimeout(()=>{
				setUser('');
				history.push('/');
			}, 1500);
		}
		logout();
	})
	return (
		<div style ={{display: 'flex' , alignItems:'center', justifyContent:'center', }}>
			<h4>{message}</h4>
		</div>
	)
}