import { useState, useEffect } from 'react'
import TweetForm from '../../components/TweetForm/TweetForm.tsx'
import TweetList from '../../components/TweetList/TweetList.tsx'
import type { Tweet } from '../../domain/Tweet.ts'
import type { User } from '../../domain/User.ts'
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu.tsx'
import styles from './Profile.module.css'
import { fetchProfileTweets } from '../../api/tweetApi.ts'
import { fetchUserProfile } from '../../api/userApi.ts'
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails.tsx'
import { FollowStatus } from '../../domain/User.ts'

export default function Profile() {
  const [tweets, setTweets] = useState<Tweet[]>([])
  const [user, setUser] = useState<User | null>(null)
  const [userLoading, setUserLoading] = useState(true)
  const [tweetsLoading, setTweetsLoading] = useState(true)
  const [userError, setUserError] = useState<string | null>(null)
  const [tweetsError, setTweetsError] = useState<string | null>(null)

  // Fallback user info if profile fails (supply id to satisfy User type expectations)
  const fallbackUser: User = {
    id: 'fallback',
    name: 'You',
    handle: 'you',
    avatarUrl: undefined,
    followStatus: FollowStatus.NOT_FOLLOWING
  }

  useEffect(() => {
    let cancelled = false

    fetchUserProfile()
      .then(u => { if (!cancelled) setUser(u.followStatus ? u : { ...u, followStatus: FollowStatus.NOT_FOLLOWING }) })
      .catch(err => { if (!cancelled) setUserError(err.message || 'Failed to load user') })
      .finally(() => { if (!cancelled) setUserLoading(false) })

    fetchProfileTweets()
      .then(tw => { if (!cancelled) setTweets(tw) })
      .catch(err => { if (!cancelled) setTweetsError(err.message || 'Failed to load tweets') })
      .finally(() => { if (!cancelled) setTweetsLoading(false) })

    return () => { cancelled = true }
  }, [])

  function handlePostTweet(text: string) {
    const authorUser = user || fallbackUser
    const newTweet: Tweet = {
      id: (Date.now() + Math.random()).toString(),
      author: authorUser,
      content: text,
      createdAt: new Date().toISOString()
    }
    setTweets(prev => [newTweet, ...prev])
  }

  const resolvedUser = user || fallbackUser

  return (
    <div className={styles.profileContainer}>
      <NavigationMenu />
      <header className={styles.profileHeader}>
        <h1 className={styles.profileTitle}>Profile</h1>
      </header>
      <section className={styles.profileInfo} aria-label="User profile information">
        {userLoading && <p>Loading profile...</p>}
        {!userLoading && (
          <>
            {userError && (
              <div>
                <p role="alert" style={{ color: 'red', margin: 0 }}>User unavailable</p>
                <p style={{ margin: '4px 0 8px' }}>Using fallback profile.</p>
              </div>
            )}
            <ProfileDetails
              name={resolvedUser.name}
              handle={resolvedUser.handle}
              avatarUrl={resolvedUser.avatarUrl}
              tweetCount={tweets.length}
            />
          </>
        )}
      </section>
      {!tweetsLoading && <TweetForm onPost={handlePostTweet} />}
      {tweetsLoading && <p>Loading tweets...</p>}
      {tweetsError && !tweetsLoading && <p role="alert" style={{ color: 'red' }}>{tweetsError}</p>}
      {!tweetsLoading && <TweetList tweets={tweets} />}
    </div>
  )
}
