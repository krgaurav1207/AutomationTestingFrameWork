import { test, expect } from '@playwright/test';

test.describe.skip('Filter Transactions', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/')
        await page.click('#signin_button')
        await page.fill('#user_login', 'username')
        await page.fill('#user_password', 'password') 
        await page.click('text=Sign in')
        await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')
    })

    test('Filter Transactions', async ({ page }) => {
        await page.click('#account_activity_tab')

        await page.selectOption('#aa_accountId', '2')
        const checkingAccount = await page.locator('#all_transactions_for_account tbody tr')
        await expect(checkingAccount).toHaveCount(3) 

        await page.selectOption('#aa_accountId', '4')
        const savingsAccount = await page.locator('#all_transactions_for_account tbody tr')
        await expect(savingsAccount).toHaveCount(2)

        await page.selectOption('#aa_accountId', '6')
        const noResult = await page.locator('.well')
        await expect(noResult).toBeVisible()


        await page.click('text=Find Transactions')

        // Filter by date range
        await page.fill('#aa_fromDate', '2023-01-01')
        await page.fill('#aa_toDate', '2023-12-31')

        // Filter by description
        await page.fill('#aa_description', 'Test')

        // Click on Find button
        await page.click('text=Find')

        const transactionResults = await page.locator('.board-header').nth(1)
        await expect(transactionResults).toContainText('Find Transactions')
    })
})
