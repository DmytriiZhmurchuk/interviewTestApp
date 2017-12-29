import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Home from '../Home/Home';
import Students from '../Students/Students';
import StudentGroups from '../StudentGroups/StudentGroups';
import Tests from '../Tests/Tests';


class MainView extends React.Component {
  render() {
    return (
    	<div className='fullHeight'>
	    	<Switch>
	      		<Route exact path='/' component={Home}/>
	      		<Route path='/students' component={Students}/>
	      		<Route path='/student-groups' component={StudentGroups}/>
	      		<Route path='/tests' component={Tests}/>
	    	</Switch>
    	</div>
    );
  }
}

export default MainView;