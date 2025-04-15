type investmentData = {
    initioalAmaunt: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number,
}

type investmentResult = {
    totalAmount: number;
    year: string;
    totalContribution: number;
    totalInterest: number;
}

function calculateInvestment(data: investmentData): investmentResult[] | string {
    const { initioalAmaunt, annualContribution, expectedReturn, duration } = data;

    if (initioalAmaunt < 0 || annualContribution < 0 || expectedReturn < 0 || duration <= 0) {
        return "All values must be positive numbers.";
    }

    let total = initioalAmaunt;
    let totalContribution = 0;
    let totalInterestEarned = 0;
    const annualResults: investmentResult[] = [];

    for (let i=0; i < duration; i++) {
        total *= (1 + expectedReturn / 100);
        totalInterestEarned = total - totalContribution - initioalAmaunt;
        totalContribution += annualContribution;

        annualResults.push({
            year: `${i + 1}`,
            totalAmount: total,
            totalContribution: totalContribution,
            totalInterest: totalInterestEarned,
        });
    }

    return annualResults;
}

function displayInvestmentResults(results: investmentResult[]) {
    if (!Array.isArray(results) || results.length === 0){
        throw new Error("No results to display.");
    }
    
    for(const result of results) {
        console.log(`Year: ${result.year}`);
        console.log(`Total Amount: $${result.totalAmount.toFixed(2)}`);
        console.log(`Total Contribution: $${result.totalContribution.toFixed(2)}`);
        console.log(`Total Interest: $${result.totalInterest.toFixed(2)}`);
        console.log('------------------------------');
    }
}

const investmentData: investmentData = {
    initioalAmaunt: 10000,
    annualContribution: 5000,
    expectedReturn: 5,
    duration: 10,
}

const results = calculateInvestment(investmentData);

displayInvestmentResults(results as investmentResult[]);