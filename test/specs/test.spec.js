describe('Chai Test', function() {
    it('assert test', function() {
        assert.equal([{v:1},{v:2},{v:3},{v:4}].reduce((sum,el)=> sum+el.v, 0), 10);
    });
    it('expect test', function() {
        const foo = 'bar';
        expect(foo,'[expect]').to.equal('bar');
    });
    it('should() test', function() {
        const beverage = {tea: ['chai','matcha','oolong']};
        beverage.should.have.property('tea').with.lengthOf(3);
    });
});

describe('CSL Plasma homepage', function() {
    before(function() {
        browser.url('https://www.cslplasma.com/');
    })
    it('should display the correct homepage title', function() {
        const title = browser.getTitle();
        assert.equal(title,'Plasma Donation Centers - CSL Plasma');
    });
    it('should have a Contact Us link', function() {
        $('=Contact Us').click();
        assert.equal(browser.getTitle(),'Contact Us');
    });
});

describe('Google', function() {
    before(function() {
        browser.url('https://google.com');
    });
    it('should be able to do search', function() {
        $('[name=q]').setValue('CSL Plasma\n');
        //$('input[name="btnK"]').click();
        assert.equal(browser.getTitle(),'CSL Plasma - Google Search');
    })
});
