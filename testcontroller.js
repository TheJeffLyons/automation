const { By } = require('selenium-webdriver')

const checkMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('iRobot');
    await driver.findElement(By.xpath('//button')).click();
    await driver.findElement(By.xpath('//span')).click();
}

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('(//button)[2]')).click();
}

const addThreeDeleteMiddle = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('iRobot');
    await driver.findElement(By.xpath('//button')).click();
    await driver.findElement(By.xpath('//input')).sendKeys('The Batman');
    await driver.findElement(By.xpath('//button')).click();
    await driver.findElement(By.xpath('//input')).sendKeys('Hunger Games');
    await driver.findElement(By.xpath('//button')).click();
    await driver.findElement(By.xpath('(//button)[3]')).click();
}

module.exports = {
    deleteMovie,
    checkMovie,
    addThreeDeleteMiddle
}