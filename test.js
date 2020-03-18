const { remote } = require('webdriverio'); 
const assert = require('chai').assert;
const should = require('chai').should();
const expect = require('chai').expect;

/*
(async () => { 
    const browser = await remote({ logLevel: 'error', path: '/', 
    capabilities: {browserName: 'firefox'} });
    await browser.url('http://tutorialsninja.com/demo/'); 
    const title = await browser.getTitle(); 
    console.log('Title was:' + title); 
    assert.equal(title,'The Ninja Store');
    await browser.deleteSession(); 
}) ().catch((e) => console.error(e));
*/

const foo = 'bar';
const beverage = {tea: ['chai','matcha','oolong']};

try{
    expect(foo,'[expect]').to.equal('foo');
} catch(e) {
    console.log(e.name + ': ' + e.message)
}

console.log('[should()]');
beverage.should.have.property('tea').with.lengthOf(3);
console.log('[assert]');
assert.equal('a','a');


describe('Test', function() {
    it('should be 6', function() {
        assert.equal([1,2,3].reduce((a,b)=> a+b), 6);
    });
    describe('Title', function() {

        var browser;
        it('should have title', async function() {
            this.timeout(10000);

                browser = await remote({
                    logLevel: 'error',
                    path: '/', 
                    capabilities: {browserName: 'firefox'} });
                await browser.url('http://qgbsus.com'); 
                const title = await browser.getTitle(); 
                const text = await (await browser.$('h1')).getText();
                console.log('#### '+text);
                //await browser.getText('=QGBSUS.COM', function(err,text) {
                //console.log('h1:' + text); });
                assert.equal(title,'qgbsus.com');
                

                browser.deleteSession();
        });

        after(function() {console.log('*** after ***'); if(browser) browser.deleteSession(); });
        //afterEach(function() {console.log('*** afterEach ***')});
        //beforeEach(function() {console.log('*** beforeEach ***')});
        //before(function() {console.log('*** beforech ***')});
    })

})