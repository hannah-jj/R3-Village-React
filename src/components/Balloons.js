import React from 'react';

const Balloons = () => {
	return (<div>
		<img className='balloon' style={{left: 0}} src='/balloons/balloon1.png' />
		<img className='balloon' style={{left: 100}} src='/balloons/balloon2.png' />
		<img className='balloon' style={{left: 200}} src='/balloons/balloon3.png' />
		<img className='balloon' style={{left: 300}} src='/balloons/balloon4.png' />
	</div>);
}

export default Balloons;