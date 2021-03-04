import { SyntheticEvent } from "react";

export interface IInput {
	text?: string,
	onChange: (e: SyntheticEvent) => void,
	valid: boolean,
	id?: string,
	value?: string,
	maxLength?: number,
}