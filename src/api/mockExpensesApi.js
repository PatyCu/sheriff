import delay from './delay';
import {setTimeout} from 'timers';
import {CURRENCIES, EXPENSE_TITLES} from './expenseDefinitions';


const expenses = [
    {
        id: "donostia_0",
        tripId: "donostia",
        payUsers: ["paty", "thor","ryan"],
        amount: 100,
        currency: CURRENCIES.EUR,
        title: EXPENSE_TITLES.TRANSPORTATION,
        description: "plane tickets Bcn - Lisboa"
    },
    {
        id: "donostia_1",
        tripId: "donostia",
        payUsers: ["paty"],
        amount: 30,
        currency: CURRENCIES.EUR,
        title: EXPENSE_TITLES.DRINKS,
        description: "afternoon beers"
    },
    {
        id: "indonesia_0",
        tripId: "indonesia",
        payUsers: ["paty"],
        amount: 1200,
        currency: CURRENCIES.EUR,
        title: EXPENSE_TITLES.TRANSPORTATION,
        description: "plain tickets, return trip Barcelona - Bali"
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

    static getExpensesByTrip(tripId) {
        return new Promise ( (resolve, reject) => {
            setTimeout( () => {
                const tripExpenses = expenses.filter(expense => expense.tripId == tripId);
                resolve(Object.assign([], tripExpenses));
                if(tripExpenses.length == 0){
                    reject(`No expenses to load`);
                }
            }, delay);
        });
    }

    static saveExpense(expense) {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                if (!expense.id){
                    expense.id = generateId(expense);                    
                } 
                const existingExpenseIndex = expenses.findIndex(a => a.id == expense.id);
                if (existingExpenseIndex > -1) {
                    reject(`The ID ${expense.id} for this expense already exists in the DB`);                                        
                }  else {
                    expenses.push(expense);       
                }              

                resolve(Object.assign([], expenses));
            }, delay);
        });
    }
}

export default ExpenseApi;
