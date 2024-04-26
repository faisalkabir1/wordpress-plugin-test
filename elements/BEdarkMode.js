import { Selector, t } from 'testcafe';

class BEdarkMode {
    constructor() {
        this.adminDarkMode = Selector('a').withText('Admin Panel Dark Mode');
        this.settings = Selector('a').withText('Settings');
        this.switchButton = Selector('div.relative.w-10.h-full.rounded-full.transition.duration-100.bg-slate-200');
    }

    async BEdarkModeMethod() {
       await t.click(this.settings);
        await t.click(this.adminDarkMode );
        await t.wait(2000);
    // Click on the switch button to toggle its state
        await t.click(this.switchButton);
    }
}

export default BEdarkMode;
