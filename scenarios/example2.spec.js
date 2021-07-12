const nav = require('../lib/actions/nav')
const { test } = require('@playwright/test')

test('can handle alerts', async ({ page }) => {
  page.on('dialog', async dialog => {
    await dialog.accept()
  })
  await nav.goToPath(page, 'leave')
  await page.click('#homelink')
  await page.waitForSelector('#elementappearsparent', { visible: true, timeout: 5000 })
})
