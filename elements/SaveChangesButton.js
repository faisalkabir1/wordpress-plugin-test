
import { Selector, t } from 'testcafe';

class SaveChanges {
    constructor() {
        this.saveChangesBtn = Selector('button')
                                .withAttribute('class', 'disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md cursor-pointer outline-none focus:outline-none hover:opacity-90 transition duration-75 bg-blue-500 text-white border border-blue-500')
                              .withText('Save Changes');
    }

    async SaveChangesMethod() {
       
        await t.click(this.saveChangesBtn);
        await t.wait(1000);
    
    }
}

export default SaveChanges;