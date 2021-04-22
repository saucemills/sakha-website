import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <p>CONNECT WITH ME ON:</p>
      <div className={styles.FooterSocials}>
        <FontAwesomeIcon
          icon={['fab', 'youtube']}
          className={styles.FooterSocialsLogo}
        />
        <FontAwesomeIcon
          icon={['fab', 'tiktok']}
          className={styles.FooterSocialsLogo}
        />
        <FontAwesomeIcon
          icon={['fab', 'facebook']}
          className={styles.FooterSocialsLogo}
        />
        <FontAwesomeIcon
          icon={['fab', 'linkedin']}
          className={styles.FooterSocialsLogo}
        />
        <FontAwesomeIcon
          icon={['fab', 'instagram']}
          className={styles.FooterSocialsLogo}
        />
      </div>
      <p>©NICHOLAS SAKHA 2021</p>
    </div>
  )
}

export default Footer
