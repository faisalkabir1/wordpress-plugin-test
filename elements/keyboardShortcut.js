import { Selector, t } from 'testcafe';

class KeyboardShortcut {
    constructor() {
        this.Advanced = Selector('h4').withText('Advanced');
        this.Accessibility = Selector('a[data-v-571e2e25]')
        .withAttribute('href', '#/accessibility')
        .withText('Accessibility');
        this.togglemode = Selector('div.w-auto.h-6.flex.items-center.justify-center');
         }
    async ChangeKeyboardShortcut() {
       await t.click(this.Advanced);
       await t.wait(1000);
       await t.click(this.Accessibility);
       await t.click(this.togglemode);
    }
}

export default KeyboardShortcut;