import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
function App() {
  const [search, setSearch] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value) {
      const fetchData = async () => {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=b9ac3bf6c958644500bcaeab4be4274c&language=en-US&query=${value}&page=1&include_adult=false`
        );
        const data = await res.json();
        setSearch(data.results);
      };
      fetchData();
    } else {
      const fetchData = async () => {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=b9ac3bf6c958644500bcaeab4be4274c&language=en-US&page=1"
        );
        const data = await res.json();
        setSearch(data.results);
      };
      fetchData();
    }
  }, [value]);

  return (
    <>
      <Header setValue={setValue} />
      <Main search={search} value={value}/>
      <Footer/>
    </>
  );
}

export default App;
