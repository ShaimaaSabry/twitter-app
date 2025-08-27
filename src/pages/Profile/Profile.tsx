import { useState } from 'react'
import TweetForm from '../../components/TweetForm/TweetForm.tsx'
import TweetList from '../../components/TweetList/TweetList.tsx'
import { timeAgo } from '../../utils/timeAgo.ts'
import type { Tweet } from '../../types/Tweet.ts'
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu.tsx'
import styles from './Profile.module.css'

const profileUser = {
  author: 'You',
  handle: 'you',
  avatarUrl: 'https://i.pravatar.cc/100?img=60', // Fixed avatar for 'You'
}

export default function Profile() {
  const [tweets, setTweets] = useState<Tweet[]>([])

  function handlePostTweet(text: string) {
    const newTweet: Tweet = {
      id: (Date.now() + Math.random()).toString(),
      author: profileUser.author,
      handle: profileUser.handle,
      text,
      createdAt: new Date().toISOString(),
      avatarUrl: profileUser.avatarUrl,
    }
    setTweets([newTweet, ...tweets])
  }

  return (
    <div className={styles.profileContainer}>
      <NavigationMenu />
      <header className={styles.profileHeader}>
        <h1 className={styles.profileTitle}>Profile</h1>
      </header>
      <TweetForm onPost={handlePostTweet} />
      <TweetList tweets={tweets} timeAgo={timeAgo} />
    </div>
  )
}
