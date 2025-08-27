import type { Tweet } from '../domain/Tweet'
import { mockUsers } from './mockUsers'

export const mockTweets: Tweet[] = [
  { id: '1', author: mockUsers[0], content: 'The Analytical Engine weaves algebraic patterns just as the Jacquard loom weaves flowers and leaves.', createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString() },
  { id: '2', author: mockUsers[1], content: 'Those who can imagine anything, can create the impossible.', createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString() },
  { id: '3', author: mockUsers[2], content: 'The most dangerous phrase in the language is, “We’ve always done it this way.”', createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString() }
]

