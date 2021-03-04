import React, {
	useCallback,
	useEffect,
	useState
} from 'react';

import { getCards } from "../../../api/services";

import styles from './styles.module.scss';
import arrow from "../../../assets/img/arrow.png";
import { ISelect } from "./types";

const Select = ({text, onChange, valid}: ISelect) => {
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
			{valid ?
				<div className={styles.classValid}>
					<img className={styles.arrow}
					     src={arrow}
					     alt="arrow"
					/>
				</div> : ''}
		</label>
	);
}

export default Select;
