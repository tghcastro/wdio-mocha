describe('First Steps with WebdriverIO', () => {
    it('Load Example Website', () => {
        browser.url('http://www.example.com')

        browser.pause(2000);
    })

    it('Load WebdriverIO website', () => {
        browser.url('https://webdriver.io')
        browser.pause(2000)
    })

});