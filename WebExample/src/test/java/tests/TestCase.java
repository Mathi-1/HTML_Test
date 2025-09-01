package tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.*;
import utils.CSVReader;
import java.util.List;

public class TestCase {
    WebDriver driver;

    @BeforeMethod
    public void setup() {
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        // Load local HTML file (adjust path to where your file is saved)
        driver.get("file:///C:/Users/Srimathi/Desktop/assessment_3/dummy.html");
    }

    @DataProvider(name = "loginData")
    public Object[][] getLoginData() {
        List<String[]> records = CSVReader.readCSV("src/test/resources/data.csv");
        Object[][] data = new Object[records.size()][3];
        for (int i = 0; i < records.size(); i++) {
            data[i] = records.get(i);
        }
        return data;
    }

    @Test(dataProvider = "loginData")
    public void testLogin(String username, String password, String expectedResult) {
        driver.findElement(By.id("username")).sendKeys(username);
        driver.findElement(By.id("password")).sendKeys(password);
        driver.findElement(By.id("loginBtn")).click();

        if (expectedResult.equals("success")) {
            Assert.assertTrue(driver.getCurrentUrl().contains("dashboard.html"), "Login should succeed!");
        } else {
            Assert.assertTrue(driver.findElement(By.id("errorMsg")).isDisplayed(), "Login should fail!");
        }
    }

    @AfterMethod
    public void teardown() {
        driver.quit();
    }
}
