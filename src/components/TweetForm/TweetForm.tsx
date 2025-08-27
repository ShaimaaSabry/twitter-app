import React, { useState } from 'react'
import styles from './TweetForm.module.css'

interface TweetFormProps {
  onPost: (text: string) => void
}

const TweetForm: React.FC<TweetFormProps> = ({ onPost }) => {
  const [tweetText, setTweetText] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!tweetText.trim()) return
    onPost(tweetText)
    setTweetText('')
  }

  return (
    <div className={styles.tweetFormContainer}>
      <form onSubmit={handleSubmit} className={styles.tweetForm}>
        <textarea
          value={tweetText}
          onChange={e => setTweetText(e.target.value)}
          placeholder="What's happening?"
          rows={3}
          className={styles.tweetTextarea}
        />
        <div className={styles.tweetFormActions}>
          <button type="submit" className={styles.tweetFormButton}>
            Post
          </button>
        </div>
      </form>
    </div>
  )
}

export default TweetForm
