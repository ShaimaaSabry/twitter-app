import { useState } from 'react'
import TweetList from '../../components/TweetList/TweetList.tsx'
import TweetForm from '../../components/TweetForm/TweetForm.tsx'
import { timeAgo } from '../../utils/timeAgo.ts'
import type { Tweet } from '../../types/Tweet.ts'
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu.tsx'
import styles from './Timeline.module.css'

const mockTweets: Tweet[] = [
	{
		id: '1',
		author: 'Ada Lovelace',
		handle: 'ada',
		text: 'The Analytical Engine weaves algebraic patterns just as the Jacquard loom weaves flowers and leaves.',
		createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5m ago
		avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
	},
	{
		id: '2',
		author: 'Alan Turing',
		handle: 'aturing',
		text: 'Those who can imagine anything, can create the impossible.',
		createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(), // 1h ago
		avatarUrl: 'https://i.pravatar.cc/100?img=5',
	},
	{
		id: '3',
		author: 'Grace Hopper',
		handle: 'ghopper',
		text: 'The most dangerous phrase in the language is, “We’ve always done it this way.”',
		createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1d ago
		avatarUrl: 'https://i.pravatar.cc/100?img=15',
	},
]

const currentUser = {
	author: 'You',
	handle: 'you',
	avatarUrl: 'https://i.pravatar.cc/100?img=60', // Fixed avatar for 'You'
}

export default function Timeline() {
	const [tweets, setTweets] = useState(mockTweets)

	function handlePostTweet(text: string) {
		const newTweet: Tweet = {
			id: (Date.now() + Math.random()).toString(),
			author: currentUser.author,
			handle: currentUser.handle,
			text,
			createdAt: new Date().toISOString(),
			avatarUrl: currentUser.avatarUrl,
		}
		setTweets([newTweet, ...tweets])
	}

	return (
		<div className={styles.timelineContainer}>
			<NavigationMenu />
			<header className={styles.timelineHeader}>
				<h1 className={styles.timelineTitle}>Timeline</h1>
			</header>
			<TweetForm onPost={handlePostTweet} />
			<TweetList tweets={tweets} timeAgo={timeAgo} />
		</div>
	)
}
