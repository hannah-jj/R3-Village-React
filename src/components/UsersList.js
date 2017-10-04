import React from 'react';
import { Link } from 'react-router-dom';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import AutoComplete from 'material-ui/AutoComplete';
import {green50, blue50} from 'material-ui/styles/colors';

const UsersList = ({ users, fuzzy, keyword, handleSearch }) => {
	var sortedUsers;
	if (keyword === ''){
		sortedUsers =  users.slice().sort((user1, user2) => {
		  	return user1.happiness < user2.happiness ? 1 : -1;
		  });
	} else {
		sortedUsers = users.slice().filter(user => {
		  	return user.name.toLowerCase().includes(keyword.toLowerCase());
		  });
	}

	const styles = {
	  chip: {
	    margin: 2,
	  },
	  wrapper: {
	    display: 'flex',
	    flexWrap: 'wrap',
	  },
	  search: {
	  	backgroundColor: green50,
	  	margin: 5,
	  }
	};

	const renderUsers = sortedUsers.map((user, index) => 
{	let imgSrc = `/avatars/avatar${user.avatar}.png`;

	return (<Chip style={styles.chip} key={user.id} backgroundColor={blue50}>
				<Link to={`/users/${user.id}`}><Avatar src={imgSrc} size={32}/>
					{user.name} &hearts;{user.happiness} &#128465; {user.pollution}
				</Link>
			</Chip>
			)}
	);

	return (
		<div>
				<div><h2>Villagers</h2></div>
				<AutoComplete
					floatingLabelText="Search for village name"
      				filter={AutoComplete.fuzzyFilter}
      				dataSource={fuzzy}
      				maxSearchResults={5}
      				style={styles.search}
      				onClose={handleSearch}
      			/>
				<div style={styles.wrapper}>{renderUsers}</div>
	
		</div>
	);
};

export default UsersList;