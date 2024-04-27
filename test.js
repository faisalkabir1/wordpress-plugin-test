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
require('dotenv').config();

fixture`WordPress Site Tests on WP Dark Mode Plugin`
    .page`http://localhost/wordpress/wp-login.php`;

const login = new Login();
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const darkModePluginCheck = new DarkModePlugin();
const darkModeHandler = new DarkModeHandler();
const backendDarkMode = new BEdarkMode();
const saveChange = new SaveChanges();
const darkModeValidate = new DarkModeValidator();
const switchChanging = new SwitchChange();
const customSwitchSet = new CustomSwitch();
const switchPositionToLeft = new SwitchPositionLeft();
const keyboardShortcutChange = new KeyboardShortcut();
const enablePageAnimation = new EnablePageAnimation();
const selectAnimation = new SelectAnimation();
const frontend = new DarkModeValidatorFrontend();

test('Test Suite According to scenario', async t => {
    // Login to your WordPress site
    await login.loginToWordPress(username, password);
    
    // Check whether the “WP Dark Mode” Plugin is Active or not.
    // If Active, navigate to the WP Dark Mode & continue. Otherwise, Install the Plugin and Activate it.
    await darkModeHandler.DarkModeHandlerMethod();
    await t.wait(2000);
    
    // Enable Backend Darkmode from Settings -> General Settings.
    await backendDarkMode.BEdarkModeMethod();
    await saveChange.SaveChangesMethod();
    
    await t.click('#menu-dashboard');
    await t.click('#wp-admin-bar-wp-dark-mode-admin-bar-switch');
    await t.wait(2000);
    
    // Validate whether the Darkmode is working or not on the Admin Dashboard.
    await darkModeValidate.validateDarkMode();
    
    // Navigate to the WP Dark Mode.
    await darkModePluginCheck.checkDarkModePlugin();
    
    // From Settings -> Switch Settings - Change the “Floating Switch Style” from the default selections.
    await switchChanging.SwitchChangeMethod();
    await saveChange.SaveChangesMethod();
    
    // From Settings -> Switch Settings - Select Custom Switch size & Scale it to 220.
    await customSwitchSet.CustomSwitchChangeMethod();
    await saveChange.SaveChangesMethod();
    
    // From Settings -> Switch Settings - Change the Floating Switch Position (Left Bottom).
    await switchPositionToLeft.SwitchPositiontoLeft();
    await saveChange.SaveChangesMethod();
    
    // Disable Keyboard Shortcut from the Accessibility Settings.
    await keyboardShortcutChange.ChangeKeyboardShortcut();
    await t.wait(1000)
    await saveChange.SaveChangesMethod();
    
    // From Settings -> Animation - Enable “Darkmode Toggle Animation” & change the “Animation Effect” from the default selections.
    await enablePageAnimation.ChangeAnimation();
    await saveChange.SaveChangesMethod();
    await selectAnimation.SelectAnimationMethod();
    await saveChange.SaveChangesMethod();
    
    // Validate whether the Darkmode is working or not from the Frontend.
    await frontend.ValidateDarkModeFrontend();
});
