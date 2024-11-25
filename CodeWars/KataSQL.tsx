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

/*
7 kyu

Description:



Solution:
*/