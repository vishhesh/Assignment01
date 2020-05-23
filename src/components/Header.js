import React from 'react'

export default function header({title}) {
	return (
		<div style = {{display : 'flex', alignItems:'center', justifyContent :'center', width : '100vw', backgroundColor: 'lightblue', height: 40}}>
			<p style = {{fontSize: 20, fontColor: 'black', }} >{title}</p>
		</div>
	)
}