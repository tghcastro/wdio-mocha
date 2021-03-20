describe('First Steps with WebdriverIO', () => {
    
    it('Load Example Website', () => {
        browser.url('http://www.example.com')

        browser.pause(2000);

        expect(browser).toHaveUrl('http://www.example.com/')
        expect(browser).toHaveTitle('Example Domain')

    })
});