import ExpenseApi from './mockExpensesApi';
import {CURRENCIES, EXPENSE_TITLES} from './expenseDefinitions';


describe('Mock Expenses API', () => {
    it('Should load all expenses', () => {
        ExpenseApi.getAllExpenses().then( expenses => {
            expect(expenses.length).toBeGreaterThan(0);        
        });
    });

    it('Should save a new expense', () => {
        const newExpense = {
            id: "donostia_0",
            tripId: "donostia",
            payUsers: ["paty"],
            amount: 30,
            currency: CURRENCIES.EUR,
            title: EXPENSE_TITLES.DRINKS,
            description: "afternoon beers"
        };

        ExpenseApi.saveExpense(newExpense).then(expenses => {
            expect(expenses.length).toEqual(1);
            console.log(expenses);
            //expect(expenses).toBeUndefined();
        });
    });

    /*
    it('Should not save a duplicated expense', () => {
        const newExpense = {
            id: "donostia_0",
            tripId: "donostia",
            payUsers: ["paty"],
            amount: 30,
            currency: CURRENCIES.EUR,
            title: EXPENSE_TITLES.DRINKS,
            description: "afternoon beers"
        };

        ExpenseApi.getAllExpenses().then( expenses => {
            expect(expenses.length).toEqual(1);            
            ExpenseApi.saveExpense(newExpense).then( expenses => {
                expect(expenses.length).toEqual(1);
            }).catch(error => {
                //expect(error).toEqual(`The ID donostia_0 for this expense doesn't exist in the DB`);
                throw(error);
            });
        });        
    });
    */
});