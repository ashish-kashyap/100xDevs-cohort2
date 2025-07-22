function calculateTotalSpentByCategory(transactions) 
{
    const categoryTotal = {};
    transactions.forEach(transaction => {
        const {category, price} = transaction

    if(categoryTotal[category])
    {
        categoryTotal[category] += price;
    }
    else
    {
        categoryTotal[category] = price
    }
    });

    const result = Object.keys(categoryTotals).map(category => ({
        [category]: categoryTotals[category]
    }));
    
    return [];
}
  
module.exports = calculateTotalSpentByCategory;