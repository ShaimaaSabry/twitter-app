import type {User} from "./User.ts";

export type Tweet = {
  id: string
  author: User
  content: string
  createdAt: string // ISO string
}
