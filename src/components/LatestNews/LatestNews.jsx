import React from 'react';

import styles from './styles.module.css';
import BannerListWithSkeleton from '../BannerList/BannerList';

const LatestNews = ({ banners, isLoading }) => {
  return (
    <section className={styles.section}>
      <BannerListWithSkeleton banners={banners} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
