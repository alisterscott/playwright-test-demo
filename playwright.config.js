module.exports = {
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retry-with-video',
    retries: 2
  }
}
