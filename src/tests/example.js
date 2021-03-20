describe('First Steps with WebdriverIO', () => {
	it('Load Example Website', () => {
		browser.url('http://www.example.com')
		expect(browser).toHaveUrl('http://www.example.com/') // There is an implicit wait here.
		expect(browser).toHaveTitle('Example Domain')
	})

	it('H1 should be visible', () => {
		const h1 = $('h1')
		h1.waitForExist() // Always wait for the element before using it.
		expect(h1).toBeVisible()
	})

	it('Description should be visible', () => {
		const p = $('p')
		p.waitForExist() // Always wait for the element before using it.
		expect(p).toBeVisible()
	})

	it('Check link value', () => {
		const link = $('a')
		link.waitForExist() // Always wait for the element before using it.
		expect(link).toHaveLink('https://www.iana.org/domains/example')
	})
})
