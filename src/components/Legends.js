import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import ContentDeleteSweep from 'material-ui/svg-icons/content/delete-sweep';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AvReplay from 'material-ui/svg-icons/av/replay';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import Badge from 'material-ui/Badge';

const Legends = () => {
	var legends = {
		learnGame: {p: 0, h: 5, icon: <ActionFavorite />, note: 'Reduce', secondary: false}, //reduce
		matchGame: {p: 0, h: 5, icon: <ActionFavoriteBorder />, note: 'Reuse', secondary: false}, //reuse
		recycleGame: {p: 3, h: 3, icon: <AvReplay />, note: "Recycle", secondary: false}, //recycle
		addToy: {p: 3, h: 3, icon: <ContentAdd />, note: "Add a Toy", secondary: true},
		Trash: {p: 5, h: 0, icon: <ContentDeleteSweep />, note: "Trash", secondary: true}};

	var renderContents = Object.keys(legends).map((key, index) => {
		return <TableRow key={index}>
					<TableRowColumn><FloatingActionButton mini={true} secondary={legends[key].secondary}>
									{legends[key].icon}
							</FloatingActionButton></TableRowColumn>
					<TableRowColumn>{legends[key].note}</TableRowColumn>
					<TableRowColumn><Badge primary={true} badgeContent={legends[key].h} ></Badge></TableRowColumn>
					<TableRowColumn><Badge secondary={true} badgeContent={legends[key].p} ></Badge></TableRowColumn>
				</TableRow>			
	});

	return (
		<Table>
			<TableHeader displaySelectAll={false}
            adjustForCheckbox={false}>
				<TableRow>
					<TableHeaderColumn>Icons</TableHeaderColumn>
					<TableHeaderColumn>Action</TableHeaderColumn>
					<TableHeaderColumn>&hearts; </TableHeaderColumn>
					<TableHeaderColumn>&#128465; </TableHeaderColumn>
				</TableRow>
			</TableHeader>
			<TableBody displayRowCheckbox={false} >
				{renderContents}		
			</TableBody>
		</Table>

		);
}

export default Legends;