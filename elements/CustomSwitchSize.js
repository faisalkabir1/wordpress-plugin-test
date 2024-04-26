import { Selector, t } from 'testcafe';

class CustomSwitch {
    constructor() {
       this.customswitch =  Selector('span').withText('Custom');
       this.inputrange = Selector('input[placeholder="0"]');
         }
    async SwitchChangeMethod() {
       await t.wait(1000);
        await t.click(this.customswitch);
        await t.typeText(this.inputrange,'200', { replace: true });
        await t.wait(2000);
    }
}

export default CustomSwitch;