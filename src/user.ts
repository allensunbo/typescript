/// <reference path="../typings/lodash/lodash.d.ts"/>

import _ = require('lodash');

module user {

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
