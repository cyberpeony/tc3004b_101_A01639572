// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('milions', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('milions', async function() {
    await driver.get("http://[::]:8000/")
    await driver.manage().window().setRect({ width: 855, height: 793 })
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).sendKeys("2000000")
    await driver.findElement(By.id("num2")).click()
    await driver.findElement(By.id("num2")).sendKeys("1000000")
    await driver.findElement(By.css("button:nth-child(1)")).click()
  })
})
