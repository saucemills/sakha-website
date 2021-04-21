import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerBrand}>
        <h1 className={styles.headerBrandName}>NICHOLAS SAKHA</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>ABOUT ME</li>
          <li>CONTACT</li>
          <button className={styles.headerCourseButton}>MY COURSE</button>
        </ul>
      </nav>
    </div>
  )
}

export default Header
