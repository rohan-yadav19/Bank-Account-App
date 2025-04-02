class BankAccount {
  private _balance: number = 0;
  public get balance(): number {
    return this._balance;
  }
  public set balance(newBalance: number) {
    if (newBalance < 0) {
      throw new Error("Invalid Balance");
    }
    this._balance = newBalance;
  }
}
const account = new BankAccount();
account.balance = 10;
console.log(account.balance);
