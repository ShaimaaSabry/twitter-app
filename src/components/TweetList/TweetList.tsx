import React from 'react'
import styles from './TweetList.module.css'
import type { Tweet } from '../../types/Tweet.ts'

interface TweetListProps {
  tweets: Tweet[]
  timeAgo: (iso: string) => string
}

const TweetList: React.FC<TweetListProps> = ({ tweets, timeAgo }) => (
  <div className={styles.tweetListContainer}>
    <ul className={styles.tweetList}>
      {tweets.map((t) => (
        <li key={t.id} className={styles.tweetListItem}>
          <div className={styles.tweetListItemContent}>
            <img
              src={t.avatarUrl || 'https://i.pravatar.cc/100'}
              alt={`${t.author} avatar`}
              width={44}
              height={44}
              className={styles.tweetAvatar}
            />
            <div className={styles.tweetMain}>
              <div className={styles.tweetHeader}>
                <strong>{t.author}</strong>
                <span className={styles.tweetHandle}>@{t.handle} · {timeAgo(t.createdAt)}</span>
              </div>
              <p className={styles.tweetText}>{t.text}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

export default TweetList
