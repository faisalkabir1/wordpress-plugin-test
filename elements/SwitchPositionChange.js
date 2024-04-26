import { Selector, t } from 'testcafe';

class SwitchPositionLeft {
    constructor() {
       this.leftBtn = Selector('span').withText('Left');
         }
    async SwitchChangeMethod() {
       await t.click(this.leftBtn);
       await t.wait(1000);
    }
}

export default SwitchPositionLeft;
