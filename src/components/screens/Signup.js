import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import saveUser from './../../../src/utils/setUser';

export default function Signup({setUser}) {
	const validate = () => {
		email.match(
			/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
		)
			? setEmailValid(true)
			: setEmailValid(false);
		password1 === password2 && password1.trim().length > 8
			? setPasswordValid(true)
			: setPasswordValid(false);

		return passwordValid && emailValid && name;
	};
	const history = useHistory();
	const [message, setMessage] = useState();
	const [emailValid, setEmailValid] = useState(true);
	const [passwordValid, setPasswordValid] = useState(true);
	const [disabled, setDisabled] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password1, setPassword1] = useState("");
	const [password2, setPassword2] = useState("");

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
			<h3> Signup </h3>
			<form
				onSubmit={async (e) => {
					setMessage('');
					e.preventDefault();
					await validate();
					if (email && password1 && name) {
						console.log("sending req");
						let data = JSON.stringify({
							email,
							name,
							password: password1,
						});
						fetch("/auth/signup", {
							method: "POST",
							headers: {
								"Content-Type":
									"application/x-www-form-urlencoded",
							},
							body: data,
						})
							.then((res) => res.json())
							.then((res) => {
								console.log(res);
								setMessage({ok: res.ok, message: res.message})
								saveUser(res.name, res.email, res.token);
								setUser({name: res.name, email: res.email, token : res.token})	
								history.push('/');
							})

							.catch((e) => {
								setMessage({ok: false, message: "Error Occured. Try Again."})
								console.log(e);
							});
					}
				}}
			>
				<div className="form-group">
					<label for="exampleInputEmail1">Name</label>
					<input
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						value={name}
						onChange={(t) => setName(t.target.value)}
					/>
				</div>

				<div className="form-group">
					<label for="exampleInputEmail133">Email Address</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail133"
						aria-describedby="name_help"
						value={email}
						onChange={(t) => setEmail(t.target.value)}
					/>
					{!emailValid && (
						<small className="form-text text-danger">
							Enter Valid Email
						</small>
					)}
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
						value={password1}
						onChange={(t) => setPassword1(t.target.value)}
					/>
				</div>
				<div className="form-group">
					<label for="retypePassword">Retype Password</label>
					<input
						type="password"
						className="form-control"
						id="retypePassword"
						value={password2}
						onChange={(t) => setPassword2(t.target.value)}
					/>
					{!passwordValid && (
						<small className="text-danger form-text ">
							Password size must be > 8.
							<br />
							Both Password must match.
						</small>
					)}
				</div>

				<button type="submit" className="btn btn-primary">
					Signup
				</button>
				{message && message.ok && (<div class="alert alert-success" role="alert">
					{message.message}
				</div>)
			}
			{message && !message.ok && (<div class="alert alert-danger" role="alert">
					{message.message}
				</div>)}
			</form>
		</div>
	);
}
