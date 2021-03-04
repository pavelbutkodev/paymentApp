import React, {
	useCallback,
	useEffect,
	useState
} from 'react';

import {getCards} from "../../../api/services";

import styles from './styles.module.scss';

const Select = ({text, onChange, valid, classValid}: any) => {
	const [cardTypes, setCardTypes] = useState([]);

	const getUserAll = useCallback(
		() => {
			getCards()
				.then((res) => {
					setCardTypes(res.cardTypes);
				})
		}, [],
	);

	useEffect(() => {
		getUserAll();
	}, [])

	return (
		<label>
			{text}
			<select
				onChange={onChange}
			>
				<option
					disabled
					selected
				>
					- Select Card Types -
				</option>
				{cardTypes && cardTypes.length > 0 && cardTypes.map((item: any) => (
					<option
						value={item.value}
						key={item.id + 1}
					>
						{item.value}
					</option>
				))}
			</select>
			{valid === true ? <div className={styles.classValid}>!</div> : ''}
		</label>
	);
}

export default Select;
