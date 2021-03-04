import React, {useEffect, useState} from 'react';

import Input from "../../UI/Input";
import Button from "../../UI/Button";
import Select from "../../UI/Select";

import styles from './styles.module.scss';
import {validation} from "../../../helpers/validation";


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

	useEffect(()=>{
		if (form.card.value){
		handleActiveButton()
	}}, [form.card.value])

	useEffect(() => {
		isValidAll()
	}, [form])

	const handleUserInput = (event: any, target: any) => {
		setForm((prevState) => ({
			...prevState,
			[target]: {value: event.target.value, isValid: validation(event.target.value, target, form)},
		}))
	}

		return (
		<div className={styles.wrapper}>
			<Select
				text="Card Types"
				onChange={(e: any) => handleUserInput(e, 'card')}
				value={form.card.value}
				valid={form.card.isValid}
			/>
			<Input
				text="Card Number"
				onChange={(e: any) => handleUserInput(e, 'cardNumber')}
				value={form.cardNumber.value}
				valid={form.cardNumber.isValid}
				maxLength={16}
			/>
			<Input
				text="Expiry"
				id={styles.expiry}
				onChange={(e: any) => handleUserInput(e, 'expiry')}
				value={form.expiry.value}
				valid={form.expiry.isValid}
				maxLength={4}
			/>
			<Input
				text="Name"
				onChange={(e: any) => handleUserInput(e, 'name')}
				value={form.name.value}
				valid={form.name.isValid}
				maxLength={50}
			/>
			<Input
				text="Email"
				onChange={(e: any) => handleUserInput(e, 'email')}
				value={form.email.value}
				valid={form.email.isValid}
			/>
			<Button active={activeButton} text="Confirm Payment"/>
		</div>
	);
}

export default Form;
