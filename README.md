# ICP Mainnet Deployment Guide

This repository provides a comprehensive guide on how to deploy Internet Computer Protocol (ICP) projects to the mainnet using coupon codes provided by BlockseBlock.

## 📋 Overview

The Internet Computer Protocol (ICP) is a blockchain network that enables developers to build and deploy decentralized applications. This repository serves as a learning resource for developers who want to deploy their ICP projects to the mainnet using coupon codes for cycles, making the deployment process more accessible.

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- [DFINITY Canister SDK (dfx)](https://sdk.dfinity.org/docs/quickstart/local-quickstart.html)
- [Node.js and npm](https://nodejs.org/)
- A terminal application 

### Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/Shubham-Singh-Shoor/icp-deployment-guide.git
   cd icp-deployment-guide
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🔑 Mainnet Deployment Process

Follow these steps to deploy your ICP project to the mainnet using BlockseBlock coupon codes:

### 1. Create and Use a New Identity

First, create a new identity for deployment:

```bash
dfx identity new <IDENTITY_NAME>
dfx identity use <IDENTITY_NAME>
```

Replace `<IDENTITY_NAME>` with your preferred identity name.

### 2. Redeem Your Coupon Code

Use the coupon code provided by BlockseBlock to obtain cycles necessary for deployment:

```bash
dfx cycles redeem-faucet-coupon COUPON --ic
```

Replace `COUPON` with the actual coupon code you received from BlockseBlock.

### 3. Deploy Your Project

Deploy your project to the Internet Computer mainnet:

```bash
dfx deploy --ic
```

## 📊 Cycle Management

After deployment, you can check your cycle balance with:

```bash
dfx wallet --network ic balance
```

## 🔍 Troubleshooting

### Common Issues

1. **Insufficient Cycles**
   - Ensure your coupon has been successfully redeemed
   - Check your cycle balance before attempting deployment

2. **Deployment Failures**
   - Verify your project builds locally first
   - Check your canister configurations in `dfx.json`

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this guide.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions about coupon codes, please contact BlockseBlock directly.

For technical issues with deployment:
- Open an issue in this repository
- Reach out to the DFINITY community on the [Developer Forum](https://forum.dfinity.org/)

---

Happy deploying! 🎉
