/*
    GLORY BE TO GOD,
    Javascript Testing,
    By Israel Mafabi Emmanuel
*/

require('./root');
const { name, height, message } = require('../index');

describe('what-is-a-test', () => {
    describe('Name', () => {
        it('returns "Emmanuel"', () => {
            expect(name).toEqual('Emmanuel')
        })
    })
  
  
    describe('Height', () => {
        it('is less than 40', () => {
            expect(height).toBeLessThan(200)
        })
    })
  
    describe('Message', () => {
        it('gives the name and height', () => {
            expect(message).toInclude(name)
            expect(message).toInclude(height)
        })
    })
})