import { Selector, t } from 'testcafe';

class DarkModeValidator {
    constructor() {
        // Selector for the element whose background color changes when dark mode is active
        this.darkModeIndicator = Selector('.dark-mode-indicator');
    }

    async validateDarkMode() {
        // Click on the menu item to activate dark mode
        await t.click('#menu-dashboard');

        // Wait for the dark mode indicator to be visible
        await t.expect(this.darkModeIndicator.exists).ok();

        // Get the computed background color of the dark mode indicator
        const bgColor = await this.darkModeIndicator.getStyleProperty('background-color');

        // Validate if the background color indicates dark mode is active
        if (bgColor === 'rgb(0, 0, 0)') {
            console.log('Dark mode is active!');
        } else {
            console.log('Dark mode is not active.');
        }
    }
}

export default DarkModeValidator;
