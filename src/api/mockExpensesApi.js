import delay from './delay';
import {setTimeout} from 'timers';
import {CURRENCIES, EXPENSE_TITLES} from './expenseDefinitions';


const expenses = [
    {
        id: "donostia_0",
        tripId: "Donostia",
        payUsers: ["paty", "thor","ryan"],
        amount: 100,
        currency: CURRENCIES.EUR,
        title: EXPENSE_TITLES.TRANSPORTATION,
        description: "plane tickets Bcn - Lisboa"
    },
    {
        id: "donostia_1",
        tripId: "Donostia",
        payUsers: ["paty"],
        amount: 30,
        currency: CURRENCIES.EUR,
        title: EXPENSE_TITLES.DRINKS,
        description: "afternoon beers"
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
