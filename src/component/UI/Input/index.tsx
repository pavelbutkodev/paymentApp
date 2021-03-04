import React from 'react';

import styles from './styles.module.scss';
import arrow from '../../../assets/img/arrow.png'
import { IInput } from "./types";

const Input = ({text, id, onChange, value, valid, maxLength}: IInput) => {
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
			{valid ? <div className={styles.classValid}>
				<img className={styles.arrow}
				     src={arrow}
				     alt="arrow"
				/>
			</div> : ''}
		</label>
	);
}

export default Input;
