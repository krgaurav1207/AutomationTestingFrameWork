import { test, expect } from '@playwright/test';

test.describe.skip('Login Page', () => {

    // Before Hook
    test.beforeEach(async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/')
    })

    //Negative Test Case
    test('Login with invalid credentials', async ({ page }) => {
        await page.click('#signin_button')
        await page.fill('#user_login', 'invalid_username')
        await page.fill('#user_password', 'invalid_password')
        await page.click("text=Sign in")

        const errorMessage = await page.locator('.alert-error')
        await expect(errorMessage).toContainText('Login and/or password are wrong.')
    })

    test('Login with valid credentials', async ({ page }) => {
        await page.click('#signin_button')
        await page.fill('#user_login', 'username')
        await page.fill('#user_password', 'password')
        await page.click("text=Sign in")

        await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')

        const accountSummary = await page.locator('#account_summary_tab')
        await expect(accountSummary).toBeVisible()

        await page.goto('http://zero.webappsecurity.com/logout.html')
        await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
    })
})