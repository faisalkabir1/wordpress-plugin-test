import { Selector } from 'testcafe';

fixture`WordPress Site Tests`
    .page`http://localhost/wordpress/wp-login.php`;

test('Log in to WordPress site', async t => {
    await t
        .typeText('#user_login', 'faisal')
        .typeText('#user_pass', 'faisal')
        .click('#wp-submit')})