import { test, expect } from '@playwright/test';

test.describe.skip('Submit Form', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/')
        await page.click('#feedback');
    })

    // Reset feedback form
    test('Reset feedback form', async ({ page }) => {
        await page.fill("#name", "John Doe")
        await page.fill("#email", "gaurav@test.com")
        await page.fill("#subject", "Test Subject")
        await page.fill("#comment", "Test Comment")
        await page.click("input[type='reset']")

        const nameValue = await page.locator("#name")
        const emailValue = await page.locator("#email")

        await expect(nameValue).toBeEmpty()
        await expect(emailValue).toBeEmpty()

    })
    // Submit feedback form
    test('Submit feedback form', async ({ page }) => {
        await page.fill("#name", "John Doe")
        await page.fill("#email", "gaurav@test.com")
        await page.fill("#subject", "Test Subject")
        await page.fill("#comment", "Test Comment")
        await page.click("input[type='submit']")
        await page.waitForSelector("#feedback-title")
    })



})