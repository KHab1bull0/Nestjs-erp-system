import { userstub } from "../test/stubs/auth.service.spec";


export const UserService = jest.fn().mockReturnValue({
    createUser: jest.fn().mockResolvedValue(userstub())
})