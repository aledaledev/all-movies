import styles from "./Header.module.css";
import icon from "../../assets/movies.svg";
const Header = ({setValue}) => {

  return (
    <header className={styles.header}>
      <div className={styles.divFlex}>
        <img className={styles.svg} src={icon} alt="moviesapp" />
        <span className={styles.title}>AllMovies</span>
      </div>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search movie"
        onChange={(e) => setValue(e.target.value)}
      />
    </header>
  );
};

export default Header;
