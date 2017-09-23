import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Grid, Row, Col} from 'react-bootstrap';
import ActionHome from 'material-ui/svg-icons/action/home';
import RaisedButton from 'material-ui/RaisedButton';
import UsersPage from '../containers/UsersPage';
import UsersNew from '../containers/UsersNew';
import MatchGame from '../containers/MatchGame';
import RecycleGame from '../containers/RecycleGame';
import LearnGame from '../containers/LearnGame';
import GamesPage from './GamesPage';
import TrashMsg from './Trash';
import Balloons from './Balloons';

const App = (props) => 
	
	<Grid><Router>
		<div>
		<Row className="show-grid">
		<Col xs={12}><Navbar fixedTop={true}>
        	<Navbar.Header>
        		<Navbar.Brand><a href='/'><ActionHome /></a></Navbar.Brand>
        	<Navbar.Toggle />
        	</Navbar.Header>
        	<Navbar.Collapse>
        		<Nav pullRight>
        			<NavItem href='/users'>All Villagers</NavItem>
        			<NavItem href='/users/new'>Join Village</NavItem>
	            </Nav>
	        </Navbar.Collapse>    
        </Navbar></Col>
        </Row>
      		
			<Switch>

				<Route exact path='/users/new' component={UsersNew} />
				<Route path="/users" component={UsersPage} />
				<Route path='/matchGame' component={MatchGame} />
				<Route path='/recycleGame' component={RecycleGame} />
				<Route path='/learnGame' component={LearnGame} />
				<Route path='/Games' component={GamesPage} />
				<Route path='/Trash' component={TrashMsg} />
				<Route exact path='/' render={() => (	
					<Row className="show-grid">
						<Col xs={12}>
						<Balloons />
						<div>	
							<h1>Welcome to R3 Village</h1>
							<h2>Reduce, Recycle and Reuse with <strong style={{color: "purple"}}>&hearts;</strong></h2>
							<RaisedButton label="See All Villagers" primary={true} href='/users'/>
							<RaisedButton label="Join Village" secondary={true} href='/users/new'/>
						</div>
						</Col>
					</Row> )} />

			</Switch>
		</div>
	</Router></Grid>

export default App;
