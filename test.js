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
import EnablePageAnimation from './elements/EnableAnimation';
import SelectAnimation from './elements/SelectAnimation';
import DarkModeValidatorFrontend from './elements/ValidateFrontDarkMode';

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
    const enablePageAnimation = new EnablePageAnimation();
    const select = new SelectAnimation();
    const frontend = new DarkModeValidatorFrontend();

  

test('Test Suite According to scenario', async t =>{
        //login to your Wordpress site
        await login.loginToWordPress(username, password);
        //Check whether the “WP Dark Mode” Plugin is Active or not.
        //If Active, navigate to the WP Dark Mode & continue. Otherwise, Install the Plugin and Activate it.
        await darkModeHandler.DarkModeHandlerMethod();
        //await darkModePulgincheck.checkDarkModePlugin();
        await t.wait(2000);
        // Enable Backend Darkmode from Settings -> General Settings.
        await backendDarkMode.BEdarkModeMethod();
        await savechange.SaveChangesMethod();
        await t.click('#menu-dashboard');
        await t.click('#wp-admin-bar-wp-dark-mode-admin-bar-switch');
        await t.wait(2000);
        //Validate whether the Darkmode is working or not on the Admin Dashboard.
        darkmodevalidate.validateDarkMode();
       // Navigate to the WP Dark Mode.
        await darkModePulgincheck.checkDarkModePlugin();
       //From Settings -> Switch Settings - Change the “Floating Switch Style” from the default selections 
        await switchanging.SwitchChangeMethod();
        await savechange.SaveChangesMethod();
        //From Settings -> Switch Settings - Select Custom Switch size & Scale it to 220.
        await customswitchset.CustomSwitchChangeMethod();
        await savechange.SaveChangesMethod();
        //From Settings -> Switch Settings - Change the Floating Switch Position (Left Bottom).
        await switchpositiontoleft.SwitchPositiontoLeft()
        await savechange.SaveChangesMethod();
        //Disable Keyboard Shortcut from the Accessibility Settings.
        await keyboardShortcutChange.ChangeKeyboardShortcut();
        await t.wait(1000)
        await savechange.SaveChangesMethod();
        //From Settings -> Animation - Enable “Darkmode Toggle Animation” & change the “Animation Effect” from the default selections 
        await enablePageAnimation.ChangeAnimation();
        await savechange.SaveChangesMethod();
        await select.SelectAnimationMethod();
        await savechange.SaveChangesMethod();
        // Validate whether the Darkmode is working or not from the Frontend.
        await frontend.ValidateDarkModeFrontend();

}
)