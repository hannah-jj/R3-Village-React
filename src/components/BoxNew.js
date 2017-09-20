import React, { Component } from 'react';

const BoxNew =({items, handleClick}) => {
	var renderItems = items.map((item, index)=> {
		return <div key={index} className='gameBlock'> <img onClick={handleClick} src={item.picture} alt={item.name} data-key={item.id} /></div>
	});

	return (
		<div>
			<h1>Select a toy to add to your room</h1>
			<h2>&#128465; +3 <strong style={{color: "purple"}}>&hearts; +3 </strong></h2>
			{renderItems}
		</div>
		
	);
};

export default BoxNew;