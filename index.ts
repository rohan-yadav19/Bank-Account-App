export interface Transaction {
    type: "deposit" | "withdrawal";
    amount: number;
    timestamp: Date;
    balance: number;
}

export class BankAccount {
    private balance: number;
    private accountNumber: string;
    private accountHolder: string;
    private transactions: Transaction[];

    constructor(accountNumber: string, accountHolder: string, initialBalance: number = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
        this.transactions = [];
    }

    deposit(amount: number): void {
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

    withdraw(amount: number): void {
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

    getBalance(): number {
        return this.balance;
    }

    getAccountNumber(): string {
        return this.accountNumber;
    }

    getAccountHolder(): string {
        return this.accountHolder;
    }

    getTransactionHistory(): Transaction[] {
        return [...this.transactions];
    }
}

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
} catch (error: any) {
    console.error("Error:", error.message);
}
