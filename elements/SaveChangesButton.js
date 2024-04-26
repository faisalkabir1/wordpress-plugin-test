
import { Selector, t } from 'testcafe';

class saveChanges {
    constructor() {saveChangesButton = Selector('button')
    .withAttribute('class', 'disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md cursor-pointer outline-none focus:outline-none hover:opacity-90 transition duration-75 bg-blue-500 text-white border border-blue-500');
    }

    async SaveChanges() {
       
        await t.click(this.saveChangesButton );
        await t.wait(3000);
    
    }
}

export default saveChanges;