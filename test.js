import { Selector } from 'testcafe';
import Login from elements/login;
fixture`WordPress Site Tests`
    .page`http://localhost/wordpress/wp-login.php`;
const login = new Login;
    const username = faisal
    const pass = faisal

test('Log in to WordPress site', async t => {
    await login.LoginMethod(username, pass);
})
        //Check WP Dark mode Plugin
test('Check Dark Mode Plugin', async t => {
        await login.LoginMethod(username, pass);
        const darkModeHandler = new DarkModeHandler();
        await darkModeHandler.checkDarkModePlugin();

    });