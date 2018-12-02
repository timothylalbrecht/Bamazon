DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;
USE bamazon;

Create Table products (
	item_id INTEGER(12) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(25) NOT NULL,
    department_name VARCHAR(20) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
	('Apples (ea.)', 'Produce', 0.50, 99),
    ('Bottled Water', 'Beverages', 1.00, 144),
    ('Spinach (per lb.)', 'Produce', 1.00, 27),
    ('Dish Soap', 'Household', 4.99, 14),
    ('Cereal', 'Grocery', 2.99, 21),
    ('Hard Candy', 'Grocery', 1.99, 12),
    ('Milk', 'Grocery', 2.99, 25),
    ('Paper Towels', 'Household', 3.99, 9),
    ('Orange Juice', 'Beverages', 2.49, 33),
    ('Turkey Breast (per lb.)', 'Deli', 5.99, 55)
;

SELECT * FROM products;