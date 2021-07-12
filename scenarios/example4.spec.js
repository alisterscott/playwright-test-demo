/* eslint-env jest */
const nav = require('../lib/actions/nav')
const { test, expect } = require('@playwright/test')

test('can check for errors when there are present', async ({ page }) => {
  let errors = ''

  page.on('pageerror', error => {
    errors = errors + error.message
  })

  await nav.goToPath(page, 'error')
  expect(errors).toBe('Purple Monkey Dishwasher Error')
})
