import {FollowStatus, type User} from "../domain/User.ts";

export class UserDto {
    id: string;
    handle: string;
    avatarUrl?: string;
    name: string;

    constructor(data: {
        id: string;
        handle: string;
        name: string;
        avatarUrl?: string
    }) {
        this.id = data.id;
        this.handle = data.handle;
        this.name = data.name;
        this.avatarUrl = data.avatarUrl;
    }

    static from(raw: {
        id: string;
        handle: string;
        name: string;
        avatarUrl?: string
    }): UserDto {
        return new UserDto(raw);
    }

    toUser(defaultFollowStatus: FollowStatus): User {
        return {
            id: this.id,
            handle: this.handle,
            name: this.name,
            avatarUrl: this.avatarUrl,
            followStatus: defaultFollowStatus
        };
    }
}
