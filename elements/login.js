import { Selector, t } from 'testcafe';

class Login {
    constructor() {
        this.login = Selector("#login2");
        this.typename = Selector("#loginusername");
        this.typepassw = Selector("#loginpassword");
        this.loginBtn = Selector("button").withText("Log in");
    }
    async loginToWordPress(username, password) {
        await t
            .click(this.login)
            .typeText(this.typename, username)
            .typeText(this.typepassw, password)
            .click(this.loginBtn);
    }
}

export default Login;