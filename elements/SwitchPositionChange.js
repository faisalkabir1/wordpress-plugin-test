import { Selector, t } from 'testcafe';

class SwitchPositionLeft {
    constructor() {
       this.leftBtn = Selector('span').withText('Left');
         }
    async SwitchPositiontoLeft() {
       await t.click(this.leftBtn);
       await t.wait(1000);
    }
}

export default SwitchPositionLeft;
