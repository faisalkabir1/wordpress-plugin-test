import { Selector, t } from 'testcafe';

class SwitchChange {
    constructor() {
        this.SwitchSetting = Selector('a[data-v-571e2e25]').withAttribute('href', '#/switch').withText('Switch Settings');
    }
    async SwitchChangeMethod() {
       
        await t.click(SwitchSetting);
        await t.wait(2000);
        await t.click(Selector('div').hasClass('bg-[#F9FAFB]'));
    
    }
}

export default SwitchChange;