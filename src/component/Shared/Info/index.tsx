import React, {useEffect, useState} from 'react';

import styles from './styles.module.scss';

const Info = () => {
	const [date, setDate] = useState(new Date())
	// setInterval(() => {
	// 	setDate(new Date())
	// }, 1000)
	return (
		<div className={styles.info}>
			<p>Product: BOOK</p>
			<p>Date: {date.getDate()}/{date.getMonth()}/{date.getFullYear()} {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</p>
			<p>Amount: 1500.00 RUB</p>
		</div>
	);
}

export default Info;
