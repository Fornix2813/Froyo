

let menu = {
    "Chocolate": 2.50,
    "Vanilla": 2.00,
    "Strawberry": 2.75,
    "Mint": 2.25,
    "Cookie Dough": 3.00,
    "Pistachio": 2.80,
    "Mango": 2.60,
    "Blueberry": 2.90,
    "Coffee": 2.40,
}


function customerOrder(NewOrder){
    let total = 0;
    let orderItems = [];
    alert("Welcome to Froyo! Here is our menu:\n" + Object.keys(menu).join(", ") + "\nPlease enter your order by typing the item names separated by commas.");
    let order = prompt("Please enter your order (separate items with commas):");
    if (order) {
        orderItems = order.split(",").map(item => item.trim());
        for (let item of orderItems) {
            if (menu[item]) {
                total += menu[item];
            } else {
                alert(`Sorry, we don't have ${item}.`);
            }
        }
        alert(`You've ordered ${order}. Your total is $${total.toFixed(2)}.`);
    } else {
        alert("No order entered.");
    }
}

customerOrder();