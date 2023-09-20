export const getDatesDiffInDays = (start: string, end: string) => {
	const dateStart = new Date(start);
	const dateEnd = new Date(end);
	const diffTime = dateEnd.getTime() - dateStart.getTime();
	return Math.round(diffTime / (1000 * 60 * 60 * 24));
};
