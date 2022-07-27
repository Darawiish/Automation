
const {By} = require('selenium-webdriver')

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Blood Sport')

    await driver.findElement(By.xpath('//button')).click()

    const movie = await driver.findElement(By.xpath('//li'))

    const displayed = movie.isDisplayed()

    expect(displayed).toBeTruthy()

    
}

const crossOfMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Blood Sport')

    await driver.findElement(By.xpath('//button')).click()

    const movie = await driver.findElement(By.xpath('(//span[contains(@class, "checked")])'))
    // await movie.click()
    expect(displayed).toBeFalsy()


}

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Blood Sport')

    await driver.findElement(By.xpath('//button)[2]')).click()

    const ul  = await driver.findElement(By.xpath('//ul'))
    expect(displayed).toBeFalsy()

}

module.exports = {
    addMovie,
    crossOfMovie,
    deleteMovie
}