import React from 'react'
import { FollowStatus } from '../../domain/User'
import styles from './FollowButton.module.css'

interface FollowButtonProps {
  followStatus?: FollowStatus
  authorName?: string
}

const FollowButton: React.FC<FollowButtonProps> = ({ followStatus, authorName }) => {
  if (!followStatus) return null

  switch (followStatus) {
    case FollowStatus.NOT_FOLLOWING:
      return (
        <button
          type="button"
          className={`${styles.followBtn} ${styles.followAction}`}
          aria-label={`Follow ${authorName || 'user'}`}
        >
          Follow
        </button>
      )
    case FollowStatus.FOLLOWING:
      return (
        <button
          type="button"
          className={`${styles.followBtn} ${styles.following}`}
          disabled
          aria-label={`You are following ${authorName || 'this user'}`}
        >
          Following
        </button>
      )
    case FollowStatus.REQUESTED:
      return (
        <button
          type="button"
          className={`${styles.followBtn} ${styles.requested}`}
          disabled
          aria-label={`Follow request to ${authorName || 'this user'} pending`}
        >
          Requested
        </button>
      )
    default:
      return null
  }
}

export default FollowButton

