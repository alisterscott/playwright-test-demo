/* eslint-env jest */
const nav = require('../lib/actions/nav')
const home = require('../lib/actions/home')
const { test } = require('@playwright/test')

test('can use xpath selectors to find elements', async ({ page }) => {
  await nav.visitHomePage(page)
  await home.clickScissors(page)
})
