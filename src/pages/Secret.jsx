import React from 'react';
import withAuthorization from '../components/hoc/withAuthorization';

const Secret = (props) => {
	console.log(props);
	return (
		<div>
			<h1>Secret Page</h1>
		</div>
	);
};

export default withAuthorization(Secret);
