import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';

export const formatDate = date => {
	const formatDate = format(new Date(date), 'MMMM dd, yyyy', {
		locale: enGB
	});

	return formatDate;
};
