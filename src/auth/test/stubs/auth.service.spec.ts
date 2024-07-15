import { JwtService } from "@nestjs/jwt";
import { getModelToken } from "@nestjs/sequelize";
import { Test, TestingModule } from "@nestjs/testing";
import { User } from "src/user/entities/user.entity"
import { UserService } from "src/user/user.service";


export const userstub = (): Partial<User> => {
    return {
        id: 1,
        name: "user1",
        email: "user@gmail.com",
        password: '1241',
        is_active: true
    };
};


describe('Users Service', () => {
    let userService: UserService

    const mockUsersRepository = {
        create: jest.fn().mockImplementation(userstub),
        findOne: jest.fn().mockImplementation(userstub),
        findAll: jest.fn().mockImplementation(userstub),
    }

    beforeAll(async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [
                UserService,
                JwtService,
                {
                    provide: getModelToken(User),
                    useValue: mockUsersRepository,
                }
            ],
        }).compile();

        userService = moduleRef.get<UserService>(UserService);
    })
})

