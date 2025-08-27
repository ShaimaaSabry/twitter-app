import type { User } from '../domain/User.ts'
import { FollowStatus } from '../domain/User.ts'
import { jsonRequest, API_ROOT } from './httpClient'
import { UserDto } from './user.types.ts'

const USER_API_BASE = `${API_ROOT}/v1/users`

/**
 * Fetch the current user's profile
 */
export async function fetchUserProfile(): Promise<User> {
  const url = `${USER_API_BASE}/profile`
  const raw = await jsonRequest<UserDto>(url)
  const dto = UserDto.from(raw)
  return dto.toUser(FollowStatus.NOT_ALLOWED)
}

export const UserApi = { fetchUserProfile }

export type { User }
