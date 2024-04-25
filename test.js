import { Selector } from 'testcafe';

fixture`WordPress Site Tests`
    .page`http://localhost/wordpress/wp-login.php`;

test('Log in to WordPress site', async t => {
    await t
        .typeText('#user_login', 'faisal')
        .typeText('#user_pass', 'faisal')
        .click('#wp-submit')
        
        //Check WP Dark mode Plugin
        const darkModeMenuItem = Selector('#toplevel_page_wp-dark-mode');

        if (await darkModeMenuItem.exists) {
            // If the dark mode menu item exists, click on it
            await t.click(darkModeMenuItem)

            await t.wait(3000);
        } else {
            // If the dark mode menu item doesn't exist, click on the "plugins" and then activate wp dark mode
            await t
                .click('#menu-plugins')
                .click('#activate-wp-dark-mode');
        }
    
        // Proceed with the rest of the test
    });