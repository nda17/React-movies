export const getLocalStorage = (key, newData) => {
	const data = localStorage.getItem(key);

	return data ? JSON.parse(data) : null;
};
