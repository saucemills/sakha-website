import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.HeroContainer}>
      <div className={styles.HeroActionBox}>
        <h2 className={styles.ActionText}>ENTREPRENEUR</h2>
        <h2 className={styles.ActionTextBlue}>CONTENT CREATOR</h2>
        <h2 className={styles.ActionText}>MENTOR</h2>
        <div className={styles.buttonsContainer}>
          <button className={styles.storyButton}>MY STORY</button>
          <button className={styles.contactButton}>CONTACT ME</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
