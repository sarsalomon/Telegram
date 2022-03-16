import {makeAutoObservable} from 'mobx';

export default class User{
    constructor() {
        this._isAuth = false;
        this._user = {};
        this._userinfo = {};
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._user = user;
    }

    setUserInfo(userinfo) {
        this._userinfo = userinfo
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }

    get userinfo() {
        return this._userinfo
    }

}