const puppeteer = require('puppeteer');
const pti = require('puppeteer-to-istanbul');
const assert = require('assert');

/**
 * @name Web toolkit feature testing
 * @desc Create Chrome instance and interact with page.
 */

let browser;
let page;

describe('web-dev-toolkit', () => {
    before(async () => {
        // Create browser instance
        browser = await puppeteer.launch()
        page = await browser.newPage()
        await page.setViewport({ width: 1280, height: 800 });
        // Enable both JavaScript and CSS coverage
        await Promise.all([
            page.coverage.startJSCoverage(),
            page.coverage.startCSSCoverage()
          ]);
        // Endpoint need to start with `npm run server` 
        await page.goto('http://localhost:8080', { waitUntil: 'networkidle2' });
    });
    describe('Visual regress', () => {
        it('title contain `Web Developer Toolkit`', async () => {
            // Setup
            let expected = 'Web Developer Toolkit';
            // Execute

            let title = await page.title();
            // Verify
            assert.equal(title, expected);
        }).timeout(50000);
        it('color button enabled', async () => {
            // Setup
            let expected = true;
            let expectedCssLocator = '#color-button';
            let actual;
            // Execute
            let actualPromise = await page.waitForSelector(expectedCssLocator);
            if (actualPromise != null) {
                actual = true;
            }
            else
                actual = false;
            // Verify
            assert.equal(actual, expected);
        }).timeout(50000);

    });
    describe('E2E testing', () => {
        it('[Random Color Picker] color button clickable', async () => {
            // Setup
            let expected = true;
            let expectedCssLocator = '#color-button';
            let actual;
            // Execute
            let actualPromise = await page.waitForSelector(expectedCssLocator);
            if (actualPromise != null) {
                await page.click(expectedCssLocator);
                actual = true;
            }
            else
                actual = false;
            // Verify
            assert.equal(actual, expected);
        }).timeout(50000);
        it('[Browser Size Checker] contains `Your browser size is:`', async () => {
            // Setup
            let expected = 'Your browser size is:';
            let expectedCssLocator = '#button-checker';
            let actual;
            // Execute
            await page.waitForSelector(expectedCssLocator);
            await page.click(expectedCssLocator);
            actual = await page.$eval('#size-checker > p', el => el.innerText);
            // Verify
            assert.equal(actual, expected);
        }).timeout(50000);
        // it('[EM to PX Converter] click reset', async () => {
        //     // Setup
        //     let expected = true;
        //     let expectedTabCssLocator = '#button-converter';
        //     let expectedResetCssLocator = '#button-reset';
        //     let actual;
        //     // Execute
        //     await page.click(expectedTabCssLocator);

        //     let actualPromise = await page.waitForSelector(expectedResetCssLocator);
        //     if (actualPromise != null) {
        //     await page.click(expectedResetCssLocator);
        //         actual = true;
        //     }
        //     else
        //         actual = false;
        //     // Verify
        //     assert.equal(actual, expected);
        // }).timeout(50000);

    });
    after(async () => {
        // Disable both JavaScript and CSS coverage
        const jsCoverage = await page.coverage.stopJSCoverage();
        await page.coverage.stopCSSCoverage();

        let totalBytes = 0;
        let usedBytes = 0;
        const coverage = [...jsCoverage];
        for (const entry of coverage) {
            totalBytes += entry.text.length;
            console.log(`js fileName covered: ${entry.url}`);
            for (const range of entry.ranges)
                usedBytes += range.end - range.start - 1;
        }
        console.log(`Bytes used: ${usedBytes / totalBytes * 100}%`);
        pti.write(jsCoverage);
        // Close browser instance
        await browser.close();
    });
});