import React from 'react';

class sideMenu extends React.Component {
  render() {
    return (
    	<div className="navigationAdmin">
	    	<ul className="nav nav-pills nav-stacked">
			  <li role="presentation" className="active"><a href="#">Home</a></li>
			  <li role="presentation"><a href="#">Profile</a></li>
			  <li role="presentation"><a href="#">Messages</a></li>
			</ul>
		</div>
    );
  }
}

export default sideMenu;