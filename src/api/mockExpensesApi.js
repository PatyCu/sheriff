import delay from './delay';
import {setTimeout} from 'timers';

const EXPENSE_TITLES = {
    TICKETS: "tickets",
    HOTEL: "hotel",
    TRANSPORTATION: "transportation",
    LUNCH: "lunch",
    DRINKS: "drinks",
    GAZ: "gaz"
};

const CURRENCIES = {
    EUR: "€",
    USD: "$",
    GBP: "£"
};

const expenses = [
    {
        id: "donostia_0",
        tripId: "donostia",
        payUsers: ["paty", "thor","ryan"],
        amount: 100,
        currency: CURRENCIES.EUR,
        title: EXPENSE_TITLES.TRANSPORTATION,
        description: "plane tickets Bcn - Lisboa"
    }
];

const generateId = (expense) => {
    return (expense.tripId + "_" + expenses.length);
};

class ExpenseApi {

    static getAllExpenses() {
        return new Promise ( (resolve, reject) => {
            setTimeout( () => {
                resolve(Object.assign([], expenses));
                if (expenses.length == 0) {
                    reject(`No expenses to load`);
                }
            }, delay);
        });
    }

    static saveExpense(expense) {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                if (expense.id) {
                    const existingExpenseIndex = expenses.findIndex(a => a.id == expense.id);
                    if (existingExpenseIndex > -1) {
                        expenses.splice(existingExpenseIndex, 1, expense);
                    } else {
                        reject(`The ID ${expense.id} for this expense doesn't exist in the DB`);                    
                    }
                } else {
                    expense.id = generateId(expense);
                    const existingExpenseIndex = expenses.findIndex(a => a.id == expense.id);
                    if (existingExpenseIndex > -1) {
                        reject(`The ID ${expense.id} for this expense already exists in the DB`);                                        
                    }

                    expenses.push(expense);
                }

                resolve(Object.assign({}, expense));
            }, delay);
        });
    }
}

export default ExpenseApi;
