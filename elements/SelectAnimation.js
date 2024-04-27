import { Selector, t } from 'testcafe';

class SelectAnimation {
    constructor() {
        this.Customization = Selector('h4').withText('Customization');
        this.SiteAnimation = Selector('a[data-v-571e2e25]').withAttribute('href', '#/animation').withText('Site Animation');
        this.DarkmodeToggle = Selector('span.w-5.h-5.flex.rounded-full.mt-0\\.5.ml-0\\.5.transition.duration-100.border-4.border-white.bg-slate-200');
         }
    async ChangeAnimation() {
       await t.click(this.Customization);
       await t.click(this.SiteAnimation);
       await t.click(this.DarkmodeToggle);

    }
}

export default SwitchPositionLeft;