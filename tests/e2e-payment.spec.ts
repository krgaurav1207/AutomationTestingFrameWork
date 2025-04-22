import { test, expect } from '@playwright/test'

test.describe.skip(' New Payment', () => {
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

  test('Should Send a New Payment', async ({ page }) => {
    await page.click('#pay_bills_tab')
    // await page.click('text=Pay Saved Payee')
    await page.selectOption('#sp_payee', 'apple')
    await page.click('#sp_get_payee_details')
    await page.waitForSelector('#sp_get_payee_details')
    await page.selectOption('#sp_account', '6')
    await page.fill('#sp_amount', '5000')
    await page.fill('#sp_date', '2023-12-31')
    await page.fill('#sp_description', 'Test payment')
    await page.click('#pay_saved_payees')

    const confirmationMessage = await page.locator('.alert-success')
    await expect(confirmationMessage).toContainText('The payment was successfully submitted.')
  })
})