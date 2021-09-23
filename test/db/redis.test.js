const { redisConnect, getRedisDb } = require("../../src/db/redis/db");
const { dropCreateRedisDb } = require("../../src/db/redis/querries");

describe('redis querries', () => {
    // beforeAll(done => {
    //     redisConnect()
    //         .then(() => {
    //             //dropCreateRedisDb();
    //             done();
    //         })
    // });
    
    // afterAll(done => {
    //     //dropCreateRedisDb();
    //     //getRedisDb().quit();
    //     done();
    // });
    
    // it('sh', done => {
    //     //getRedisDb().set("asd", "asd");
    //     expect(true).toBeTruthy();
    //     done();
    // });

    it('sasdh', () => {
        //getRedisDb().set("asd", "asd");
        expect(true).toBeTruthy();
    });
});