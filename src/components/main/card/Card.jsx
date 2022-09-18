import styles from "./Card.module.css";

const Card = ({ setDescription, movies }) => {
  return (
    <>
      {movies.map((movie) => 
        (
          <div className={styles.card} key={movie.id}>
            <img
              className={styles.img}
              onClick={() => {
                setDescription(movie);
              }}
              src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        )
      )}
    </>
  );
};

export default Card;
