import { Selector } from 'testcafe';
import Login from './elements/login';
import DarkModePlugin from './elements/checkDarkModePlugin';
import DarkModeHandler from './elements/DarkModeHandler'; 
import BEdarkMode from './elements/BEdarkMode';
import SaveChanges from './elements/SaveChangesButton';
import DarkModeValidator from './elements/DarkModeValidate';
import SwitchChange from './elements/SwitchChange';
import CustomSwitch from './elements/CustomSwitchSize';
import SwitchPositionLeft from './elements/SwitchPositionChange';
import KeyboardShortcut from './elements/keyboardShortcut';


fixture`WordPress Site Tests on WP Dark Mode Plugin`
    .page`http://localhost/wordpress/wp-login.php`;

    const login = new Login;
    const username = 'faisal';
    const password = 'faisal';
    const darkModePulgincheck = new DarkModePlugin();
    const darkModeHandler = new DarkModeHandler();
    const backendDarkMode = new BEdarkMode();
    const savechange = new SaveChanges();
    const darkmodevalidate = new DarkModeValidator();
    const switchanging = new SwitchChange();
    const customswitchset = new CustomSwitch();
    const switchpositiontoleft = new SwitchPositionLeft();
    const keyboardShortcutChange = new KeyboardShortcut();

    test('Log in to WordPress site', async t => {
    await login.loginToWordPress(username, password);
    
    
})
        //Check WP Dark mode Plugin
test.only('Check Dark Mode Plugin', async t => {
        await login.loginToWordPress(username, password);
        
        await darkModePulgincheck.checkDarkModePlugin();
        await keyboardShortcutChange.ChangeKeyboardShortcut();

    });
test('Test Suite According to scenario', async t =>{
        await login.loginToWordPress(username, password);
     
        await darkModeHandler.DarkModeHandlerMethod();
        //await darkModePulgincheck.checkDarkModePlugin();
        await t.wait(1000);
       
        //Enable Backend Darkmode
        await backendDarkMode.BEdarkModeMethod();
        await savechange.SaveChangesMethod();
        await t.click('#menu-dashboard');
        await t.click('#wp-admin-bar-wp-dark-mode-admin-bar-switch');
        await t.wait(2000);
       // await t.eval(() => location.reload(true));
        //Validate whether the Darkmode is working or not on the Admin Dashboard.
        darkmodevalidate.validateDarkMode();
        await darkModePulgincheck.checkDarkModePlugin();
        const Customization = Selector('h4').withText('Customization');
        await t.click(Customization);
        await switchanging.SwitchChangeMethod();
        await savechange.SaveChangesMethod();
        //From Settings -> Switch Settings - Select Custom Switch size & Scale it to 220.
        await customswitchset.SwitchChangeMethod();
        await savechange.SaveChangesMethod();
        //From Settings -> Switch Settings - Change the Floating Switch Position (Left Bottom).
        await switchpositiontoleft.SwitchPositiontoLeft()
        await savechange.SaveChangesMethod();
        //Disable Keyboard Shortcut from the Accessibility Settings.


}
)