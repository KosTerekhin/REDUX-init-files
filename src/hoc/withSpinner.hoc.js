import React from 'react';

const withSpinner = (WrappedComponnent) => ({ loading, ...otherProps }) => {
	// console.log(otherProps);

	return loading ? (
		<div>
			<h1 style={{ color: 'crimson' }}>LAODING...</h1>
		</div>
	) : (
		<WrappedComponnent {...otherProps} />
	);
};

export default withSpinner;
