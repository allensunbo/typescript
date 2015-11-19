import user from './user';

type User = user.User;
var UserService = user.UserService;
var userService = new UserService();

function byId(id: number): User {
    return userService.getById(id);
}

function byName(name: string): User {
    return userService.getByName(name);
}

console.log(byId(1));
console.log(byId(2));
console.log(byId(3));

console.log(byName('bob'));
