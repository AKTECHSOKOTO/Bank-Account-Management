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
