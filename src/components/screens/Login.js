import React, { useState } from "react";
import axios from "axios";
import saveUser from './../../../src/utils/setUser';
import {useHistory} from 'react-router-dom';



export default function Login({setUser}) {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	return (
		<div
			style={{
				width: "400",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<h3> Login </h3>
			{error && (
				<div class="alert alert-danger" role="alert">
					{error}
				</div>
			)}
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setError('');
					let data = JSON.stringify({ email, password });
					fetch("/auth/login", {
						method: "POST",
						headers: {
							"Content-Type": "application/x-www-form-urlencoded",
						},
						body: data,
					}).then(res=>res.json()).then(res=>{
						if(res && res.ok){
							//save token
							saveUser(res.name, res.email, res.token);
							setUser({name: res.name, email: res.email, token : res.token})	
							//redirect to home
							history.push('/');

						}else{
							throw new Error('login failed.');
						}
					}).catch(e=>{
						console.log(e);
						setError("Login failed");
					})
				}}
			>
				<div className="form-group">
					<label for="exampleInputEmail1">Email address</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<small id="emailHelp" className="form-text text-muted">
						We'll never share your email with anyone else.
					</small>
				</div>
				<div className="form-group">
					<label for="exampleInputPassword1">Password</label>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
}
