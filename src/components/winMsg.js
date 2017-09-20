import React from 'react';

const WinMsg = ({msg})  => {

	return (
		<div>
			<h1>Thank you for {msg}!!!</h1>
			<img style={{width: 820, display: 'inline-block'}} src='https://s3.us-east-2.amazonaws.com/r3-village/won.jpg' alt='secret' />
		</div>
	);
};

export default WinMsg;

// var renderGames = <div><h1>"YOU WON!"</h1><img style={{width: 820, display: 'inline-block'}} src='https://media.giphy.com/media/wl6l9trsOaktq/giphy.gif' alt='firework' /></div>;
		