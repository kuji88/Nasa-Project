const request = require('supertest')
const {app} = require('../../app')

describe("Test GET /Lanuches",()=>{
    test('should be success', async () => { 
        const response = await request(app)
        .get("/launches")
        .expect(200)
        .expect('Content-Type',/json/)
        
     })
})


describe("Test POST /launches",()=>{

    const dataWithDate ={
        "mission":"Travel to moon",
        "rocket": "KUji",
        "launchDate":"january 12, 2030",
        "target":"443-moon"
    }

    const datawithoutDate= {
        "mission":"Travel to moon",
        "rocket": "KUji",
        "target":"443-moon"
    }

    const dataWithInvalidDate ={
        "mission":"Travel to moon",
        "rocket": "KUji",
        "launchDate":"OOPS!",
        "target":"443-moon"
    }

    test("should post it",async ()=>{
        const response= await request(app)
        .post("/launches")
        .send(dataWithDate)
        .expect("Content-Type",/json/)
        .expect(200)

        const requestDate = new Date(dataWithDate.launchDate).valueOf();
        const responseDate = new Date(response.body.launchDate).valueOf();

        expect(responseDate).toBe(requestDate)

        expect(response.body).toMatchObject(datawithoutDate);
        
    })

    test("should catch the missing",async ()=>{
        const response= await request(app)
        .post("/launches")
        .send(datawithoutDate)
        .expect("Content-Type",/json/)
        .expect(400)

        expect(response.body).toStrictEqual({
            "error":"Something missing"
        })
    })
    test("should get the Date correctly", async ()=>{
        const response= await request(app)
        .post("/launches")
        .send(dataWithInvalidDate)
        .expect("Content-Type",/json/)
        .expect(400)

        expect(response.body).toStrictEqual({
            "error":"launch Date is worng"
        })
    })
})