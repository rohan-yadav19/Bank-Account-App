# Bank Account App

A simple bank account management system built with TypeScript that allows users to create bank accounts, make deposits, withdrawals, and track transaction history.

## Features

- Create bank accounts with account number, holder name, and initial balance
- Make deposits and withdrawals
- Track transaction history
- View account balance and details
- Comprehensive error handling for invalid operations
- Full test coverage

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bank-account-app
```

2. Install dependencies:
```bash
npm install
```

## Usage

1. Run the application:
```bash
npm start
```

2. Run tests:
```bash
npm test
```

3. Build the project:
```bash
npm run build
```

## Example Usage

```typescript
import { BankAccount } from './index';

// Create a new account
const account = new BankAccount("1234567890", "John Doe", 1000);

// Make a deposit
account.deposit(500);

// Make a withdrawal
account.withdraw(200);

// Get account balance
console.log(account.getBalance());

// View transaction history
const transactions = account.getTransactionHistory();
```

## Error Handling

The application includes comprehensive error handling for:
- Negative deposit amounts
- Negative withdrawal amounts
- Insufficient funds for withdrawal

## Testing

The project includes a comprehensive test suite that covers:
- Account creation
- Deposits and withdrawals
- Error handling
- Transaction history tracking

## License

MIT
