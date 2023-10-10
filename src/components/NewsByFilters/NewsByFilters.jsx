import React from 'react';

import styles from './styles.module.css';
import Pagination from '../Pagination/Pagination';
import NewsList from '../NewsList.jsx/NewsList';
import { TOTAL_PAGES } from '../../constants/constants';
import NewsFilters from '../NewsFilters/NewsFilters';

const NewsByFilters = ({ filters, changeFilter, isLoading, news }) => {
  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter('page_number', filters.page_number + 1);
    }
  };

  const handlePreviosPage = () => {
    if (currentPage > 1) {
      changeFilter('page_number', filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilter('page_number', pageNumber);
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />

      <Pagination
        currentPage={filters.page_number}
        handleNextPage={handleNextPage}
        handlePreviosPage={handlePreviosPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
      />

      <NewsList isLoading={isLoading} news={news} />

      <Pagination
        currentPage={filters.page_number}
        handleNextPage={handleNextPage}
        handlePreviosPage={handlePreviosPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
      />
    </section>
  );
};

export default NewsByFilters;
