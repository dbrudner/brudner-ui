export default (date: Date) =>
	`${date.toLocaleString("en-us", {
		month: "short"
	})} ${date.getUTCDate()} ${date.getUTCFullYear()}`;
