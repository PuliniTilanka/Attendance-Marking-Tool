import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeService } from './employee.service';
import {getRepositoryToken} from "@nestjs/typeorm";
import {Employee} from "./employee";

describe('EmployeeService', () => {
  let service: EmployeeService;

  const mockUsersRepository = {
    create: jest.fn().mockImplementation(dto => dto),
    save: jest
        .fn()
        .mockImplementation((employee) =>
            Promise.resolve({empId: Date.now(), ...employee}))
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeService,
        {
          provide: getRepositoryToken(Employee),
          useValue: mockUsersRepository
        },
      ],
    }).compile();

    service = module.get<EmployeeService>(EmployeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new user record and return that', async () => {
    expect(await service.create({empId:expect.any(Number), name: 'Harini', email:'harini@gmail.com', password: 'Harini#888', designation: 'Quality Assurance', type: 'Permenant', phoneNumber:778695423})).toEqual({
      empId: expect.any(Number),
      name: 'Harini',
      email:'harini@gmail.com',
      password: 'Harini#888',
      designation: 'Quality Assurance',
      type: 'Permenant',
      phoneNumber:778695423,
    });
  });
});
