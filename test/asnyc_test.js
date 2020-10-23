var expect = require('chai').expect;

function myAsyncFunction(callback) {
    setTimeout(() => {
        callback('blah');
    }, 50);
}

function myPromiseFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("blah");
        }, 50);
    });
}
it('test_async', (done) => {
    myAsyncFunction((str) => {
        expect(str).to.equal('blah');
        done();
    });
});

it('test_promise', () => {
    return myPromiseFunction().then((res) => {
        expect(res).to.equal('blah');
    });
});

it('test_async_await', async function() {
    var result = await myPromiseFunction();
    expect(result).to.equal('blah');
});