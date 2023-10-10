import React from 'react';

import styles from './styles.module.css';
import Search from '../Search/Search';
import Categories from '../Categories/Categories';
import { useFetch } from '../../helpers/hooks/useFetch';
import { getCategories } from '../../api/apiNews';

const NewsFilters = ({ filters, changeFilter }) => {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          setSelectedCategory={(category) => changeFilter('category', category)}
          selectedCategory={filters.category}
        />
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter('keywords', keywords)}
      />
    </div>
  );
};

export default NewsFilters;
