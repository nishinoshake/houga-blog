const buildUrl = path => `http://localhost:8888${path}`

// 雑
test('トップページにエラーがない', async () => {
  const p = await browser.newPage()

  await p.goto(buildUrl('/'))

  const error = await p.$('.error')

  expect(error).toBeNull()

  p.close()
})
