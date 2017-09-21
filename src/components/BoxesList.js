import React from 'react';
import { Link } from 'react-router-dom';
import { Panel, Button } from 'react-bootstrap';

const BoxesList = ({handleChange, boxes, currentClick, handleAction, handleNewToy}) => {

	var renderBoxes = boxes.map((box, index) => {
		// eslint-disable-next-line
		if (currentClick == index) {
			// eslint-disable-next-line
			if (box.name == 'default'){
				return <div key={index} style={{width: 200}} className='gameBlock'>
					<Panel header='This box is empty. You can:' bsStyle="success">					
						<Button bsSize="xsmall" onClick={handleNewToy} >Add a Toy</Button>
						<Button bsSize="xsmall" ><Link to={'/learnGame'}  onClick={handleAction}>Play</Link></Button>
					</Panel>
	          		</div>
			} else {
				return <div key={index} style={{width: 200}} className='gameBlock'>
						<Panel header="You have a toy here" bsStyle="success">
							<p> reused: {box.reuse} times </p>				
							<Button bsSize="xsmall"><Link to={'/matchGame'} onClick={handleAction}  data-key={box.box_id}>Reuse</Link></Button>
			          		<Button bsSize="xsmall"><Link to={'/recycleGame'} onClick={handleAction}  data-key={box.box_id}>Recycle</Link></Button>
			          		<Button bsSize="xsmall"><Link to={'/Trash'} onClick={handleAction} data-key={box.box_id}>&#128465;</Link></Button>
		          		</Panel>
		          		</div>
	         }
		} else {
			return <div key={index} className='gameBlock'> <img onMouseOver={handleChange} src={box.picture} alt={box.name} data-key={index} /></div>
		}
	});

	return <div> {renderBoxes} </div>
};

BoxesList.defaultProps = {
  handleClickCallback: function() {}
};

export default BoxesList;