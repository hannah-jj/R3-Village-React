import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import darkBlack from 'material-ui/styles/colors';

const UsersList = ({ users, handleHover, currentHover, handleLike}) => {
	const sortedUsers =  users.slice().sort((user1, user2) => {
	  	return user1.likes < user2.likes ? 1 : -1;
	  });
	const renderUsers = sortedUsers.map((user, index) => 
{	let imgSrc = `/avatars/avatar${user.avatar}.png`;

	return (<div key={user.id} >
				<ListItem 
					leftAvatar={<Avatar src={imgSrc} alt="avatar"/>}
					primaryText={<Link style={{ marginRight: '12px' }}
					 			to={`/users/${user.id}`}>{user.name}</Link>}
					secondaryText={
						<p>
							<span style={{color:darkBlack}}>Happiness &hearts;{user.happiness} </span>
							<span style={{color:darkBlack}}>Pollution &#128465; {user.pollution} </span>
							
						</p>
					}
				/>
				<Divider inset={true} />
			</div>)}
	);

	return (
		<div>
				<div><h2>Villagers</h2></div>
				<div>{renderUsers}</div>
	
		</div>
	);
};

export default UsersList;
// <p><button data-key={user.id} onClick={handleLike}>Like</button> {user.likes} </p>