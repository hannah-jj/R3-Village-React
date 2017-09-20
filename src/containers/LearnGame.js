
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WinMsg from '../components/winMsg';
import * as arrayMutater from '../actions/arrayMutater';


class LearnGame extends Component {
	constructor(props) {
		super(props);
		this.state = {
			start: 'count bumblebee!',
			question: 0,
			answers: [],
			qArray: [],
			aArray: []
		};

		this.handleClick = this.handleClick.bind(this);
	}

	componentWillMount(){
		var num = arrayMutater.generateGameNum(20);
		var answers = [];
		answers.push(num);

		for(let i = 0; i < 3; i++) {
			answers.push(arrayMutater.generateGameNum(20, num));
		}
		arrayMutater.shuffle(answers);
		this.setState({
			win: false,
			question: num, 
			answers: answers,
			qArray: arrayMutater.fillArray(num),
			aArray: arrayMutater.fillArray(4)
		})
	}


	handleClick = event => {
		var t = event.target;
		var clickedAnswer = this.state.answers[t.getAttribute('data-key')];
		if (clickedAnswer == this.state.question) {
			this.setState({win: true});
		} else {
			this.setState({start: 'TRY AGAIN'});
		}
	}

	render(){
		if (!this.state.win) {
			var answers = this.state.answers;

			const renderQ = this.state.qArray.map( (i, index) => {
				return <img key={index} src='/secret/bumble.jpeg' style={{width: 100}} alt='bumblebee' />
			});

			const renderA = this.state.aArray.map( (i, index) => {
				return <div key={index} data-key={index} className='answerBlock' onClick={this.handleClick} >{answers[i]}</div>
			});

			return (
				<div>
					<h1>{this.state.start}</h1>
					<div className='learnBlock'>{renderQ}</div>
					<div>{renderA}</div>
				</div>
			)
		} else {
			return <div>
						<h1><Link style={{ marginRight: '12px' }} to={'/games'}>Play Any Games Again</Link></h1>
						<WinMsg msg={'Reducing the pollution'} />
					</div>
		}

	}
}

export default LearnGame;