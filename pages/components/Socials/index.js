import styles from './Socials.module.css'
import SocialsCard from '../SocialsCard'

const Socials = () => {
  return (
    <div className={styles.SocialsContainer}>
      <SocialsCard />
      <SocialsCard />
      <SocialsCard />
    </div>
  )
}

export default Socials
