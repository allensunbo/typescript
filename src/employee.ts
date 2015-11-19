import user from './user';
import _ = require('lodash');

type User = user.User;
type IUserService = user.IUserService;
var UserService = user.UserService;

module employee {

    var employees: Employee[] = [{
        id: 1,
        name: 'Alex',
        role: 'dev'
    }, {
        id: 2,
        name: 'Bob',
        role: 'manager'
    }, {
        id: 3,
        name: 'John',
        role: 'dev'
    }];

    export interface Employee extends User {
        role: string;
    }

    export interface IEmployeeService extends IUserService {
        getByRole(role: string): User[];
    }

    export class EmployeeService extends UserService implements IEmployeeService {
        getByRole(role: string): User[] {
            return _.filter(employees, {
                role: role
            });
        }
    }
}

export default employee;
