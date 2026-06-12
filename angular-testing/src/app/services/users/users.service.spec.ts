import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { User } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('all', () => {
    it('should return all users', () => {
      let response: Array<User> = [];

      service.all().subscribe(res => {
        response = res;
      });

      expect(response.length).toBe(4);
      expect(response).toEqual(service.users);
    });
  });

  describe('findOne', () => {
    it('should return a single user', () => {
      let response: User | undefined;

      service.findOne('2').subscribe(res => {
        response = res;
      });

      expect(response).toEqual(service.users[1]);
    });

    it('should return undefined for an unknown id', () => {
      let response: User | undefined;

      service.findOne('999').subscribe(res => {
        response = res;
      });

      expect(response).toBeUndefined();
    });
  });
});