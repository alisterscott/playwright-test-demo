const nav = require('../lib/actions/nav')
const { test, expect } = require('@playwright/test')

test('can wait for an element to appear', async ({ page }) => {
  await nav.visitHomePage(page)
  await page.waitForSelector('#elementappearschild', { visible: true, timeout: 5000 })
  expect(await page.screenshot()).toMatchSnapshot('element-appears.png')
})

test('can use an element that appears after on page load', async ({ page }) => {
  await nav.visitHomePage(page)
  const text = await page.textContent('#loadedchild')
  expect(text).toBe('Loaded!')
  expect(await page.screenshot()).toMatchSnapshot('element-after-onload.png')
})
