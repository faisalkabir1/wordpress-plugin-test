import { Selector, t } from 'testcafe';

class DarkModeHandler {
    constructor() {
        this.darkModeMenuItem = Selector('#toplevel_page_wp-dark-mode');
        this.searchBox = Selector('#plugin-search-input');
        this.searchBox2 = Selector('#search-plugins');
        this.activebtn = Selector('##activate-wp-dark-mode');
        this.AddPluginBtn = Selector('a').withExactText('Add New Plugin');
        this.noPluginsFoundMessage = Selector('td.colspanchange').withText('No plugins found for: wp dark mode');
    }

    async DarkModeHandlerMethod() {
        if (await this.darkModeMenuItem.exists) {
            await t.click(this.darkModeMenuItem);
            await t.wait(3000); 
        } else {

            await t.click('#menu-plugins');
            
            // Search for WP Dark Mode plugin
            await t.typeText(this.searchBox, 'wp dark mode');
            await t.wait(3000);
            if (await this.noPluginsFoundMessage.exists) {
                // If no plugins found, click on Add Plugin
                await t.click(this.AddPluginBtn);
                // Search again for WP Dark Mode plugin
                await t.typeText(this.searchBox2, 'wp dark mode');
                //await t.click(this.searchButton);
            }
            else{// Activate WP Dark Mode plugin
                console.log('Plugin found. Skipping next test.');
                //await t.click(this.activebtn);

            }
            
        }
    }
}

export default DarkModeHandler;
