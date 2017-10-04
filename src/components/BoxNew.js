import React from 'react';

const BoxNew =({items, handleClick, unit}) => {
	const styles = {
		image: {width: unit}
	}
	var renderItems = items.map((item, index)=> {
		return <div key={index} className='gameBlock'> <img onClick={handleClick} style={styles.image} src={item.picture} alt={item.name} data-key={item.id} /></div>
	});

	return (
		<div>
			<p>Select a toy to add to your room</p>
			<p>&#128465; +3 <strong style={{color: "purple"}}>&hearts; +3 </strong></p>
			{renderItems}
		</div>
		
	);
};

export default BoxNew;