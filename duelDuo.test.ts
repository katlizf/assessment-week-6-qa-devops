
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays correct div', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(1000)
    
    const findDiv = await driver.findElement(By.id('choices'))
    
    const displayed = await findDiv.isDisplayed()
    await driver.sleep(1000)

    expect(displayed).toBe(true)
})

test('Add to Due button displays correct div', async () => {
    await driver.findElement(By.id('draw')).click()

    await driver.findElement(By.xpath('(//button[text()="Add to Duo"])[1]')).click()
    await driver.sleep(1000)

    const whichDiv = await driver.findElement(By.id('player-duo'))

    const displayed = await whichDiv.isDisplayed()
    await driver.sleep(1000)

    expect(displayed).toBe(true)
})

test('Check that when a bot is “Removed from Duo”, that it goes back to “choices”', async () => {
    await driver.findElement(By.id('draw')).click()

    await driver.findElement(By.xpath('(//button[text()="Add to Duo"])[1]')).click()
    await driver.sleep(1000)

    await driver.findElement(By.xpath('(//button[text()="Remove from Duo"])')).click()
    await driver.sleep(1000)

    const returned = await driver.findElement(By.xpath('(//div[@class="bot-card outline"][5])'))

    const displayed = await returned.isDisplayed()

    expect(displayed).toBe(true)
})