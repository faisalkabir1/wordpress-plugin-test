import { Selector, t } from 'testcafe';

class SwitchChange {
    constructor() {
        this.SwitchSetting = Selector('a[data-v-571e2e25]').withAttribute('href', '#/switch').withText('Switch Settings');
        this.switch = Selector('div[data-v-039c3d41][data-size="1"].wp-dark-mode-ignore.wp-dark-mode-switch.ignore.dummy.wp-dark-mode-switch-2.dummy');
        this.Customization = Selector('h4').withText('Customization');
    }
    async SwitchChangeMethod() {
        await t.click(this.Customization);
        await t.click(this.SwitchSetting);
       
        await t.click(this.switch);
        await t.wait(1000);
    
    }
}

export default SwitchChange;