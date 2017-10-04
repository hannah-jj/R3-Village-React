import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions/index';

class UsersNew extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			avatar: 1,
			redirect: false,
			avatars: []
		};
	}

	componentWillMount(){
		let i = 1;
		let avatars = [];
		for (i = 1; i < 9; i ++ ) {
			 avatars.push(`/avatars/avatar${i}.png`);
		}
		this.setState({avatars: avatars});

	}

	handleOnSubmit = event => {
		event.preventDefault();
		let userName = this.state.name;
		let avatar = this.state.avatar;

		userName = userName === '' ? "guest"+Date.now() : userName;
		this.props.actions.addUser('/api/users', {name: userName, avatar: avatar});
		this.setState({redirect: true});
	}

	handleOnChange = e => {
		this.setState({
			name: e.target.value
		})
	}

	handleHover = e => {
		this.setState({
			avatar: e.target.getAttribute('data-key')
		})
	}

	render() {

		if (this.state.redirect === true ) {
			return (<div><p>New Villager Created<Link style={{ marginRight: '12px' }}
			 	to={`/users`}>home</Link></p></div>);
		}

		const renderAvatars = this.state.avatars.map((avatar, index)=>{
			return (
				// eslint-disable-next-line
				<div key={index} className={index+1 == this.state.avatar ? 'gameBlock avatarContainer' : 'gameBlock'}>
					<img data-key={index+1} style={{width: 100}} src={avatar} alt="avatar"  onClick={this.handleHover.bind(this)}/>
				</div>
			);
		})

		return (
			<div className='usersContainer'>	
				<h1>What's Your Name & Avatar?</h1>
				<form onSubmit={this.handleOnSubmit}>
					<input type="text"
						placeholder="Name"
						name="name"
						value={this.state.name}
						onChange={this.handleOnChange} />
					<input
						type="submit"
						value="Join R3 Village" />
				</form>
				{renderAvatars}
			</div>
		
		);
	}
};

function mapDispatchToProps(dispatch) {
	return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(null, mapDispatchToProps) (UsersNew);

			