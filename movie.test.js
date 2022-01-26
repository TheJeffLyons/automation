const { TestScheduler } = require('jest');
const {Builder, Capabilities} = require('selenium-webdriver');

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const {deleteMovie, checkMovie, addThreeDeleteMiddle} = require("./testcontroller.js")

beforeAll(async () => {
    await (await driver).get('http://127.0.0.1:5501/movieList/index.html')
});

afterAll(async () => {
    await (await driver).quit()
});

test("check off movie", async () => {
    await checkMovie(driver);
    await driver.sleep(5000);
});

test("delete movie from list", async () => {
    await deleteMovie(driver);
    await driver.sleep(8000);
});

test("add 3 movies and delete the middle movie", async () => {
    await addThreeDeleteMiddle(driver);
    await driver.sleep(7000);
})