import { SyntheticEvent } from "react";

export interface ISelect {
	text: string,
	onChange: (e: SyntheticEvent) => void,
	valid: boolean,
	value?: string | boolean,
}