import { useEffect } from "react";
import { useState } from "react";
import styles from "./Description.module.css";

const Description = ({ props, setDescription }) => {
  const { title, vote_average, release_date, backdrop_path, genre_ids } = props;

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=b9ac3bf6c958644500bcaeab4be4274c&language=en-US')
      const data = await res.json()
      const info = genre_ids.map(id => (data.genres.filter(genre=> genre.id===id))).reduce((acu,cur) => [...acu,cur[0]])
      setGenres(info)
    }
    fetchGenres()
  },[genre_ids]);

  return (
    <div className={styles.description}>
      <img
        className={styles.descriptionImg}
        src={`http://image.tmdb.org/t/p/w500/${backdrop_path}`}
        alt={title}
      />
      <div>
        <h2>{title}</h2>
        <p>rating: {vote_average}</p>
        <p>release: {release_date}</p>
        <p>
          {genres.map((genre) => (
            <span key={genre.id}>{genre.name} </span>
          ))}
        </p>
      </div>
      <span className={styles.closeModal} onClick={() => setDescription('')}>
        X
      </span>
    </div>
  );
};

export default Description;
