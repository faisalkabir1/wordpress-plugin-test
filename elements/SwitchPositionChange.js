import { Selector, t } from 'testcafe';

class SwitchPositionLeft {
    constructor() {
       this.leftBtn = Selector('span').withText('Left');
       this.Accessibility = Selector('a[data-v-571e2e25]')
       .withAttribute('href', '#/accessibility')
       
       .withText('Accessibility');
         }
    async SwitchPositiontoLeft() {
       await t.click(this.leftBtn);
       await t.wait(1000);
    }
}

export default SwitchPositionLeft;
