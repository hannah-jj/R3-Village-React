import React from 'react';
import { Link } from 'react-router-dom';
import {GridList, GridTile} from 'material-ui/GridList';
import ContentDeleteSweep from 'material-ui/svg-icons/content/delete-sweep';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AvReplay from 'material-ui/svg-icons/av/replay';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import {pink300, blue300} from 'material-ui/styles/colors';

const BoxesList = ({boxes, handleAction, handleNewToy}) => {
	const styles = {
	  root: {
	    display: 'flex',
	    flexWrap: 'wrap',
	    justifyContent: 'space-around',
	  },
	  gridList: {
	    overflowY: 'auto',
	  },
	};

	var renderBoxes = boxes.map((box, index) => {
	
			// eslint-disable-next-line
			if (box.name == 'default'){
				return <GridTile key={index} 
						title='This box is empty'
						subtitle={<div>
							<Link to={'/learnGame'} onClick={handleAction}><ActionFavorite color={blue300}/></Link>
							<ContentAdd onClick={handleNewToy} color={pink300}/>
							</div>}
						titlePosition='bottom'
						>
						<img src={box.picture} alt='default'/>
						</GridTile>
			} else {
				return <GridTile key={index} 
						title={'Reused: ' + box.reuse}
						subtitle={<div>
							<Link to={'/matchGame'} onClick={handleAction}><ActionFavoriteBorder data-key={box.box_id+'-matchGame-'+index} color={blue300} /></Link>
							<Link to={'/recycleGame'} onClick={handleAction}><AvReplay data-key={box.box_id+'-recycleGame-'+index} color={blue300} /></Link>
							<Link to={'/Trash'} onClick={handleAction}><ContentDeleteSweep data-key={box.box_id+'-Trash-'+index} color={pink300} /></Link>
							</div>}
			          	titlePosition='bottom'
						>
						<img src={box.picture} alt='toy'/>
						</GridTile>
	        }
		} 
	);

	return (
		<div style={styles.root}>    
			<GridList cols={3} cellHeight={200} padding={1} style={styles.gridList}> 
			{renderBoxes} 
			</GridList>
		</div>
    )
};

BoxesList.defaultProps = {
  handleClickCallback: function() {}
};

export default BoxesList;