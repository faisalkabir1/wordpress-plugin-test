import { Selector, t } from 'testcafe';

class KeyboardShortcut {
    constructor() {
        this.Advanced = Selector('a')
        .withAttribute('data-v-571e2e25')
        .withAttribute('href', '#/accessibility')
        .withAttribute('class', 'router-link-active router-link-exact-active nav-item-child focus:outline-none active')
        .withText('Accessibility');
         }
    async SwitchPositiontoLeft() {
       await t.click(this.Advanced);
       await t.wait(1000);
    }
}

export default KeyboardShortcut;