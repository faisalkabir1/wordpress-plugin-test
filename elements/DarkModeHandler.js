import { Selector, t } from 'testcafe';

class DarkModeHandler {
    constructor() {
        this.darkModeMenuItem = Selector('#toplevel_page_wp-dark-mode');
        this.searchBox = Selector('#plugin-search-input');
        this.searchBox2 = Selector('#search-plugins');
        this.activebtn = Selector('#activate-wp-dark-mode');
        this.AddPluginBtn = Selector('a').withExactText('Add New Plugin');
        this.noPluginsFoundMessage = Selector('td.colspanchange').withText('No plugins found for: wp dark mode');
        this.wpDarkModeInstallButton = Selector('a.install-now').withAttribute('data-slug', 'wp-dark-mode');
       this.activeBtnDwnld = Selector('a.button.button-primary.activate-now')
    .withAttribute('data-slug', 'wp-dark-mode')
    .withAttribute('data-plugin', 'wp-dark-mode/plugin.php')
    .withText('Activate');
    }

    async DarkModeHandlerMethod() {
        if (await this.darkModeMenuItem.exists) {
            await t.click(this.darkModeMenuItem);
            await t.wait(1000); 
        } else {

            await t.click('#menu-plugins');
            
            // Search for WP Dark Mode plugin
            await t.typeText(this.searchBox, 'wp dark mode');
            await t.wait(2000);
            if (await this.noPluginsFoundMessage.exists) {
                // If no plugins found, click on Add Plugin
                await t.click(this.AddPluginBtn);
                // Search in plugin store for WP Dark Mode plugin
                await t.typeText(this.searchBox2, 'wp dark mode');
                //install the plugin
                await t.click(this.wpDarkModeInstallButton);
                
                await t.wait(40000);
                //await t.click(this.activeBtnDwnld);
                //await t.eval(() => location.reload(true));
                await t.setNativeDialogHandler(() => true);
                await t.click('#menu-plugins');
                await t.click(this.activebtn);
                await t.click(this.darkModeMenuItem)
            }
            else{// Activate WP Dark Mode plugin
                console.log('Plugin found. Skipping next test.');
                await t.click(this.activebtn);
            }
            
        }
    }
}

export default DarkModeHandler;
