describe('First Steps with WebdriverIO', () => {
	it('Load Example Website', () => {
		browser.url('http://www.example.com')

		browser.pause(1000)

		expect(browser).toHaveUrl('http://www.example.com/')
		expect(browser).toHaveTitle('Example Domain')
	})

	it('H1 should be visible', () => {
		const h1 = $('h1')
		expect(h1).toBeVisible()
	})

	it('Description should be visible', () => {
		const p = $('p')
		expect(p).toBeVisible()
	})

	it('Check link value', () => {
		const link = $('a')
		expect(link).toHaveLink("https://www.iana.org/domains/example")
	})
})
