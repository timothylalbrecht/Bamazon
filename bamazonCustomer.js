var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'USER PASSWORD',
	database: 'DATABASE NAME'
})

connection.connect(function(err) {
	if (err) throw err;
	console.log('Connected. New id: ' + connection.threadId);
	runStore();
})

function formatTable(res) {
	var table = new Table({
		head: ['Item ID', 'Product Name', 'Department', 'Cost', 'Stock']
		, colWidths: [8, 25, 20, 8, 8]
	});
	for (var i = 0; i < res.length; i++) {
		table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
	}
	console.log(table.toString());
}

var runStore = function() {
    // console.log("it kinda works.");
	connection.query('SELECT * FROM products', function(err, res) {
		formatTable(res);
		var choiceArray = [];
		for (var i = 0; i < res.length; i++) {
			choiceArray.push(res[i].product_name);
		}
		inquirer.prompt([{
			name: 'id',
			type: 'input',
			message: 'Which item would you like to purchase? (Enter the Item ID)'
		},
		{
			name: 'quantity',
			type: 'input',
			message: 'How many would you like to purchase?'
		}])
		.then(function(userData) {
			
			if (userData.quantity > res[userData.id -1].stock_quantity) {
			console.log("\nInsufficient quantity! Available stock: " + res[userData.id - 1].stock_quantity + "\n");
			runStore();
			}
			else {
				var orderTotal = parseFloat(userData.quantity * res[userData.id - 1].price);
				var newStock = parseInt(res[userData.id - 1].stock_quantity) - parseInt(userData.quantity);

				connection.query(
					"UPDATE products SET ? WHERE ?",
					[
					{stock_quantity: newStock},
					{item_id: userData.id}
					],
					function(error) {
						if (error) throw error;
						console.log("\nOrder Total: $" + orderTotal + " Thanks for your Business!\n");
						connection.end();
					}
			  	);
			}
		});
	});
}