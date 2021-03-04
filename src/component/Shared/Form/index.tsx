import React, {SyntheticEvent, useEffect, useState} from 'react';

import Input from "../../UI/Input";
import Button from "../../UI/Button";
import Select from "../../UI/Select";
import { validation } from "../../../helpers/validation";

import styles from './styles.module.scss';

let oldExpiryValue = {length: -1}
const Form = () => {
	const [activeButton, setActiveButton] = useState(false);
	const [form, setForm] = useState({
		card: {value: '', isValid: false},
		cardNumber: {value: '', isValid: false},
		expiry: {value: '', isValid: false},
		name: {value: '', isValid: false},
		email: {value: '', isValid: false},
	})

	const isValidAll = () => {
		if (form.card.isValid && form.cardNumber.isValid && form.expiry.isValid && form.name.isValid && form.email.isValid) {
			localStorage.setItem('valid', 'true');
		} else {
			localStorage.setItem('valid', 'false');
		}
	}

	const handleActiveButton = () => {
		setActiveButton(!activeButton);
	}

	useEffect(() => {
		if (form.card.value && form.cardNumber.value && form.expiry.value && form.name.value && form.email.value) {
			handleActiveButton()
		}
		isValidAll()
	}, [form])

	const handleUserInput = (event: any, target: any) => {
		if (target !== 'expiry') {
			return setForm((prevState) => ({
				...prevState,
				[target]: {value: event.target.value, isValid: validation(event.target.value, target, form)},
			}))
		}

		const regexp = /\D/g;
		let str = event.target.value.replace(regexp, '');
		const regexp2 = /(^0([1-9]?(?<=0[1-9])([1-9](?<=0[1-9][1-9])[1-9]?)?)?$)|(^1([0-2]?(?<=1[0-2])([1-9]?(?<=1[0-2][1-9])[1-9]?)?)?$|^$)/;
		if (regexp2.exec(str)) {
			if (str.length >= 2 && !(str.length === 2 && oldExpiryValue.length === 3)) {
				const arr = str.split('');
				arr.splice(2, 0, '/');
				str = arr.join('');
			}
			oldExpiryValue = str

			setForm((prevState) => ({
				...prevState,
				[target]: {value: str, isValid: validation(event.target.value, target, form)},
			}))
		}
	}

		return (
		<div className={styles.wrapper}>
			<Select
				text="Card Types"
				onChange={(e: SyntheticEvent) => handleUserInput(e, 'card')}
				value={form.card.value}
				valid={form.card.isValid}
			/>
			<Input
				text="Card Number"
				onChange={(e: SyntheticEvent) => handleUserInput(e, 'cardNumber')}
				value={form.cardNumber.value}
				valid={form.cardNumber.isValid}
				maxLength={16}
			/>
			<Input
				text="Expiry"
				id={styles.expiry}
				onChange={(e: SyntheticEvent) => handleUserInput(e, 'expiry')}
				value={form.expiry.value}
				valid={form.expiry.isValid}
				maxLength={5}
			/>
			<Input
				text="Name"
				onChange={(e: SyntheticEvent) => handleUserInput(e, 'name')}
				value={form.name.value}
				valid={form.name.isValid}
				maxLength={50}
			/>
			<Input
				text="Email"
				onChange={(e: SyntheticEvent) => handleUserInput(e, 'email')}
				value={form.email.value}
				valid={form.email.isValid}
			/>
			<Button active={activeButton} text="Confirm Payment"/>
		</div>
	);
}

export default Form;
