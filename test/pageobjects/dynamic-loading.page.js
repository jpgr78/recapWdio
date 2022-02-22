const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */

class dynamicPage extends Page {

    /**
     * Your selectors go here
     */


     get star() {
        return $('.example #start');
    }
     get startButton() {
        return $('.example #start button');
    }

    get h4() {
        return $('#finish h4');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

     async start() {
        await this.startButton.click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('dynamic_loading/1');
    }
}

module.exports = new dynamicPage();