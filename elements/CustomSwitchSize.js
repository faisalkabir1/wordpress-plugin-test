Selector('div.cursor-pointer.flex.items-center.gap-2.py-2.transition.duration-75.px-3.5.text-base.font-normal.leading-6.rounded-lg.bg-gray-100.hover:bg-gray-200');
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
        await t.wait(1000);
    }
}

export default CustomSwitch;
