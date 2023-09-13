# Bank-Account-Management
 Alright, let's create a bank account management simulation with Bootstrap for styling:
1. HTML Structure:
   <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank Account Management</title>
    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-light">
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6 offset-md-3 bg-white p-4 rounded shadow">
                <h2 class="text-center">Bank Account Management</h2>
                <hr>
                <form id="bankForm">
                    <div class="form-group">
                        <label for="action">Choose Action:</label>
                        <select id="action" class="form-control">
                            <option value="deposit">Deposit</option>
                            <option value="withdraw">Withdraw</option>
                            <option value="balance">Check Balance</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="amount">Amount:</label>
                        <input type="number" id="amount" class="form-control" placeholder="Enter Amount">
                    </div>
                    <button type="button" class="btn btn-primary btn-block" onclick="performAction()">Execute</button>
                </form>
                <div class="mt-4" id="output"></div>
            </div>
        </div>
    </div>

    <!-- Including JavaScript -->
    <script src="script.js"></script>
</body>

</html>

2. JavaScript Logic:
   // script.js

class BankAccount {
    constructor(holderName, accountType, balance = 0) {
        this.holderName = holderName;
        this.accountType = accountType;
        this.balance = balance;
    }

    deposit(amount) {
        if(amount <= 0) {
            throw new Error('Invalid deposit amount.');
        }
        this.balance += amount;
        return `Deposited $${amount}. New Balance: $${this.balance}`;
    }

    withdraw(amount) {
        if(amount <= 0) {
            throw new Error('Invalid withdrawal amount.');
        }
        if (this.balance < amount) {
            throw new Error('Insufficient Funds.');
        }
        this.balance -= amount;
        return `Withdrew $${amount}. New Balance: $${this.balance}`;
    }

    checkBalance() {
        return `Balance: $${this.balance}`;
    }
}

let myAccount = new BankAccount("John Doe", "Savings", 1000);

function performAction() {
    const action = document.getElementById('action').value;
    const amountInput = document.getElementById('amount');
    const amount = parseFloat(amountInput.value);
    const output = document.getElementById('output');

    // Reset the output
    output.innerHTML = "";
    output.className = "";

    try {
        switch (action) {
            case "deposit":
                output.innerHTML = myAccount.deposit(amount);
                break;
            case "withdraw":
                output.innerHTML = myAccount.withdraw(amount);
                break;
            case "balance":
                output.innerHTML = myAccount.checkBalance();
                break;
            default:
                throw new Error("Invalid action selected.");
        }
        output.className = "text-success";
    } catch (error) {
        output.innerHTML = error.message;
        output.className = "text-danger";
    } finally {
        amountInput.value = "";  // Reset the input field
    }
}

3. CSS for additional styling (optional):
If you want to add some custom styling on top of Bootstrap, you can create a styles.css:

body {
    font-family: 'Arial', sans-serif;
}

.container {
    background-color: #f7f8fa;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

Then, link it in your HTML's <head>:

<link rel="stylesheet" href="styles.css">

With this setup, you now have a simple bank account management website that uses classes, switch statements, try-catch-finally blocks, Bootstrap, and additional CSS for styling.
