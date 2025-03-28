import { Input } from 'antd';
import { useEffect, useState } from 'react';

export const SearchForm = ({ query, setQuery = Function.prototype }) => {
	const [value, setValue] = useState(query);

	const handleChange = e => {
		e.preventDefault();
		setValue(e.target.value);
	};

	useEffect(() => {
		setQuery(value);
	}, [setQuery, value]);

	return (
		<Input
			placeholder="Type to search..."
			defaultValue={value}
			onChange={e => handleChange(e)}
		/>
	);
};
