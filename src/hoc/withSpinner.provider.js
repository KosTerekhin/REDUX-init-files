import React from 'react';

const WithSpinner = ({ loading, children }) =>
	loading ? (
		<div>
			<h1 style={{ color: 'crimson' }}>LAODING...</h1>
		</div>
	) : (
		{ ...children }
	);

export default WithSpinner;
