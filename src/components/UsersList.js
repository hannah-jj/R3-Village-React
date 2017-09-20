import React from 'react';
import { Link } from 'react-router-dom';

const UsersList = ({ users, handleHover, currentHover, handleLike}) => {
	const sortedUsers =  users.slice().sort((user1, user2) => {
	  	return user1.likes < user2.likes ? 1 : -1;
	  });
	const renderUsers = sortedUsers.map((user, index) => 
{	let imgSrc = `/avatars/avatar${user.avatar}.png`;

	return (<div key={user.id} className={index == currentHover ? 'userContainerHover' : 'userContainer'} data-key={index} onMouseOver={handleHover}>
				<div className='gameBlock'><img style={{width: 100}} src={imgSrc} alt="avatar"/></div>
				<div className='gameBlock'>
					<p><Link style={{ marginRight: '12px' }}
				 	to={`/users/${user.id}`}>Name: {user.name}</Link></p>
				
				<p><strong>&hearts; {user.happiness}</strong></p>
				<p><strong>&#128465; {user.pollution}</strong></p>
				<p><button data-key={user.id} onClick={handleLike}>Like</button> {user.likes} </p>
				</div>
			</div>)}
	);

	return (
		<div className='usersContainer'>
				<div><h2>Villagers</h2></div>
				<div>{renderUsers}</div>
	
		</div>
	);
};

export default UsersList;