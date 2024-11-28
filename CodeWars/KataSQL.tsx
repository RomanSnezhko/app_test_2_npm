/*
8 On the Canadian Border (SQL for Beginners #2)

You are a border guard sitting on the Canadian border. You were given a list of travelers who have arrived at your gate today. You know that American, Mexican, and Canadian citizens don't need visas, so they can just continue their trips. You don't need to check their passports for visas! You only need to check the passports of citizens of all other countries!

Select names, and countries of origin of all the travelers, excluding anyone from Canada, Mexico, or The US.

travelers table schema

name
country
NOTE: The United States is written as 'USA' in the table.

NOTE: Your solution should use pure SQL. Ruby is used within the test cases just to validate your answer.
*/
select * from travelers where not country in ('Mexico', 'Canada', 'USA') ;

/*
8 est-Selling Books (SQL for Beginners #5)
\ou work at a book store. It's the end of the month, and you need to find out the 5 bestselling books at your store. Use a select statement to list names, authors, and number of copies sold of the 5 books which were sold most.

books table schema

name
author
copies_sold
NOTE: Your solution should use pure SQL. Ruby is used within the test cases just to validate your answer.

*/

select * from books order by copies_sold desc limit 5;

/*
8 kyu SQL Basics: Mod

Description:

Given the following table 'decimals':

** decimals table schema **

id
number1
number2
Return a table with one column (mod) which is the output of number1 modulus number2.

Solution:
*/
select (number1 % number2) as mod from decimals;xx
/*
6 kyu Youngest Team Member

Description:

You are working with a database that stores information about employees in a tech firm. The database includes a table named employees with the following columns:

employee_id: A unique integer identifier for each employee.
full_name: A string representing the employee's full name.
team: A string that specifies which team the employee is part of. The team can be one of the following four: "backend", "frontend", "devops", or "design".
birth_date: A date that represents the employee's birthdate.
The company is planning an event where the youngest employee from each team will be given a chance to share their vision of future technology trends.

Your task is to write an SQL query that retrieves the complete record for the youngest member of each team. You should consider the person with the latest birthdate as the youngest. Let's assume for this task that the are no youngest employees who share the same birthdate.

The classical solution of using aggregate function and group by is forbidden. Can you come up with something more witty?

The result should be ordered by team in asc alphabetical order.

Good luck!

Solution:
*/
select distinct on (team) employee_id, full_name, team, birth_date
from employees
order by team, birth_date desc
/*
7 kyu

Description:



Solution:
*/

/*
7 kyu

Description:



Solution:
*/

/*
7 kyu

Description:



Solution:
*/

/*
7 kyu

Description:



Solution:
*/

/*
7 kyu

Description:



Solution:
*/

/*
7 kyu

Description:



Solution:
*/

/*
7 kyu

Description:



Solution:
*/

/*
7 kyu

Description:



Solution:
*/