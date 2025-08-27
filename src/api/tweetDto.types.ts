import {FollowStatus} from "../domain/User.ts";
import type {Tweet} from "../domain/Tweet.ts";
import {UserDto} from "./user.types.ts";

export class TweetDto {
    id: string;
    author: UserDto;
    content: string;
    createdAt: string; // ISO string

    constructor(data: { id: string; author: UserDto; content: string; createdAt: string }) {
        this.id = data.id;
        this.author = data.author;
        this.content = data.content;
        this.createdAt = data.createdAt;
    }

    static from(raw: {
        id: string;
        author: { id: string; handle: string; name: string; avatarUrl?: string };
        content: string;
        createdAt: string;
    }): TweetDto {
        const authorDto = UserDto.from(raw.author);
        return new TweetDto({
            id: raw.id,
            author: authorDto,
            content: raw.content,
            createdAt: raw.createdAt
        });
    }

    toTweet(defaultFollowStatus: FollowStatus): Tweet {
        return {
            id: this.id,
            author: this.author.toUser(defaultFollowStatus),
            content: this.content,
            createdAt: this.createdAt,
        };
    }
}