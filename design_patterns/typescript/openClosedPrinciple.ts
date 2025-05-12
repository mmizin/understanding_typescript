// The Open/Closed Principle (OCP) states that software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
// This means that the behavior of a module can be extended without modifying its source code.
// This principle is one of the SOLID principles of object-oriented design and is aimed at making software more maintainable and flexible.
// In the example above, we can add new payment methods (like Bitcoin) without modifying the existing code.
// This is achieved by using interfaces or abstract classes, which allow us to define a contract for the behavior we want to implement.
// By adhering to the OCP, we can make our code more modular and easier to maintain.
// This is particularly useful in large applications where changes are frequent and the cost of modifying existing code can be high.
// In summary, the Open/Closed Principle encourages us to design our software in a way that allows for easy extension and modification without changing existing code.
// This leads to better maintainability, flexibility, and scalability in our software design.


interface PaymentMethod1 {
    process(): void;
}

class CreditCardPayment implements PaymentMethod1 {
    process(): void {
        console.log("Processing credit card payment...");
    }
}

class PayPalPayment implements PaymentMethod1 {
    process(): void {
        console.log("Processing PayPal payment...");
    }
}

// New payment method? Just add a class!
class Bitcoin implements PaymentMethod1 {
  process() { /* Bitcoin logic */ }
}

class PaymentProcessor {
    constructor(private paymentMethod: PaymentMethod1) {}

    processPayment() {
        this.paymentMethod.process();
    }   
}

const CreditCard = new CreditCardPayment();
const PayPal = new PayPalPayment();
const paymentProcessor1 = new PaymentProcessor(CreditCard);
const paymentProcessor2 = new PaymentProcessor(PayPal);

paymentProcessor1.processPayment();
paymentProcessor2.processPayment();

