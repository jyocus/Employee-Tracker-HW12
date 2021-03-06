DROP DATABASE IF EXISTS employee_DB;
CREATE DATABASE employee_DB;

/* designating which database to use*/
USE employee_DB;

CREATE TABLE Department (
    id INT NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE emp_role(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
);

--Inserting Seeds--
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Justin', 'Yocus', '1', '1');
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Kyle', 'Kashius', '2', '3');
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Stefanie', 'Newmark', '3', '2');

