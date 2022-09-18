import styles from './Footer.module.css'
const Footer = () => {
    function goTop (){
        document.documentElement.scrollTop=0
      }
  return (
    <footer className={styles.footer}>
        <span>AllMovies</span>
        <span>Made by: AleDale</span>
        <a className={styles.goTop} onClick={goTop}>Go to up</a>
    </footer>
  )
}

export default Footer