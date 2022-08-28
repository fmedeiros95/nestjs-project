export interface IUser {
	username: string;
	email: string;
	phone: string;
	// Caso o o parametro seja opcional, insira um "?" antes do ":".
	balance?: number;
}
