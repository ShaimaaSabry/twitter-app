// Follow status constants (enum-like) kept as a const object to avoid emitted enum code
export const FollowStatus = {
    FOLLOWING: 'FOLLOWING',
    NOT_FOLLOWING: 'NOT_FOLLOWING',
    REQUESTED: 'REQUESTED',
    NOT_ALLOWED: 'NOT_ALLOWED'
} as const

export type FollowStatus = typeof FollowStatus[keyof typeof FollowStatus]

export type User = {
    id: string
    handle: string
    avatarUrl?: string
    name: string
    followStatus: FollowStatus
}
