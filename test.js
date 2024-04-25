import { Selector } from 'testcafe';
import Login from elements/login;
import DarkModePlugin from './elements/checkDarkModePlugin';
import DarkModeHandler from './elements/DarkModeHandler'; 
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
        const darkModePulgincheck = new DarkModePlugin();
        await darkModePulgincheck.checkDarkModePlugin();

    });
    test ('If Active, navigate to the WP Dark Mode & continue. Otherwise, Install the Plugin and Activate it', async t =>{
        await login.LoginMethod(username, pass);
        const darkModeHandler = new DarkModeHandler();
        await darkModeHandler.checkDarkModePlugin();
    })