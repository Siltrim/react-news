import styles from './styles.module.css';
import BannerList from '../BannerList/BannerList';
import { useGetLatestNewsQuery } from '../../store/services/newsApi';

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannerList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
