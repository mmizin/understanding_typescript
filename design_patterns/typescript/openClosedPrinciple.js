var CreditCardPayment = /** @class */ (function () {
    function CreditCardPayment() {
    }
    CreditCardPayment.prototype.process = function () {
        console.log("Processing credit card payment...");
    };
    return CreditCardPayment;
}());
var PayPalPayment = /** @class */ (function () {
    function PayPalPayment() {
    }
    PayPalPayment.prototype.process = function () {
        console.log("Processing PayPal payment...");
    };
    return PayPalPayment;
}());
// New payment method? Just add a class!
var Bitcoin = /** @class */ (function () {
    function Bitcoin() {
    }
    Bitcoin.prototype.process = function () { };
    return Bitcoin;
}());
var PaymentProcessor = /** @class */ (function () {
    function PaymentProcessor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }
    PaymentProcessor.prototype.processPayment = function () {
        this.paymentMethod.process();
    };
    return PaymentProcessor;
}());
var CreditCard = new CreditCardPayment();
var PayPal = new PayPalPayment();
var paymentProcessor1 = new PaymentProcessor(CreditCard);
var paymentProcessor2 = new PaymentProcessor(PayPal);
paymentProcessor1.processPayment();
paymentProcessor2.processPayment();
