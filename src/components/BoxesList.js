import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import ContentDeleteSweep from 'material-ui/svg-icons/content/delete-sweep';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AvReplay from 'material-ui/svg-icons/av/replay';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';

const BoxesList = ({handleChange, boxes, currentClick, handleAction, handleNewToy}) => {
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
						    <FloatingActionButton mini={true} secondary={true} onClick={handleNewToy}>
									<ContentAdd />
							</FloatingActionButton>
							<FloatingActionButton mini={true}>
									<a href='/learnGame' onClick={handleAction}><ActionFavorite /></a>
							</FloatingActionButton>
							</div>}
						titlePosition='bottom'
						>
						<img src={box.picture} alt='default'/>
						
						
						</GridTile>
			} else {
				return <GridTile key={index} 
						title={'Reused: ' + box.reuse}
						subtitle={<div>
							<FloatingActionButton mini={true} href='/matchGame' onClick={handleAction} data-key={box.box_id}>
      							<ActionFavoriteBorder />
    						</FloatingActionButton>
							<FloatingActionButton mini={true} href='/recycleGame' onClick={handleAction} data-key={box.box_id}>
      							<AvReplay />
    						</FloatingActionButton>
							<FloatingActionButton mini={true} secondary={true} href='/Trash' onClick={handleAction} data-key={box.box_id}>
								<ContentDeleteSweep  />
							</FloatingActionButton>
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