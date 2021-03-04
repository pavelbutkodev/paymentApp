import React from 'react';
import {useHistory} from "react-router-dom";

const Button = ({active, text}: any) => {
	const history = useHistory();
	const handleHistory = (e: any) => {
		history.push('/success')
	}

	return (
		<button
			disabled={!active}
			onClick={handleHistory}
		>
			{text}
		</button>
	);
}

export default Button;
