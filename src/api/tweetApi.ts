import type { Tweet } from '../domain/Tweet'
import { jsonRequest, API_ROOT } from './httpClient'
import { FollowStatus } from '../domain/User.ts'
import { TweetDto } from './tweetDto.types.ts'

const API_BASE = `${API_ROOT}/v1/tweets`

function normalizeList(
    list: TweetDto[],
    defaultFollowStatus: FollowStatus
): Tweet[] {
  return list.map(raw => {
    return  TweetDto.from(raw).toTweet(defaultFollowStatus)
  })
}

/**
 * Fetch tweets for the current user's profile
 * GET /v1/tweets/profile
 */
export async function fetchProfileTweets(): Promise<Tweet[]> {
  const url = `${API_BASE}/profile`
  const data = await jsonRequest<TweetDto[]>(url)
  return normalizeList(data, FollowStatus.NOT_ALLOWED)
}

/**
 * Fetch tweets for the authenticated user's timeline
 * GET /v1/tweets/timeline
 */
export async function fetchTimelineTweets(): Promise<Tweet[]> {
  const url = `${API_BASE}/timeline`
  const data = await jsonRequest<TweetDto[]>(url)
  return normalizeList(data, FollowStatus.FOLLOWING)
}

/**
 * Convenience: standard keys your UI might use.
 */
export const TweetApi = {
  fetchProfileTweets,
  fetchTimelineTweets
}

export type { Tweet } from '../domain/Tweet'
