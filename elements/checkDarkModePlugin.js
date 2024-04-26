import { Selector, t } from 'testcafe';

class DarkModePlugin {
    constructor() {
        this.darkModeMenuItem = Selector('#toplevel_page_wp-dark-mode');
    }

    async checkDarkModePlugin() {
        if (await this.darkModeMenuItem.exists) {
            await t.click(this.darkModeMenuItem);
            await t.wait(1000);
        }
    }
}

export default DarkModePlugin;
