import user from './user';
import employee from './employee';

type User = user.User;
var EmployeeService = employee.EmployeeService;
type IEmployeeService = employee.IEmployeeService;
var employeeService: IEmployeeService = new EmployeeService();

function byId(id: number): User {
    return employeeService.getById(id);
}

function byName(name: string): User {
    return employeeService.getByName(name);
}

function byRole(role: string): User[] {
    return employeeService.getByRole(role);
}

console.log(' *** by id ***')
console.log(byId(1));
console.log(byId(2));
console.log(byId(3));

console.log(' *** by name ***')
console.log(byName('bob'));
console.log(byName('alex'));

console.log(' *** by role ***')
console.log('role[dev]=' + JSON.stringify(byRole('dev')));
console.log('role[manager]=' + JSON.stringify(byRole('manager')));
