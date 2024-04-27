import { Selector, t } from 'testcafe';

class SelectAnimation {
    constructor() {
        this.textNames = [
            'Fade In',
            'Pulse',
            'Flip',
            'Roll',
            'Slide Left',
            'Slide Up',
            'Slide Right',
            'Slide Down'
        ];
        this.randomIndex = Math.floor(Math.random() * this.textNames.length);
        this.select = Selector('span').withText(this.textNames[this.randomIndex]);
    }

    async SelectAnimationMethod() {
        try {
            await t.click(this.select);
            console.log('Clicked on', this.textNames[this.randomIndex]);
        } catch (error) {
            console.log('Element not found or already selected, Selecting another one.');
            // Try again with a new random index
            this.randomIndex = Math.floor(Math.random() * this.textNames.length);
            this.select = Selector('span').withText(this.textNames[this.randomIndex]);
            await this.SelectAnimationMethod();
        }
    }
}

export default SelectAnimation;
