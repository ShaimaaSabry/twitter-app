import React from 'react'
import styles from './ProfileDetails.module.css'
import defaultAvatar from '../../assets/default-avatar.svg'

export interface ProfileDetailsProps {
  name: string
  handle: string
  avatarUrl?: string
  tweetCount?: number
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ name, handle, avatarUrl, tweetCount }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <img
        src={avatarUrl || defaultAvatar}
        alt={`${name} avatar`}
        width={80}
        height={80}
        className={styles.profileAvatar}
      />
      <div className={styles.profileMeta}>
        <h2 className={styles.profileName}>{name}</h2>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
          <p className={styles.profileHandle}>@{handle}</p>
          {typeof tweetCount === 'number' && (
            <p className={styles.profileStats}>Tweets: {tweetCount}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails

