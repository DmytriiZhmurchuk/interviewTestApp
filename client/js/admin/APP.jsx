import React from 'react';
import SideMenu from './components/SideMenu/SideMenu';
import MainView from './components/MainView/MainView';

const AppAdmin = () => {
  return (
  	<div className="container-fluid fullHeight">
  	 	<div className="row mainviewport fullHeight">
			<div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 panel-viewport fullHeight">
				<div className="panel panel-default fullHeight ">
					<div className="panel-heading">#Menu bar</div>
    				<div className="panel-body">
		    			<SideMenu/>
		    		</div>	
		    	</div>		
			</div>
	     	<div className="col-sm-9 col-md-9 col-lg-9 col-xl-9 panel-viewport fullHeight">
	     		<div className="panel panel-default fullHeight">
	     			<div className="panel-heading">Grid viewport</div>
    				<div className="panel-body">
	     				<MainView/>
     				</div>	
		    	</div>	
	     	</div>
	    </div>
	</div>    
  );
};
export default AppAdmin;
