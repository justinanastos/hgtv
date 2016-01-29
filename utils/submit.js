var enterButtonXpath = "//div[@class='xFormContainer']//button[@type='submit' and not(ancestor::*[contains(@class,'xHidden')])]";
var completeButtonXpath = "//a[contains(., 'Enter Again') and not(ancestor::*[contains(@class,'xHidden')])]";
var sorryXpath = "//h1[contains(., 'Sorry')]";
var completeXpath = "(" + completeButtonXpath + " | " + sorryXpath + ")";

function create(url, email) {
    return function(browser) {
        browser
            .url(url)
            .waitForElementPresent("[data-sweeps-config] iframe", 15000);

        browser.getAttribute("[data-sweeps-config] iframe", "id", function(result) {
            var id = result.value;


            browser
                .frame(id)
                .waitForElementPresent("input[type=email]", 5000)
                .setValue("input[type=email]", email)
                .click("button[type=submit]")
                .useXpath()
                .waitForElementVisible(enterButtonXpath, 5000)
                .click(enterButtonXpath)
                .waitForElementVisible(completeXpath, 5000)
                .end();
        });
    };
}

module.exports = function(url, title) {
    return {
        ["Enter justin in " + title]: create(url, "justin.anastos@gmail.com"),
        ["Enter michelle in " + title]: create(url, "michelleberberich@gmail.com"),
    };
};
