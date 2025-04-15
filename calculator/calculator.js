function calculateInvestment(data) {
    var initioalAmaunt = data.initioalAmaunt, annualContribution = data.annualContribution, expectedReturn = data.expectedReturn, duration = data.duration;
    if (initioalAmaunt < 0 || annualContribution < 0 || expectedReturn < 0 || duration <= 0) {
        return "All values must be positive numbers.";
    }
    var total = initioalAmaunt;
    var totalContribution = 0;
    var totalInterestEarned = 0;
    var annualResults = [];
    for (var i = 0; i < duration; i++) {
        total *= (1 + expectedReturn / 100);
        totalInterestEarned = total - totalContribution - initioalAmaunt;
        totalContribution += annualContribution;
        annualResults.push({
            year: "".concat(i + 1),
            totalAmount: total,
            totalContribution: totalContribution,
            totalInterest: totalInterestEarned,
        });
    }
    return annualResults;
}
function displayInvestmentResults(results) {
    if (!Array.isArray(results) || results.length === 0) {
        throw new Error("No results to display.");
    }
    for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
        var result = results_1[_i];
        console.log("Year: ".concat(result.year));
        console.log("Total Amount: $".concat(result.totalAmount.toFixed(2)));
        console.log("Total Contribution: $".concat(result.totalContribution.toFixed(2)));
        console.log("Total Interest: $".concat(result.totalInterest.toFixed(2)));
        console.log('------------------------------');
    }
}
var investmentData = {
    initioalAmaunt: 10000,
    annualContribution: 5000,
    expectedReturn: 5,
    duration: 10,
};
var results = calculateInvestment(investmentData);
displayInvestmentResults(results);
