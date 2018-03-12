import ExpenseApi from './mockExpensesApi';
import {CURRENCIES, EXPENSE_TITLES} from './expenseDefinitions';


describe('Mock Expenses API', () => {
    const newExpense = {
        id: "donostia_1",
        tripId: "donostia",
        payUsers: ["paty"],
        amount: 30,
        currency: CURRENCIES.EUR,
        title: EXPENSE_TITLES.DRINKS,
        description: "afternoon beers"
    };

    const existingExpense = {
        id: "donostia_0",
        tripId: "donostia",
        payUsers: ["paty"],
        amount: 30,
        currency: CURRENCIES.EUR,
        title: EXPENSE_TITLES.DRINKS,
        description: "afternoon beers"
    };

    it('Should load all expenses', () => {
        ExpenseApi.getAllExpenses().then( expenses => {
            expect(expenses.length).toBeGreaterThan(0);        
        });
    });

    it('Should filter all the expenses of a certain trip', () => {
        let totalExpenses = 0;
        ExpenseApi.getAllExpenses().then( expenses => {
            totalExpenses = expenses.length;
            expect(totalExpenses).toBeGreaterThan(0);        
        });
        ExpenseApi.getExpensesByTrip("indonesia").then( expenses => {
            expect(expenses.length).toBeLessThan(totalExpenses);
            expect(expenses.length).toEqual(1);
        });
    });

    it('Should save a new expense', () => {
        ExpenseApi.getAllExpenses().then( expenses => {
            const expensesLength = expenses.length;
            expect(expensesLength).toBeGreaterThan(0);
            ExpenseApi.saveExpense(newExpense).then(expenses => {
                expect(expenses.length).toEqual((expensesLength+1));
            });   
        });
    });

    
    it('Should not save a duplicated expense', () => {
        ExpenseApi.getAllExpenses().then( expenses => {
            const expensesLength = expenses.length;
            expect(expensesLength).toBeGreaterThan(0);           
            ExpenseApi.saveExpense(newExpense).then( expenses => {
                expect(expenses.length).toEqual((expensesLength+1));
                ExpenseApi.saveExpense(existingExpense).then( expenses => {
                    expect(expenses.length).toEqual((expensesLength+1));
                });
            }).catch(error => {
                expect(error).toEqual(`The ID donostia_1 for this expense already exists in the DB`);
            });
        });        
    });
});