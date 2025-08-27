import type { User } from '../domain/User'
import { FollowStatus } from '../domain/User'

export const mockUsers: User[] = [
  { id: '1', handle: 'ada', avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4', name: 'Ada Lovelace', followStatus: FollowStatus.NOT_FOLLOWING },
  { id: '2', handle: 'aturing', avatarUrl: 'https://i.pravatar.cc/100?img=5', name: 'Alan Turing', followStatus: FollowStatus.NOT_FOLLOWING },
  { id: '3', handle: 'ghopper', avatarUrl: 'https://i.pravatar.cc/100?img=15', name: 'Grace Hopper', followStatus: FollowStatus.NOT_FOLLOWING }
]
