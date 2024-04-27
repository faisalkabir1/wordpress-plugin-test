import { Selector, t } from 'testcafe';

class KeyboardShortcut {
    constructor() {
        this.Advanced = Selector('h4').withText('Advanced');
        this.Accessibility = Selector('a[data-v-571e2e25]')
        .withAttribute('href', '#/accessibility')
        .withText('Accessibility');
        this.togglemode = Selector('.w-5.h-5.flex.rounded-full.mt-0\\.5.ml-0\\.5.transition.duration-100.translate-x-4.border-none.bg-white');
         }
    async ChangeKeyboardShortcut() {
       await t.click(this.Advanced);
       await t.wait(1000);
       await t.click(this.Accessibility);
       await t.click(this.togglemode);
    }
}

export default KeyboardShortcut;