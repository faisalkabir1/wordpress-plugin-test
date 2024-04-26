Selector('div.cursor-pointer.flex.items-center.gap-2.py-2.transition.duration-75.px-3.5.text-base.font-normal.leading-6.rounded-lg.bg-gray-100.hover:bg-gray-200');
import { Selector, t } from 'testcafe';

class CustomSwitch {
    constructor() {
       this.customswitch = Selector('div.cursor-pointer.flex.items-center.gap-2.py-2.transition.duration-75.px-3_5.text-base.font-normal.leading-6.rounded-lg.bg-gray-100.hover\\:bg-gray-200');
        this.inputrange = Selector('#ek7fjj12e');
         }
    async SwitchChangeMethod() {
       
        await t.click(this.customswitch);
        await t.typeText(this.inputrange,'200');
       
        
    
    }
}

export default CustomSwitch;
