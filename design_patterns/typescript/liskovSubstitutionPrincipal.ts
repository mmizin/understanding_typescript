// If T is a generic type, it can be used in the same way as any other type.
// The only difference is that T is a placeholder for a type that will be specified later.      
// This allows you to create functions, classes, or interfaces that can work with any type, while still providing type safety.
// For example, you can create a generic function that takes an array of any type and returns the first element of that array:

abstract class PaymentMethod {
    addMethod(paymentDetails: object): void {
        console.log("Adding payment method...");
    }

    deleteMethod(): void {
        console.log("Deleting payment method...");
    }

}

class CreditCard1 extends PaymentMethod {
    protected cardNumbers: [object];

    constructor() {
        super();
    }
    
    addMethod(paymentDetails: object): void {
        console.log("Adding credit card payment method...");
        this.cardNumbers.push(paymentDetails);
    }
    deleteMethod(): void {
        console.log("Deleting credit card payment method...");
        this.cardNumbers.pop();
    }
}

function processPayment<T extends PaymentMethod>(paymentMethod: T): void {
    paymentMethod.addMethod({ cardNumber: "1234-5678-9012-3456" });
    paymentMethod.deleteMethod();
}