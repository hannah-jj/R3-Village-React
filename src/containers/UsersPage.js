
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import UsersList from '../components/UsersList';
import UserShow from './UserShow';
import UsersNew from './UsersNew';
import * as actions from '../actions/index.js';


class UsersPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentHover: -1,
			likes: []
		};
	}
	componentDidMount(){
		this.props.actions.fetchUsers('/api/users');
	}

	mouseOverCallBack(e){
		let t = e.target;
		this.setState({currentHover: t.getAttribute('data-key')});
	}

	likesButtonCallback(e){
		let users = this.props.users;
		let t = e.target;
		let index = t.getAttribute('data-key');
		// eslint-disable-next-line
		let user = users.find( user => user.id == index);
		let newLikes = user.likes + 1;

		let url = `/api/users/${index}`;

		this.props.actions.updateUser(url, {likes: newLikes}).then(
			()=> this.setState({likes: this.state.likes + 1}));
		// update the state to trigger re-rendering
	}
	render(){
	  const {match, users} = this.props;
	  
	  return(
		<div>
			
			<Switch>
				<Route path={`${match.url}/new`} component={UsersNew} />
				<Route path={`${match.url}/:userId`} component={UserShow} />
				<Route exact path={match.url} render={() => (<UsersList handleLike={this.likesButtonCallback.bind(this)} likes={this.state.likes} users={users} handleHover={this.mouseOverCallBack.bind(this)} currentHover={this.state.currentHover} />)}/>
			</Switch>
		</div>
	   )
	}
}

function mapStateToProps(state) {
	return { users: state.users };
}

function mapDispatchToProps(dispatch) {
	return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
