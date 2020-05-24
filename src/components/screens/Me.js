import React from 'react'

export default function Me({user}) {
	return (
		<div>
			{!user && (
				<div class="alert alert-success" role="alert">
					Please login to View this Page.
				</div>
			)}
			{user && (
				<h3> Welcome</h3> 
			)}
		</div>
	)
}