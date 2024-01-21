import styles from './styles.module.css';
import Search from '../Search/Search';
import Categories from '../Categories/Categories';
import Slider from '../Slider/Slider';
import { IFilters } from '../../interfaces';
import { useGetCategoriesQuery } from '../../store/services/newsApi';
import { useAppDispatch } from '../../store/store';
import { setFilters } from '../../store/slices/newsSlice';

interface Props {
  filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
  const { data: dataCategories } = useGetCategoriesQuery(null);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: 'category', value: category }))
            }
            selectedCategory={filters.category}
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => dispatch(setFilters({ key: 'keywords', value: keywords }))}
      />
    </div>
  );
};

export default NewsFilters;
