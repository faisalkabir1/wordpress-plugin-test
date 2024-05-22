# wordpress-plugin-test
This repository contains the test suite for the WP Dark Mode plugin using TestCafe.

## WP Dark Mode Plugin Test Suite

WP Dark Mode is a WordPress plugin that enables a dark mode feature for the WordPress dashboard.


## Test Suite Overview:
This test suite utilizes TestCafe, a popular end-to-end testing framework, to automate testing for the WP Dark Mode plugin. It covers various scenarios, including enabling and disabling dark mode, validating UI elements, and ensuring proper functionality across different screen sizes.

## Features:
End-to-End Testing: Automate the testing process to ensure the reliability and functionality of the WP Dark Mode plugin.
Cross-Browser Compatibility: Test across multiple browsers to guarantee consistent behavior and performance.
Responsive Design Testing: Verify that the plugin functions correctly across different devices and screen resolutions.
Customizable Test Cases: Easily extend and customize test cases to accommodate changes in the plugin's features and UI.

## Getting Started:
1. Clone the Repository: Clone this repository to your local machine.
2. Install Dependencies: Run 'npm install' to install the required dependencies.
3. Configure Test Environment: Update the (.env) file to specify the target URL of your wordpress site and login credentials
4. Update the TestCafe configuration: (package.json) to specify the browser configurations and others.
5. Run Tests: Execute the tests using the command 'npm run test' start the test suite.

* I have used wordpress site in my localhost by using XAMPP

## Scenarios:

1. Log in to your WordPress site.
2. Check whether the “WP Dark Mode” Plugin is Active or not.
3. If Active, navigate to the WP Dark Mode & continue. Otherwise, Install the Plugin and Activate it.
4. Enable Backend Darkmode from Settings -> General Settings.
5. Validate whether the Darkmode is working or not on the Admin Dashboard.
6. Navigate to the WP Dark Mode.
7. From Settings -> Switch Settings - Change the “Floating Switch Style” from the default selections (Select any one from the available options, except the default selected one).
8. From Settings -> Switch Settings - Select Custom Switch size & Scale it to 220.
9. From Settings -> Switch Settings - Change the Floating Switch Position (Left Bottom).
10. Disable Keyboard Shortcut from the Accessibility Settings.
11. From Settings -> Animation - Enable “Darkmode Toggle Animation” & change the “Animation Effect” from the default selections (Select any one from the available options, except the default selected one).
12.  Validate whether the Darkmode is working or not from the Frontend.
* Save the settings every time after changing it.
## Video:
https://github.com/faisalkabir1/wordpress-plugin-test/assets/103810587/a1aa02a2-4b48-4e76-89ec-fb6c29647f72
