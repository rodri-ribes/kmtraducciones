import { User } from "../../../Form/core/entities/user.entity";

export interface Response {
    message?: string;
    token?: string;
    user?: User;
}

