import { Selector, t } from 'testcafe';

class Login {
    constructor() {
        this.typename = Selector("#user_login");
        this.typepassw = Selector("#user_pass");
        this.loginBtn = Selector("#wp-submit");
    }
    async loginToWordPress(username, password) {
        await t
            .typeText(this.typename, username)
            .typeText(this.typepassw, password)
            .click(this.loginBtn);
    }
}

export default Login;