export const getCurrentDate = (): string => {
	const today = new Date();
	const formatedDate =
		today.getFullYear() +
		"-" +
		("0" + (today.getMonth() + 1)).slice(-2) +
		"-" +
		("0" + today.getDate()).slice(-2);
	return formatedDate;
};
