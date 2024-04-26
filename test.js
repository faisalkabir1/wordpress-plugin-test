import { Selector } from 'testcafe';
import Login from './elements/login';
import DarkModePlugin from './elements/checkDarkModePlugin';
import DarkModeHandler from './elements/DarkModeHandler'; 
import BEdarkMode from './elements/BEdarkMode';


fixture`WordPress Site Tests`
    .page`http://localhost/wordpress/wp-login.php`;
    const login = new Login;
    const username = 'faisal';
    const password = 'faisal';
    const darkModePulgincheck = new DarkModePlugin();
    const darkModeHandler = new DarkModeHandler();
   const backendDarkMode = new BEdarkMode();
    
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
        await t.wait(3000);
     
        await darkModeHandler.DarkModeHandlerMethod();
        //await darkModePulgincheck.checkDarkModePlugin();
        await t.wait(3000);
       
        //Enable Backend Darkmode
        await backendDarkMode.BEdarkModeMethod();
    
    })