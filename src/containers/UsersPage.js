
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
			fuzzy: [],
			keyword: ''
		};
		this.handleSearchCallBack = this.handleSearchCallBack.bind(this);
	}
	componentDidMount(){
		this.props.actions.fetchUsers('/api/users').then((res)=>{
			let fuzzyData = this.props.users.map(user => user.name)
			this.setState({fuzzy: fuzzyData});
		});
	}

	handleSearchCallBack(){
		let searchTerm = document.querySelector('input').value;
		this.setState({keyword: searchTerm});
	}

	render(){
	  const {match, users} = this.props;
	  
	  return(
		<div>
			<Switch>
				<Route path={`${match.url}/new`} component={UsersNew} />
				<Route path={`${match.url}/:userId`} component={UserShow} />
				<Route exact path={match.url} render={() => (<UsersList users={users} fuzzy={this.state.fuzzy} keyword={this.state.keyword} handleSearch={this.handleSearchCallBack}/>)}/>
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
