const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;

// Set up the Chrome WebDriver
const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

async function clickDownloadButtons() {
  try {
    // Navigate to the web page with the download buttons
    await driver.get('http://calameo.download/003951876b30015cfe40a');

    // Wait for the page to load and the download buttons to become clickable (adjust the timeout as needed)
    await driver.wait(until.elementLocated(By.xpath('//a[contains(@href,".jpg")]/child::i[@class="uk-icon-download"]')), 10000);

    // Find and click all download buttons
    const downloadButtons = await driver.findElements(By.xpath('//a[contains(@href,".jpg")]/child::i[@class="uk-icon-download"]'));
    
    for (const button of downloadButtons) {
      await button.click();
      
      // You can add a delay here to allow the download to start (adjust as needed)
      await driver.sleep(500);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // Close the browser when done
    await driver.quit();
  }
}

// Call the function to start the automation
clickDownloadButtons();