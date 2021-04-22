import styles from './Socials.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Socials = () => {
  return (
    <div className={styles.SocialsContainer}>
      <div className={styles.SocialsCard}>
        <FontAwesomeIcon
          icon={['fab', 'youtube']}
          className={styles.SocialsLogo}
        />
        <div className={styles.SocialsDescription}>
          <p>
            CHECK OUT MY YOUTUBE CONTENT ON SELF DEVELOPMENT, INSURANCE AND
            DAILY VLOGS
          </p>
        </div>
      </div>
      <div className={styles.SocialsCard}>
        <FontAwesomeIcon
          icon={['fab', 'tiktok']}
          className={styles.SocialsLogo + ' ' + styles.SocialsLogoTikTok}
        />
        <div className={styles.SocialsDescription}>
          <p>
            CHECK OUT MY TIKTOK FOR FUNNY ENTERTAINING CONTENT I MADE WITH MY
            TEAMS
          </p>
        </div>
      </div>
      <div className={styles.SocialsCard}>
        <FontAwesomeIcon
          icon={['fab', 'facebook']}
          className={styles.SocialsLogo + ' ' + styles.SocialsLogoFacebook}
        />
        <div className={styles.SocialsDescription}>
          <p>CHECK OUT MY FACEBOOK FOR MY DAILY THOUGHTS AND ACTIONS</p>
        </div>
      </div>
    </div>
  )
}

export default Socials
