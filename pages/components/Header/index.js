import styles from './Header.module.css'
import ResponsiveMenu from 'react-responsive-navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerBrand}>
        <h1 className={styles.headerBrandName}>NICHOLAS SAKHA</h1>
      </div>
      <ResponsiveMenu
        menuOpenButton={
          <FontAwesomeIcon icon={faBars} className={styles.menuIcon} />
        }
        menuCloseButton={
          <FontAwesomeIcon icon={faBars} className={styles.menuIcon} />
        }
        changeMenuOn='1200px'
        largeMenuClassName={styles.nav}
        smallMenuClassName={styles.mobileNav}
        menu={
          <ul>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <button className={styles.headerCourseButton}>COURSE</button>
          </ul>
        }
      />
    </div>
  )
}

export default Header
