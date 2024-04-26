import { Selector, t } from 'testcafe';

class DarkModeValidator {
    constructor() {
       
        this.dashboard = Selector('#menu-dashboard');
    }

    async validateDarkMode() {

        await t.click(this.dashboard);

        // Get the computed background color of the dark mode indicator
        const bgColor = await this.dashboard.getStyleProperty('background-color');

        // Validate if the background color indicates dark mode is active
        if (bgColor === 'rgb(0, 0, 0)') {
            console.log('Dark mode is active!');
        } else {
            console.log('Dark mode is not active.');
        }
    }
}

export default DarkModeValidator;
