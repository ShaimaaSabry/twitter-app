import { Link } from 'react-router-dom'
import styles from './NavigationMenu.module.css'

export default function NavigationMenu() {
  return (
    <nav className={styles.navMenu}>
      <Link to="/timeline" className={styles.navMenuLink}>
        Timeline
      </Link>
      <Link to="/profile" className={styles.navMenuLink}>
        Profile
      </Link>
    </nav>
  )
}
