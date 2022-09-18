import styles from "./Main.module.css";
import Description from "./description/Description";
import Card from "./card/Card";
import { useState, useEffect } from "react";

const Main = ({ search,value }) => {
  const [description, setDescription] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      setMovies(search);
  }, [search]);

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.h1}>{value?value:'Popular'}</h1>
        <section className={styles.board}>
          <Card setDescription={setDescription} movies={movies} />
        </section>
        {description && (
          <Description props={description} setDescription={setDescription} />
        )}
      </main>
    </>
  );
};
export default Main;
