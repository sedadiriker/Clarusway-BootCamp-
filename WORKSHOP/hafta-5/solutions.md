1.  Task : You are given an array of objects representing a collection of employees, each with a name, salary, and department. Your task is to use map, filter, and reduce to calculate the average salary for each department and then return an array of objects containing only the departments that have an average salary above 65000.

    ```js
    const employees = [
      { name: "John", salary: 50000, department: "IT" },
      { name: "Jane", salary: 60000, department: "HR" },
      { name: "Bob", salary: 55000, department: "IT" },
      { name: "Sophie", salary: 75000, department: "HR" },
      { name: "Mike", salary: 65000, department: "IT" },
      { name: "Emily", salary: 80000, department: "HR" },
      { name: "David", salary: 70000, department: "IT" },
    ];
    ```

    ```js
    const ıtSalaryAverage = employees
      .filter((person) => person.department === "IT")
      .map((person) => person.salary)
      .reduce((sum, salary, index, array) => {
        sum += salary;
        if (index === array.length - 1) {
          return sum / array.length;
        } else {
          return sum;
        }
      }, 0);

    const hrSalaryAverage = employees
      .filter((person) => person.department === "HR")
      .map((person) => person.salary)
      .reduce((sum, salary, index, array) => {
        sum += salary;
        if (index === array.length - 1) {
          return sum / array.length;
        } else {
          return sum;
        }
      }, 0);

    if (ıtSalaryAverage > hrSalaryAverage) {
      console.log(`department: 'IT', average: ${Math.trunc(ıtSalaryAverage)}`);
    } else {
      console.log(`department: 'HR', average: ${Math.trunc(hrSalaryAverage)}`);
    }
    ```

2.  You are given an array of objects representing a collection of products, each with a name, price, and category. Your task is to use map, filter, and reduce to calculate the average price of products in each category, and then return an array of objects containing only the categories that have an average price above 50.

    ```js
    const products = [
      { name: "Product 1", price: 20, category: "Electronics" },
      { name: "Product 2", price: 30, category: "Clothes" },
      { name: "Product 3", price: 40, category: "Electronics" },
      { name: "Product 4", price: 50, category: "Clothes" },
      { name: "Product 5", price: 60, category: "Clothes" },
      { name: "Product 6", price: 70, category: "Electronics" },
      { name: "Product 7", price: 80, category: "Clothes" },
      { name: "Product 8", price: 90, category: "Electronics" },
    ];
    ```

    ```js
    const electAverage = products
      .filter((product) => product.category === "Electronics")
      .map((product) => product.price)
      .reduce((total, price, index, array) => {
        total += price;
        if (index === array.length - 1) {
          return total / array.length;
        } else {
          return total;
        }
      }, 0);
    const clothAverage = products

      .filter((product) => product.category === "Clothes")
      .map((product) => product.price)
      .reduce((total, price, index, array) => {
        total += price;
        if (index === array.length - 1) {
          return total / array.length;
        } else {
          return total;
        }
      }, 0);

    if (electAverage > clothAverage) {
      console.log(`category: 'Electronics', average: ${electAverage}`);
    } else if (clothAverage > electAverage) {
      console.log(`category: 'Clothes', average: ${clothAverage}`);
    } else {
      console.log([
        { category: "Clothes", average: electAverage },
        { category: "Electronics", average: clothAverage },
      ]);
    }
    ```
