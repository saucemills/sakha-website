import styles from './CourseCTA.module.css'

const CourseCTA = () => {
  return (
    <div className={styles.CourseCTAContainer}>
      <img
        src='./coursePhoto.jpg'
        alt='Course Photo'
        className={styles.CoursePhoto}
      />
      <div className={styles.CourseInfo}>
        <h1 className={styles.CourseTitle}>
          THE NICHOLAS SAKHA <br></br> ENTREPRENEURSHIP COURSE
        </h1>
        <ul className={styles.CourseBullets}>
          <li>JUMPSTART YOUR JOURNEY INTO BEING A BUSINESS OWNER</li>
          <li>
            LEARN HOW I LEVERAGED MY MENTORS AND MY OPPORTUNITIES TO FIND
            SUCCESS
          </li>
          <li>GET ONE-ON-ONE COACH FROM ME</li>
        </ul>
        <button className={styles.CourseCTAButton}>START TODAY</button>
      </div>
    </div>
  )
}

export default CourseCTA
