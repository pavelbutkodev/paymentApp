import React, {
	useCallback,
	useEffect,
	useState
} from 'react';

import { getFail, getSuccess } from "../../../api/services";

import styles from './styles.module.scss';

const Success = () => {
	const [success, setSuccess] = useState('');
	const [fail, setFail] = useState('');
	const [isValid, setValid] = useState(localStorage.getItem('valid'));
	const getSuccessMessage = useCallback(
		() => {
			getSuccess()
				.then((res) => {
					setSuccess(res.responseMessage);
				})
		}, [],
	);

	const getFailMessage = useCallback(
		() => {
			getFail()
				.catch((e) => {
					setFail(e.response.data.responseMessage);
				})
		}, [],
	);

	useEffect(() => {
		setValid(localStorage.getItem('valid'));
		getSuccessMessage();
		getFailMessage();
	}, [])

	return (
		<div>
			{isValid === 'true' ? <p className={styles.success}>{success}</p> : <p className={styles.fail}>{fail}</p>}
		</div>
	);
}

export default Success;
