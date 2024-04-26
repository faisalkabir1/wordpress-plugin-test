import { Selector } from 'testcafe';
import Login from './elements/login';
import DarkModePlugin from './elements/checkDarkModePlugin';
import DarkModeHandler from './elements/DarkModeHandler'; 
fixture`WordPress Site Tests`
    .page`http://localhost/wordpress/wp-login.php`;
    const login = new Login;
    const username = 'faisal';
    const password = 'faisal';
    const darkModePulgincheck = new DarkModePlugin();
    const darkModeHandler = new DarkModeHandler();
   
    
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
       // const darkModeLink = Selector('a').withText('Admin Panel Dark Mode')

   // await t.click(darkModeLink);
    
    //const switchButton = Selector('div.relative.w-10.h-full.rounded-full.transition.duration-100.bg-slate-200');

    // Click on the switch button to toggle its state
   // await t.click(switchButton);
    })