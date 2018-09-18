export default (date: Date): string =>
	`${date.toLocaleString("en-us", {
		month: "short"
	})} ${date.getUTCDate()} ${date.getUTCFullYear()}`;
