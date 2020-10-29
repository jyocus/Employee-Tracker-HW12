var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');


// Connection info for the sql db
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_DB"
  });
  
  // connect to the mysql server and sql database
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // run the start function after the connection is made to prompt the user
    start();
  });

function start(){
 inquirer.prompt({
     name: 'startQuestions',
     message: 'What would you like to do?',
     type: 'list',
     choices: ['Add Department', 'Add Role', 'Add Employee', 'View Department', 'View Role', 'View Employee', 'Update Employee Roles']
     
 }).then (answer =>{
    //  console.log(response.startQuestions);
    // Instead of writing a bunch of if/else using a switch statement to lead the user to a different function based on what they want to do
    switch (answer.startQuestions) {
        case 'Add Department':
            addDepartment()
            break;
        case 'Add Role':
            addRole()
            break;
        case 'Add Employee':
            addEmployee()
            break;
        case 'View Department':
            viewDepartment()
            break;
        case 'View Role':
            viewRole()
            break;
        case 'View Employee':
            viewEmployee()
            break;
        case 'Update Employee Roles':
            updateRoles()
            break;

    }
 })
}

function addDepartment(){
    console.log('working');
inquirer.prompt({
    name: 'addDepartment',
    message:'What is the department you would like to add?',
    type: 'input'

//.then promise and mysql to add new department from user input to table
}).then(answer => {
    connection.query("INSERT INTO Department SET ?",
    {
        dept_name: answer.addDepartment
    },
    function(err, res){
        console.log(res);
        start();
    }
    );
})
}
//Receiving Parse Error
function addRole(){
    console.log('working');
inquirer.prompt([
    {
    name: 'roleTitle',
    message:'What is the role you would like to add?',
    type: 'input'
    },
    {
    name: 'roleSalary',
    message: 'What is the salary for this role?',
    type: 'number'
    },
    {
    name: 'deptID',
    message: 'What is the department ID?',
    type: 'number'
    }
//.then promise and mysql to add new role from user input to table
]).then(answer => {
    connection.query("INSERT INTO emp_role SET ?",
    {
        title: answer.roleTitle,
        salary: answer.roleSalary,
        department_id: answer.deptID
    },
    function(err, res){
        console.log(res);
        start();
    }
    );

})
}
//Receiving Parse Error
function addEmployee(){
    console.log('working');
inquirer.prompt([
    {
    name: 'firstName',
    message:'What is the first name of the employee?',
    type: 'input'
    },
    {
    name: 'lastName',
    message: 'What is the last name of the employee?',
    type: 'input'
    },
    {
    name: 'roleID',
    message: 'What is the role ID?',
    type: 'number'
    },
    {
    name:'managerID',
    message:'What is the Manager ID (you can leave blank if N/A)',
    type:'number'
    }
//.then promise and mysql to add new employee from user input to table
]).then(answer => {
    connection.query("INSERT INTO employee SET ?",
    {
        first_name: answer.firstName,
        last_name: answer.lastName,
        role_id: answer.roleID,
        manager_id: answer.managerID
    },
    function(err, res){
        console.log(res);
        start();
    }
    );

})
}

function viewDepartment(){
    connection.query("SELECT * FROM Department"), function(err,res){
        console.log(res);
        start();
    }
}

function viewRole(){
    connection.query("SELECT * FROM emp_role"), function(err,res){
        console.log(res);
        start();
    }
}

function viewEmployee(){
    connection.query("SELECT * FROM employee"), function(err,res){
        console.log(res);
        start();
    }
}




  //Psuedo Code (Referencing the GreatBay class activity, mostly applicable here):
//   1. Create a file and create package.json with npm init -y
// 2. Then npm I inquirer mysql
// 3. Require inquirer and mysql in the top of your file
// 4. Initialize the connection
// 5. Inquirer prompt and .then promise 
// 6. If/else based on the user answers 
// 7. Functions for each answer and then call those functions in the if/else 
// 8. Need to push the data to mysql so the data is persistent 
// 9. Create a function for init or start and the entire inquirer goes in that function
// 10. Call the start or init function after the connection so the questions don’t come up before the connection is established
// 11. Function for add item and pass the question names as arguments to make sure their scope is passed down - connection.query(‘INSERT INTO tablename (item_name, category, starting_bid, highest_bid) VALUES (${itemName}, ${itemCategory), ${price}, ${price}) )`)  — make sure there are quotes around values that should be strings
