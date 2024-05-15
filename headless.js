const { chromium } = require("playwright");

(async () => {
    const browser = await chromium.launch({ headless: true });

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://duckduckgo.com/");

    await page.fill("input[name=q]", "Playwright");

    await page.keyboard.press("Enter");

    await page.waitForSelector("#r1-0");

    const searchResults = await page.$$("#r1-0");
    if (searchResults.length > 0) {
        console.log("Search results are displayed.");
    } else {
        console.log("Search results are NOT displayed.");
    }

    await page.screenshot({ path: "search_results.png" });

    await browser.close();
})();
