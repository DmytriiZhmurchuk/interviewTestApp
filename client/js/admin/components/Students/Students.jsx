import React from 'react';
import StudentsHeader from './StudentsHeader';

class Students extends React.Component {
  render() {
    return (
    	<div className="panel panel-default fullHeight">
 			<div className="panel-heading">
 				<StudentsHeader/>
 			</div>
			<div className="panel-body">
 				<div>This is Students dummy </div>
			</div>	
    	</div>	
	 );
    	
  }
}

export default Students;