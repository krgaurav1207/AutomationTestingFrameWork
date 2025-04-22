import { test, expect } from '@playwright/test'

test.describe.skip('Transfer Funds', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/')
    await page.click('#signin_button')
    await page.fill('#user_login', 'username')
    await page.fill('#user_password', 'password')
    await page.click('text=Sign in')
        await page.goto(
          'http://zero.webappsecurity.com/bank/account-summary.html',
        )
  })
  test('Transfer Funds', async ({ page }) => {
    await page.click('#transfer_funds_tab')
    await page.click('text=Transfer')
    await page.selectOption('#tf_fromAccountId', '2')
    await page.selectOption('#tf_toAccountId', '3')
    await page.fill('#tf_amount', '100')
    await page.fill('#tf_description', 'Test transfer')
    await page.click('#btn_submit')
    // await page.click('text=Continue')

    const boardHeader = await page.locator('h2.board-header')
    await expect(boardHeader).toContainText('Verify')
    await page.click('#btn_submit')

    const confirmationMessage = await page.locator('.alert-success')
    await expect(confirmationMessage).toContainText('You successfully submitted your transaction.')
  })
})
