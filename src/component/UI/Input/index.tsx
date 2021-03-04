import React from 'react';

import styles from './styles.module.scss';

const Input = ({text, id, onChange, value, valid, maxLength}: any) => {
	return (
		<label>
			<span>{text}</span>
			<input
				type="text"
				className={id}
				onChange={onChange}
				value={value}
				maxLength={maxLength}
			/>
			{valid === true ? <div className={styles.classValid}>!</div> : ''}
		</label>
	);
}

export default Input;
