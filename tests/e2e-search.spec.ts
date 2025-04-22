import {test, expect} from '@playwright/test';

test.describe.parallel('Search', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/')
        await page.click('#searchTerm')
    })

    // Search for a term
    test('Search for a term', async ({page}) => {
        await page.fill('//*[@id="searchTerm"]', 'Bank')
        await page.keyboard.press("Enter")

        const searchResults = await page.locator("li > a")
        await expect(searchResults).toHaveCount(2)
    })
})