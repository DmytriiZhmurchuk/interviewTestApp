import React from 'react';

class sideMenu extends React.Component {
  render() {
    return (
    	<div className="navigationAdmin">
	    	<ul className="nav nav-pills nav-stacked">
	    	  <li role="presentation" className="active"><a href="#home">Home</a></li>
			  <li role="presentation"><a href="#tests">Tests</a></li>
			  <li role="presentation"><a href="#students">Students</a></li>
			  <li role="presentation"><a href="#student-groups">Student groups</a></li>
			</ul>
		</div>
    );
  }
}

export default sideMenu;