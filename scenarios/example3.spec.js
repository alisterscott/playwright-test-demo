/* eslint-env jest */
const nav = require('../lib/actions/nav')
const { test, expect } = require('@playwright/test')

test('can check for errors when there should be none', async ({ page }) => {
  let errors = ''
  page.on('pageerror', pageerr => {
    errors = errors + pageerr
  })
  await nav.visitHomePage(page)
  expect(errors).toBe('')
})
