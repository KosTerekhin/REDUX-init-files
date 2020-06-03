import React from 'react';

const withNotification = (BaseElement) => (props) => {
	console.log(props.children);
	return (
		<BaseElement {...props}>
			<h1>Notifications Ele</h1>
			{props.children}
		</BaseElement>
	);
};

export default withNotification;
