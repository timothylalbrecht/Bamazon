# Bamazon CLI Storefront
Bamazon serves as a mock CLI Storefront utilizing Node.js and MySQL. The app will take in orders from customers and deplete stock from the store's inventory.  Bamazon relies on 3 primary npm packages:

- MySQL
- Inquirer
- CLI Table (to make it look pretty)


## How It Works
Upon running bamazonCustomer.js, the user is presented with a formatted table outlining the items available for purchase. 

---

![](https://i.imgur.com/TwpJBrb.png "Run Screen")

---

The user can then select their desired item and quantity. Bamazon will calculate a grand total amount, and alert the user. 

---

![](https://i.imgur.com/dkG1Hqr.png "Completed Order")

---

The stock quantities are also updated server side, so the next time the storeFront is called, the client side totals will reflect the new, updated quantities. 

---

![](https://i.imgur.com/bjRjHMk.png "Updated Stock")

---

Bamazon will alert the user if they request an unavailable amount of stock. For example, if a user requests 10 rolls of paper towels, when only 9 are in stock:

---

![](https://i.imgur.com/h3N6uos.png "No Quantity")

---
