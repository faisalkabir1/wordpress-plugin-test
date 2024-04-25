import { Selector } from 'testcafe';
import Login from elements/login;
fixture`WordPress Site Tests`
    .page`http://localhost/wordpress/wp-login.php`;
const login = new Login;
    const username = faisal
    const pass = faisal

test('Log in to WordPress site', async t => {
    await login.LoginMethod(username, pass);
        
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