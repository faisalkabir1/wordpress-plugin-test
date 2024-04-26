import { Selector, t } from 'testcafe';

class SwitchChange {
    constructor() {
        this.SwitchSetting = Selector('a[data-v-571e2e25]').withAttribute('href', '#/switch').withText('Switch Settings');
        this.switch = Selector('div').hasClass('bg-[#F9FAFB]')
    }
    async SwitchChangeMethod() {
       
        await t.click(this.SwitchSetting);
        await t.wait(2000);
        await t.click(this.switch);
    
    }
}

export default SwitchChange;