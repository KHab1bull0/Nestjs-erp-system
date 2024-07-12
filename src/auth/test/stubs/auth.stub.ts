import { User } from "src/user/entities/user.entity"


export const userstub = (): Partial<User> => {
    return {
        id: 1,
        name: "user1",
        email: "user@gmail.com",
        password: '1241',
        is_active: true
    };
};