import styles from './Header.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerBrand}>
          <h1 className={styles.headerBrandName}>NICHOLAS SAKHA</h1>
          {menuOpen && (
            <nav className={styles.mobileNav}>
              <ul>
                <li>ABOUT ME</li>
                <li>CONTACT</li>
                <button className={styles.headerCourseButton}>MY COURSE</button>
              </ul>
            </nav>
          )}
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>ABOUT ME</li>
            <li>CONTACT</li>
            <button className={styles.headerCourseButton}>MY COURSE</button>
          </ul>
        </nav>
        <div className={styles.hamburgerButton} onClick={handleClick}>
          <FontAwesomeIcon
            icon={menuOpen ? faTimes : faBars}
            className={styles.menuIcon}
          />
        </div>
      </div>
    </>
  )
}

export default Header
