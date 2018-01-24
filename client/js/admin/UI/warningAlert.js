import React from 'react';
import { Alert } from 'react-bootstrap';
class WarningAlert extends React.Component {

	render() {
		if(this.props.alertVisible) {
			return (
				<Alert bsStyle="danger" onDismiss={this.props.handleAlertDismiss}>
					<div>Ooops something went wrong!!! {this.props.errorMsg}</div>
				</Alert>
			);
		}
		return ""
	}
}

export default WarningAlert;