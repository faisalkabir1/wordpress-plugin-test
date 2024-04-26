import { Selector } from 'testcafe';
import Login from './elements/login';
import DarkModePlugin from './elements/checkDarkModePlugin';
import DarkModeHandler from './elements/DarkModeHandler'; 
import BEdarkMode from './elements/BEdarkMode';
import saveChanges from './elements/SaveChangesButton';
import saveChanges from './elements/SaveChangesButton';

fixture`WordPress Site Tests`
    .page`http://localhost/wordpress/wp-login.php`;
    const login = new Login;
    const username = 'faisal';
    const password = 'faisal';
    const darkModePulgincheck = new DarkModePlugin();
    const darkModeHandler = new DarkModeHandler();
   const backendDarkMode = new BEdarkMode();
    const SaveChanges = new saveChanges();
    test('Log in to WordPress site', async t => {
    await login.loginToWordPress(username, password);
})
        //Check WP Dark mode Plugin
test('Check Dark Mode Plugin', async t => {
        await login.loginToWordPress(username, password);
        
        await darkModePulgincheck.checkDarkModePlugin();

    });
test.only('If Active, navigate to the WP Dark Mode & continue. Otherwise, Install the Plugin and Activate it', async t =>{
        await login.loginToWordPress(username, password);
        await t.wait(2000);
     
        await darkModeHandler.DarkModeHandlerMethod();
        //await darkModePulgincheck.checkDarkModePlugin();
        await t.wait(1000);
       
        //Enable Backend Darkmode
        await backendDarkMode.BEdarkModeMethod();
        await t.wait(2000);
        await SaveChanges.SaveChanges();
    })