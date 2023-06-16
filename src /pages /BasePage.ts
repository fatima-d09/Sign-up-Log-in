import { WaitUntilOptions } from 'webdriverio';

export default class BasePage {
    open(path: string): void {
        browser.url(path);
    }

    protected softWaitUntil(condition: () => boolean, waitForConditionTime = 15000): boolean {
        try {
            browser.waitUntil(condition, { timeout: waitForConditionTime });
        } catch (e) {
            return false;
        }

        return true;
    }

    protected clearValue(element: WebdriverIO.Element): void {
        element.waitForDisplayed();
        element.doubleClick();
        browser.keys('Delete');
        
        if (element.getValue() != "") {
            element.click();
            browser.keys([ '\ue009', 'a' ]);    // Ctrl+A
            element.addValue('');
        }
    }

    // public waitUntilOneOf(conditions: Array<() => boolean>, options?: WaitUntilOptions): boolean {
    //     return browser.waitUntil(() => {
    //         for (const condition of conditions) {
    //             try {
    //                 if(condition()) {
    //                     return true;
    //                 }
    //             } catch {
    //                 continue;
    //             }
    //         }

    //         return false;
    //     }, options);
    // }
}
