import { Selector } from 'testcafe';
import Login from './elements/login';
import DarkModePlugin from './elements/checkDarkModePlugin';
import DarkModeHandler from './elements/DarkModeHandler'; 
import BEdarkMode from './elements/BEdarkMode';
import SaveChanges from './elements/SaveChangesButton';
import DarkModeValidator from './elements/DarkModeValidate';

fixture`WordPress Site Tests`
    .page`http://localhost/wordpress/wp-login.php`;
    const login = new Login;
    const username = 'faisal';
    const password = 'faisal';
    const darkModePulgincheck = new DarkModePlugin();
    const darkModeHandler = new DarkModeHandler();
   const backendDarkMode = new BEdarkMode();
    const savechange = new SaveChanges();
    const darkmodevalidate = new DarkModeValidator()
    test('Log in to WordPress site', async t => {
    await login.loginToWordPress(username, password);
    
    
})
        //Check WP Dark mode Plugin
test('Check Dark Mode Plugin', async t => {
        await login.loginToWordPress(username, password);
        
        await darkModePulgincheck.checkDarkModePlugin();

    });
test.only('Test Suite According to scenario', async t =>{
        await login.loginToWordPress(username, password);
        await t.wait(2000);
     
        await darkModeHandler.DarkModeHandlerMethod();
        //await darkModePulgincheck.checkDarkModePlugin();
        await t.wait(1000);
       
        //Enable Backend Darkmode
        await backendDarkMode.BEdarkModeMethod();
        await t.wait(2000);
        await savechange.SaveChangesMethod();
        await t.click('#menu-dashboard');
        await t.click('#wp-admin-bar-wp-dark-mode-admin-bar-switch');
        await t.wait(2000);
       // await t.eval(() => location.reload(true));
        //Validate whether the Darkmode is working or not on the Admin Dashboard.
        darkmodevalidate.validateDarkMode();
    
}
)