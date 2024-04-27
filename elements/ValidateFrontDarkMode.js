import { Selector, t } from 'testcafe';

class DarkModeValidator {
    constructor() {
       this.frontend = Selector('#wp-admin-bar-site-name');
        this.body = Selector('body');
    

    }

    async validateDarkMode() {
        await t.click(this.frontend);
        await t.wait(3000);

        // Get the computed background color of the body element
        const bgColor = await this.body.getStyleProperty('background-color');
    
        // Log the background color for debugging
        console.log('Background Color:', bgColor);
    
        // Validate if the background color is black
        if (bgColor === 'rgb(36, 37, 37)') {
            console.log('Yeah! Frontend Dark Mode Activated');
        } else {
            console.log('Frontend Background color is not dark.');
        }
    }
}

export default DarkModeValidator;
