import React from 'react'
import styles from './TweetList.module.css'
import type { Tweet } from '../../domain/Tweet.ts'
import defaultAvatar from '../../assets/default-avatar.svg'
import { timeAgo } from '../../utils/timeAgo.ts'
import FollowButton from '../FollowButton/FollowButton.tsx'

interface TweetListProps {
  tweets: Tweet[]
}

const TweetList: React.FC<TweetListProps> = ({ tweets }) => (
  <div className={styles.tweetListContainer}>
    <ul className={styles.tweetList}>
      {tweets.map((t) => {
        const author = t.author
        return (
          <li key={t.id} className={styles.tweetListItem}>
            <div className={styles.tweetListItemContent}>
              <img
                src={author?.avatarUrl || defaultAvatar}
                alt={`${author?.name} avatar`}
                width={44}
                height={44}
                className={styles.tweetAvatar}
              />
              <div className={styles.tweetMeta}>
                <div className={styles.tweetHeader}>
                  <div className={styles.authorRow}>
                    <strong className={styles.tweetAuthorName}>{author?.name}</strong>
                    <FollowButton followStatus={author?.followStatus} authorName={author?.name} />
                  </div>
                  <span className={styles.tweetHandle}>@{author?.handle}</span>
                </div>
                <div className={styles.tweetTime}>{timeAgo(t.createdAt)}</div>
              </div>
            </div>
            <p className={styles.tweetText}>{t.content}</p>
          </li>
        )
      })}
    </ul>
  </div>
)

export default TweetList
