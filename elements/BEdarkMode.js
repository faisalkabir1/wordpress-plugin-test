import { Selector, t } from 'testcafe';

class BEdarkMode {
    constructor() {
        this.darkModeLink = Selector('a').withText('Admin Panel Dark Mode')
        this.switchButton = Selector('div.relative.w-10.h-full.rounded-full.transition.duration-100.bg-slate-200');
    }

    async BEdarkModeMethod() {
        await t.click(darkModeLink);
    
    // Click on the switch button to toggle its state
    await t.click(switchButton);
    }
}

export default BEdarkMode;
