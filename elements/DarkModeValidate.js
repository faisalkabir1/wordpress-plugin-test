import { Selector, t } from 'testcafe';

class DarkModeValidator {
    constructor() {
       
        this.body = Selector('body');
    

    }

    async validateDarkMode() {


        // Get the computed background color of the body element
        const bgColor = await this.body.getStyleProperty('background-color');
    
        // Log the background color for debugging
        console.log('Background Color:', bgColor);
    
        // Validate if the background color is black
        if (bgColor === 'rgb(36, 37, 37)') {
            console.log('Yeah!Admin Dashboard Dark Mode Activated');
        } else {
            console.log('Background color is not dark.');
        }
    }
}

export default DarkModeValidator;
