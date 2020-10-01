let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing Second Rest Api',() => {
    it('Should do user check',(done) => {
        chai.request(`http://localhost:9900`)
        .get('/users')
        .then((res) => {
            expect(res).to.have.status(200);
            done()
        })
        .catch((err) => {
            throw err;
        })
    })
    it('Should do negative user check',(done) => {
        chai.request(`http://localhost:9900`)
        .get('/user')
        .then((res) => {
            expect(res).to.have.status(404);
            done()
        })
        .catch((err) => {
            throw err;
        })
    })

    it('Check post api 1',(done) => {
        chai
        .request('http://localhost:9900')
        .post('/addUser')
        .send({"_id":99,"name":"test_user","city":"Delhi","phone":8767,"active":true})
        .then((res) => {
            expect(res).to.have.status(200);
            done()
        })
        .catch((err) => {
            throw err;
        })
    })


})