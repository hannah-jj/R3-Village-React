import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BoxesList from '../components/BoxesList';
import BoxNew from '../components/BoxNew';
import * as actions from '../actions/index.js';

class UserShow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addToy: false
		};

		this.handleActionCallback = this.handleActionCallback.bind(this);
		this.newToyCallback = this.newToyCallback.bind(this);
		this.handleNewToy = this.handleNewToy.bind(this);
	}

	componentWillMount(){
		this.props.actions.fetchToyItems();
		this.props.actions.fetchBoxes(`/api${this.props.match.url}`);
	}

	componentDidUpdate(prevProps){
		if (this.props.user !== prevProps.user) {
			this.props.actions.fetchBoxes(`/api${this.props.match.url}`);
		}
	}

	//handle clicks on action buttons for different scenerios
	handleActionCallback(e) {
		let t = e.target;
		let boxInfo = t.getAttribute('data-key').split('-');
		let boxId = parseInt(boxInfo[0]);
		let actionItem = boxInfo[1];
		let clickedBox = parseInt(boxInfo[2]);
		//5 different possibilities /learnGame /matchGame /recycleGame /Trash /addToy
		// actionItem = actionItem.substr(1);

		//p for pollution h for happiness
		let scores = {
		 learnGame: {p: 0, h: 5}, //reduce
		 matchGame: {p: 0, h: 5}, //reuse
		 recycleGame: {p: 3, h: 3}, //recycle
		 addToy: {p: 3, h: 3},
		 Trash: {p: 5, h: 0}};


		this.updateUser(scores[actionItem].h, scores[actionItem].p);

		let updateBoxInfo = {};
		
		if (actionItem === 'recycleGame'){
			updateBoxInfo = { active: false, recycled: true};
		} else if (actionItem === 'Trash') {
			updateBoxInfo = { active: false, trashed: true};
		} else if (actionItem === 'matchGame') {
			updateBoxInfo = { reuse: this.props.boxes[clickedBox].reuse + 1};
		}
		let boxUrl = `/api/boxes/${boxId}`;
		if (actionItem !== 'learnGame') {
			this.props.actions.updateBox(boxUrl, updateBoxInfo);
		}
	}

	// update state after user clicking adding new toy to show add Toy UI
	newToyCallback(e) {
		this.setState({addToy: true});
	}

	//add the selected new toy to user's boxes
	//backend API will automatically update user Happiness & pollution score when a new box is added
	handleNewToy(e) {
		let item_id = e.target.getAttribute('data-key');
		let user_id = this.props.user.id;
		
		this.props.actions.addBox('/api/boxes', {active: true, item_id: item_id, user_id: user_id}).then(
			()=>{
				this.props.actions.fetchUsers('/api/users').then(()=>{ this.setState({addToy: false});
				});
			});	
	}

	//update user's happiness and pollution per action
	updateUser(h, p){
		let oldInfo = this.props.user;
		let updatedInfo = { happiness: oldInfo.happiness + h,
		 pollution: oldInfo.pollution + p};
		let userUrl = `/api${this.props.match.url}`;
		this.props.actions.updateUser(userUrl, updatedInfo);
	}

	render(){
		const {boxes, user, items} = this.props;

		var renderBoxes = <div></div>;
		if (this.state.addToy === false) {
			renderBoxes = <BoxesList boxes={boxes} 
			handleAction={this.handleActionCallback} 
			handleNewToy={this.newToyCallback}/>
		} else {
			renderBoxes = <BoxNew items={items} handleClick={this.handleNewToy} />
		}

		return (
			<div>
				<h1>Welcome {user.name} <img src={`/avatars/avatar${user.avatar}.png`} style={{width: 50}} alt="avatar" /></h1>
				<h2><strong style={{color: "purple"}}> &hearts; {user.happiness}
				 &#128465; {user.pollution}</strong> 
				 </h2>
				{renderBoxes}
				
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
  const user = state.users.find(user => user.id == ownProps.match.params.userId);
  if(user) {
  	return {user: user, boxes: state.boxes, items: state.games};
  } 
  else {
  	return { user: {}, boxes: [], items: [] };
  }
};

function mapDispatchToProps(dispatch) {
	return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);