"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    balance;
    accountNumber;
    accountHolder;
    transactions;
    constructor(accountNumber, accountHolder, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
        this.transactions = [];
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        this.balance += amount;
        this.transactions.push({
            type: "deposit",
            amount: amount,
            timestamp: new Date(),
            balance: this.balance
        });
    }
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
        this.transactions.push({
            type: "withdrawal",
            amount: amount,
            timestamp: new Date(),
            balance: this.balance
        });
    }
    getBalance() {
        return this.balance;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
    getAccountHolder() {
        return this.accountHolder;
    }
    getTransactionHistory() {
        return [...this.transactions];
    }
}
exports.BankAccount = BankAccount;
// Example usage
const account = new BankAccount("1234567890", "John Doe", 1000);
console.log(`Initial balance: $${account.getBalance()}`);
try {
    account.deposit(500);
    console.log(`After deposit: $${account.getBalance()}`);
    account.withdraw(200);
    console.log(`After withdrawal: $${account.getBalance()}`);
    console.log("\nTransaction History:");
    account.getTransactionHistory().forEach(transaction => {
        console.log(`${transaction.type}: $${transaction.amount} at ${transaction.timestamp}`);
    });
}
catch (error) {
    console.error("Error:", error.message);
}
