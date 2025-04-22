import {test, expect} from '@playwright/test'

test.describe.only('Currency Exchange', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/')
        await page.click('#signin_button')
        await page.fill('#user_login', 'username')
        await page.fill('#user_password', 'password')
        await page.click('text=Sign in')
        await page.goto(
        'http://zero.webappsecurity.com/bank/account-summary.html',
        )
    })
    
    test('Should Send a New Currency Exchange', async ({page}) => {
        await page.click('#pay_bills_tab')
        await page.click('text=Purchase Foreign Currency')
        await page.selectOption('#pc_currency', 'EUR')
        
        const rate= await page.locator('#sp_sell_rate')
        await expect(rate).toContainText('1 euro (EUR)')
        
        await page.fill('#pc_amount', '5000')
        await page.click('#pc_inDollars_true')
        await page.click('#pc_calculate_costs')

        const conversionAmount = await page.locator('#pc_conversion_amount')
        await expect(conversionAmount).toContainText(
          '5000.00 U.S. dollar (USD)',
        ) 

        await page.click('#purchase_cash')
    
        const confirmationMessage = await page.locator('.alert-success')
        await expect(confirmationMessage).toContainText('Foreign currency cash was successfully purchased.')
    })
})