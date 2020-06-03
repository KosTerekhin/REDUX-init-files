import React from 'react';

const withNotification = (WrappedComponent) => ({ notifications, otherProps }) =>
	notifications[0] ? (
		<div>
			<h1 style={{ color: 'yellow' }}>{notifications[0].message}</h1>
		</div>
	) : (
		<WrappedComponent {...otherProps} />
	);

export default withNotification;
