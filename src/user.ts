/// <reference path="../typings/tsd.d.ts" />

import _ = require('lodash');

module user {
    var users: User[] = [{
        id: 1,
        name: 'Alex'
    }, {
        id: 2,
        name: 'Bob'
    }, {
        id: 3,
        name: 'John'
    }];

    export interface User {
        id: number;
        name: string;
    }

    export interface IUserService {
        getById(id: number): User;
        getByName(name: string): User;
    }

    export class UserService implements IUserService {
        getById(id: number): User {
            return _.find(users, function(u) {
                return u.id === id;
            });
        }

        getByName(name: string): User {
            return _.find(users, function(u) {
                return u.name.toLowerCase() === name.toLowerCase();
            });
        }
    }
}
export default user;
