import { Selector, t } from 'testcafe';

class KeyboardShortcut {
    constructor() {
        this.Advanced = Selector('h4').withText('Advanced');
         }
    async ChangeKeyboardShortcut() {
       await t.click(this.Advanced);
       await t.wait(1000);
    }
}

export default KeyboardShortcut;