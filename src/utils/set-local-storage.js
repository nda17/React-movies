export const setLocalStorage = (key, newValue) => {
	const data = localStorage.getItem(key);
	const currentStorage = data ? JSON.parse(data) : null;

	if (currentStorage) {
		const newData = currentStorage.filter(item => item.id !== newValue.id);
		localStorage.setItem('rating', JSON.stringify([newValue, ...newData]));
	} else {
		localStorage.setItem('rating', JSON.stringify([newValue]));
	}
};
