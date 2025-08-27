import { Link } from 'react-router-dom'
import styles from './NavigationMenu.module.css'

export default function NavigationMenu() {
  return (
    <nav className={styles.navMenu}>
      <div className={styles.logo}>
        {/* Twitter SVG logo */}
        <svg viewBox="0 0 24 24" width="32" height="32" fill="#1DA1F2" aria-label="Twitter logo">
          <g>
            <path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 11.2 9.03a12.72 12.72 0 0 1-9.24-4.686 4.48 4.48 0 0 0 1.39 5.98A4.44 4.44 0 0 1 2 9.13v.057a4.48 4.48 0 0 0 3.59 4.393c-.4.11-.82.134-1.24.05a4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.54a12.67 12.67 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.77 0-.19-.01-.38-.02-.57a9.1 9.1 0 0 0 2.24-2.3z"></path>
          </g>
        </svg>
      </div>
      <div className={styles.links}>
        <Link to="/timeline" className={styles.navMenuLink}>
          Timeline
        </Link>
        <Link to="/profile" className={styles.navMenuLink}>
          Profile
        </Link>
      </div>
    </nav>
  )
}
