import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem } from 'material-ui/List';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import {pink300, blue50} from 'material-ui/styles/colors';

const UsersList = ({ users, handleHover, currentHover, handleLike}) => {
	const sortedUsers =  users.slice().sort((user1, user2) => {
	  	return user1.happiness < user2.happiness ? 1 : -1;
	  });

	const styles = {
	  chip: {
	    margin: 2,
	  },
	  wrapper: {
	    display: 'flex',
	    flexWrap: 'wrap',
	  },
	};

	const renderUsers = sortedUsers.map((user, index) => 
{	let imgSrc = `/avatars/avatar${user.avatar}.png`;


	return (<Chip style={styles.chip} key={user.id} backgroundColor={blue50}>
				<Link to={`/users/${user.id}`}><Avatar src={imgSrc} size={32}/></Link>
					{user.name} &hearts;{user.happiness} &#128465; {user.pollution}
				
			</Chip>
			)}
	);

	return (
		<div>
				<div><h2>Villagers</h2></div>
				<div style={styles.wrapper}>{renderUsers}</div>
	
		</div>
	);
};

export default UsersList;
// <p><button data-key={user.id} onClick={handleLike}>Like</button> {user.likes} </p>