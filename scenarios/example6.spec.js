/* eslint-env jest */
const data = require('../lib/helpers/data')
const { test } = require('@playwright/test')

test('example of loading random data 1', async ({ page }) => {
  const userFromObject = data.UserObject()
  const userFromClass = new data.UserClass()
  console.log('Test 1 username from object:', userFromObject)
  console.log('Test 1 username from object:', userFromClass)
})

test('example of loading random data 2', async ({ page }) => {
  const userFromObject = data.UserObject()
  const userFromClass = new data.UserClass()
  console.log('Test 2 username from object:', userFromObject)
  console.log('Test 2 username from object:', userFromClass)
})
