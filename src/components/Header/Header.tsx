import styles from './styles.module.css';

import { formatDate } from '../../helpers/formatDate';
import { themeIcons } from '../../assets';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.info}>
        <h1 className={styles.title}>NEWS</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>

      <img
        onClick={toggleTheme}
        src={isDark ? themeIcons.light : themeIcons.dark}
        width={30}
        alt="theme"
      />
    </header>
  );
};

export default Header;
