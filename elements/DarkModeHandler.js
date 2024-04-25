import { Selector, t } from 'testcafe';

class DarkModeHandler {
    constructor() {
        this.darkModeMenuItem = Selector('#toplevel_page_wp-dark-mode');
}
async DarkModeHandlerMethod(){
    if (await this.darkModeMenuItem.exists) {
        await t.click(this.darkModeMenuItem);
        await t.wait(3000); 
    } else {
        await t
            .click('#menu-plugins')
            .click('#activate-wp-dark-mode');
    }}
}
export default DarkModeHandler;