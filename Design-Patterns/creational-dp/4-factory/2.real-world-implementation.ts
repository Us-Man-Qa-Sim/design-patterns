abstract class PaymentProcessor {
  constructor(public amount: number) {}
  abstract processPayment(): void;
}

class PaypalProcessor extends PaymentProcessor {
  processPayment(): void {
    console.log("Payment through Paypal Processor", this.amount);
  }
}

class StripeProcessor extends PaymentProcessor {
  processPayment(): void {
    console.log("Payment through Stripe Processor", this.amount);
  }
}

class BankTransferProcessor extends PaymentProcessor {
  processPayment(): void {
    console.log("Payment through BankTransfer Processor", this.amount);
  }
}

class PaymentProcessorFactory {
  createProcessor(
    type: "paypal" | "stripe" | "bank-transfer",
    amount: number
  ): PaymentProcessor {
    switch (type) {
      case "paypal":
        return new PaypalProcessor(amount);

      case "stripe":
        return new StripeProcessor(amount);

      case "bank-transfer":
        return new BankTransferProcessor(amount);

      default:
        throw new Error("Invalid option");
    }
  }
}

const paymentProcessorFactory = new PaymentProcessorFactory();
const stripeFactory = paymentProcessorFactory.createProcessor("stripe", 100);
stripeFactory.processPayment();

const paypalFactory = paymentProcessorFactory.createProcessor("paypal", 200);
paypalFactory.processPayment();

const bankTransferFactory = paymentProcessorFactory.createProcessor(
  "bank-transfer",
  300
);
bankTransferFactory.processPayment();
