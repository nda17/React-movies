import { Pagination } from 'antd';
import { useEffect, useState } from 'react';
import styles from './PaginationPages.module.css';

export const PaginationPages = props => {
	const {
		contentPage,
		setContentPage = Function.prototype,
		totalPages
	} = props;

	const [page, setPage] = useState(contentPage);

	const changePage = e => {
		setPage(e);
	};

	useEffect(() => {
		setContentPage(page);
	}, [setContentPage, page]);

	return (
		<Pagination
			className={styles.pagination}
			current={contentPage}
			onChange={e => changePage(e)}
			total={totalPages}
			pageSize={1}
			showSizeChanger={false}
		/>
	);
};
