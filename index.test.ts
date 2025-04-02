import { BankAccount } from "./index";

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount("1234567890", "John Doe", 1000);
  });

  test("should create account with initial balance", () => {
    expect(account.getBalance()).toBe(1000);
    expect(account.getAccountNumber()).toBe("1234567890");
    expect(account.getAccountHolder()).toBe("John Doe");
  });

  test("should deposit money correctly", () => {
    account.deposit(500);
    expect(account.getBalance()).toBe(1500);
    const transactions = account.getTransactionHistory();
    expect(transactions.length).toBe(1);
    expect(transactions[0].type).toBe("deposit");
    expect(transactions[0].amount).toBe(500);
  });

  test("should withdraw money correctly", () => {
    account.withdraw(300);
    expect(account.getBalance()).toBe(700);
    const transactions = account.getTransactionHistory();
    expect(transactions.length).toBe(1);
    expect(transactions[0].type).toBe("withdrawal");
    expect(transactions[0].amount).toBe(300);
  });

  test("should throw error for negative deposit", () => {
    expect(() => account.deposit(-100)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("should throw error for negative withdrawal", () => {
    expect(() => account.withdraw(-100)).toThrow(
      "Withdrawal amount must be positive"
    );
  });

  test("should throw error for insufficient funds", () => {
    expect(() => account.withdraw(2000)).toThrow("Insufficient funds");
  });

  test("should maintain transaction history", () => {
    account.deposit(500);
    account.withdraw(200);
    const transactions = account.getTransactionHistory();
    expect(transactions.length).toBe(2);
    expect(transactions[0].type).toBe("deposit");
    expect(transactions[1].type).toBe("withdrawal");
  });
});
