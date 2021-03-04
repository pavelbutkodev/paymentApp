export const validation = (value: any, target: string, form: any) => {
	if (target === 'card') {
		console.log('===>value', value);
		return !!value
	}
	if (target === 'cardNumber') {
		if (form.card.value === 'Amex') {
			if (value.length === 15) {
				return true;
			}
		} else {
			if (value.length === 16) {
				return true;
			}
		}
	}
	if (target === 'expiry') {
		if (value.length === 4) {
			return true;
		}
	}
	if (target === 'name') {
		if (value.length > 0 && value.length <= 50) {
			return true;
		}
	}
	if (target === 'email') return !!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
	return false;
};