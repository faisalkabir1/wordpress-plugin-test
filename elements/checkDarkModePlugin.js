import { Selector, t } from 'testcafe';
class DarkModePlugin {
    constructor() {
        this.darkModeMenuItem = Selector('#toplevel_page_wp-dark-mode');
}

async checkDarkModePlugin() {
    await this.darkModeMenuItem.exists; {
        await t.click(this.darkModeMenuItem);
        await t.wait(3000); // Adjust the wait time as needed
    }
}
}
export default DarkModePlugin;