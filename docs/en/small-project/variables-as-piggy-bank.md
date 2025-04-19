---
order: 3
---

# Variables as Piggy Banks

In this exercise series, we will explore the basics of Python programming in a fun and engaging way! In this first part, we’ll learn about variables by thinking of them as piggy banks that can store your pocket money. By the end of this exercise, you’ll be able to use variables in Python to keep track of your money, just like a piggy bank keeps your coins safe.

Let’s talk more about variables in Python. A variable is like a piggy bank where you can store a value, such as your pocket money. For example, you might have 10 dollars in your piggy bank, and you can store that amount in a variable called `pocket_money`. In Python, we can create a variable and assign it a value using the = sign, like this:

```python
pocket_money = 10
```

This should look familiar to you - it’s like labeling your piggy bank! The variable `pocket_money` now holds the value 10, just like your piggy bank holds 10 dollars. You can think of the variable as a name that points to a value, and you can use that name to access or change the value later.

Here’s a simple example of how you can use variables to track your pocket money in Python:

```python
# Create a variable to store your pocket money
pocket_money = 10

# Print how much money you have
print("I have", pocket_money, "dollars in my piggy bank!")

# Add more money to your piggy bank
pocket_money = pocket_money + 5

# Print the new amount
print("After adding 5 more dollars, I now have", pocket_money, "dollars!")
```

This code will print:

```
I have 10 dollars in my piggy bank!
After adding 5 more dollars, I now have 15 dollars!
```

Let’s break down what’s happening in the code:

- First, we create a variable `pocket_money` and set it to 10, just like putting 10 dollars in your piggy bank.
- Then, we print the amount using `print()`.
- Next, we add 5 more dollars to `pocket_money` by using the `+` operator and store the result back in the same variable.
- Finally, we print the updated amount to see the new total.

Now, let’s make it even more fun! You can write a program that starts with an initial amount of pocket money, then asks the user how much money they want to add or spend, and updates the piggy bank accordingly. Here’s the complete code:

```python
# Start with an initial amount in the piggy bank
pocket_money = 20

# Print the starting amount
print("You have", pocket_money, "dollars in your piggy bank.")

# Ask the user how much they want to add
add_money = int(input("How much money do you want to add? "))

# Add the money to the piggy bank
pocket_money = pocket_money + add_money

# Print the new amount
print("After adding, you now have", pocket_money, "dollars in your piggy bank!")

# Ask the user how much they want to spend
spend_money = int(input("How much money do you want to spend? "))

# Spend the money (subtract from the piggy bank)
pocket_money = pocket_money - spend_money

# Print the final amount
print("After spending, you now have", pocket_money, "dollars in your piggy bank!")
```

This code will:

- Start with 20 dollars in the piggy bank.
- Ask the user how much money to add, update the variable, and print the new total.
- Ask the user how much money to spend, subtract it from the variable, and print the final total.

For example, if the user inputs 10 for adding and 5 for spending, the output will be:

```
You have 20 dollars in your piggy bank.
How much money do you want to add? 10
After adding, you now have 30 dollars in your piggy bank!
How much money do you want to spend? 5
After spending, you now have 25 dollars in your piggy bank!
```

**Bonus:** Modify the program to keep track of your pocket money over multiple days. Ask the user for the number of days, and for each day, let them add or spend money. At the end, print the total amount left in the piggy bank. For example, if the user chooses 2 days, adds 10 dollars on day 1, and spends 3 dollars on day 2, the program should show the final amount after both days.

Happy coding!
