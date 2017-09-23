import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';

import WinMsg from '../components/winMsg';


class RecycleGame extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  count: 32,
		  firstClick: false,
		  currentGame: '',
		  hiddenPieces: []
		};

		this.handleClick = this.handleClick.bind(this);
	}

	componentWillMount(){
		this.props.actions.fetchRItems();
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.firstClick === false ) {
			this.setState({currentGame : nextProps.games[0].name});
		}
  		this.setState({games: nextProps.games});
  	}


	handleClick = event => {
		var t = event.target;
		var i = t.getAttribute('data-key');
		
		if (this.state.firstClick === false) {
			this.setState ({firstClick: true});
		}

		if (t.alt === this.state.currentGame) {
			var newHidden = this.state.hiddenPieces;
			newHidden.push(i);
			this.setState({hiddenPieces: newHidden, count: this.state.count-1});
		}
	}


	render(){
		if (this.state.count > 0) {
			var games = this.props.games;
			var renderGames = games.map((gamePiece, index) => {
				return(
				
					<img key={index} data-key={index} src={gamePiece.picture}  onClick={this.handleClick}  
					alt={gamePiece.name}
					className={this.state.hiddenPieces.includes(index.toString())? 'hidden smallGame' : 'smallGame'}
					/>
				);
			});

			var currentGame ="";

			if (games.length > 0) {
				currentGame = <div style={{display: 'inline-block'}}><img src={games[0].picture} alt={games[0].name} style={{width: 100, height: 100}}/></div>
			}

			return (
			  <div><h1>Recycle {currentGame} count <strong>{this.state.count}</strong></h1>
				{renderGames}
			  </div>
			);

		} 	else {		
			return <WinMsg msg={'Recycling the toy'} />;	
		}


	};
}

function mapStateToProps(state) {
	return { games: state.games};
}

function mapDispatchToProps(dispatch) {
	return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(RecycleGame);


