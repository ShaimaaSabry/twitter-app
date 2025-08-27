import {useEffect, useState} from 'react'
import TweetList from '../../components/TweetList/TweetList.tsx'
import TweetForm from '../../components/TweetForm/TweetForm.tsx'
import type { Tweet } from '../../domain/Tweet.ts'
import type { User } from '../../domain/User.ts'
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu.tsx'
import styles from './Timeline.module.css'
import { fetchTimelineTweets } from '../../api/tweetApi.ts'
import { mockTweets } from '../../mocks/mockTweets'
import { FollowStatus } from '../../domain/User.ts'

const currentUser: User = { id: 'you', name: 'You', handle: 'you', avatarUrl: 'https://i.pravatar.cc/100?img=60', followStatus: FollowStatus.NOT_FOLLOWING }

export default function Timeline() {
  const [tweets, setTweets] = useState<Tweet[]>(mockTweets)

  useEffect(() => {
    let cancelled = false
    fetchTimelineTweets()
      .then(data => { if (!cancelled) setTweets(data) })
      .catch(err => { if (!cancelled) console.error('Failed to load timeline tweets', err) })
    return () => { cancelled = true }
  }, [])

  function handlePostTweet(text: string) {
    if (!text.trim()) return
    const newTweet: Tweet = {
      id: (Date.now() + Math.random()).toString(),
      author: currentUser,
      content: text,
      createdAt: new Date().toISOString()
    }
    setTweets(prev => [newTweet, ...prev])
  }

  return (
    <div className={styles.timelineContainer}>
      <NavigationMenu />
      <header className={styles.timelineHeader}>
        <h1 className={styles.timelineTitle}>Timeline</h1>
      </header>
      <TweetForm onPost={handlePostTweet} />
      <TweetList tweets={tweets} />
    </div>
  )
}
