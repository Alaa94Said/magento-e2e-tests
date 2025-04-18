# 💼 Magento Website E2E Automation

## ⚙ Tech Stack

- **TypeScript**: Strongly typed language for maintainable automation code.
- **WebdriverIO**: Advanced automation framework supporting multiple browsers.
- **Cucumber**: Behavior Driven Development (BDD) using Gherkin syntax.
- **Allure Reports**: Rich, interactive reports with step-by-step insights.
- **Loglevel**: Customizable logging for debugging and analysis.
- **Page Object Model (POM)**: Clean structure for reusability and readability.

---

## 🚀 Setup Instructions

### **Step 1: Prerequisites**
Ensure the following are installed on your system:

- **Node.js (v18+)**
- **NPM**
- **Chrome browser (latest version)**

### **Step 2: Clone the Repository**

```bash
git clone https://github.com/Alaa94Said/magento-e2e-tests.git
cd magento-e2e-tests
```

### **Step 3: Install Dependencies**

```bash
npm install
```

### **Step 4: Run the Tests**

```bash
npm run test
```

To generate Allure report:

```bash
npm run report

```

---

## 📋 Test Scenarios Covered

### 1. **Category Navigation**
- Navigate through various product categories from the homepage.
- Validate that correct products are listed for each category.

### 2. **Guest Checkout**
- Add product(s) to the cart.
- Proceed through the checkout process without logging in.
- Fill in shipping details.
- Ensure transition to the payment page is successful.

### 3. **Homepage Functionality**
- Validate homepage elements: banners, featured products, navigation menus.
- Ensure product links and CTA buttons work as expected.

### 4. **Add to Cart**
- Add single or multiple products to the shopping cart.
- Validate the cart total, quantity, and cart icon updates.
- Handle add/remove/update actions in the mini cart.

### 5. **Search and Filter**
- Search for products using keywords.
- Apply filters (e.g., price, size, category).
- Validate results are refined correctly.

### 6. **Login**
- Attempt login with valid and invalid credentials.
- Validate error handling, redirection, and session persistence.

---

## 💡 Why This Framework?

- **Readable & Maintainable**: Uses BDD and modular Page Object design.
- **Scalable**: Easy to add new features and scenarios.
- **Dev-Friendly Debugging**: Integrated logging and screenshots on failure.
- **Reports & CI-Ready**: Generates Allure reports and ready for CI/CD pipelines.

---

## 💬 Need Help or Want to Collaborate?

- 📧 **Email**: Alaa.abdellal@gmail.com  
- 💼 **LinkedIn**: [Alaa Abdelaal](https://www.linkedin.com/in/alaa-abdelaallll/)  
- 💻 **GitHub**: [Alaa94Said](https://github.com/Alaa94Said)