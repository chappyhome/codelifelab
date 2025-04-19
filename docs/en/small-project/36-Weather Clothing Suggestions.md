---
order: 1
---

# Weather Clothing Suggestions

This exercise is all about using Python’s if-else statements to make decisions based on conditions. In this problem, we’ll create a program that suggests what to wear based on the weather temperature. By the end, you’ll understand how to use conditional statements to make your programs smarter and more interactive!

### Solution

Here’s a solution to create a program that takes a temperature (in Celsius) as input and suggests appropriate clothing based on the temperature:

```python
# Ask the user for the temperature
temperature = int(input("Enter the temperature in Celsius: "))

# Use if-else to suggest clothing
if temperature >= 25:
    print("It's hot! Wear a t-shirt and shorts.")
elif temperature >= 15:
    print("It's warm. A light jacket and jeans are fine.")
elif temperature >= 5:
    print("It's chilly. Wear a sweater and a coat.")
else:
    print("It's freezing! Put on a heavy coat, scarf, and gloves.")
```

### How it works

We start by asking the user to input a temperature using `input()`. Since `input()` returns a string, we convert it to an integer with `int()` to use it in comparisons.

We use `if`, `elif`, and `else` statements to check the temperature and suggest clothing:

- If the temperature is 25°C or higher, it’s hot, so we suggest light clothing.
- If it’s between 15°C and 24°C, it’s warm, so a light jacket is enough.
- If it’s between 5°C and 14°C, it’s chilly, so a sweater and coat are recommended.
- If it’s below 5°C, it’s freezing, so heavy winter clothing is needed.

The program prints a suggestion based on the first condition that matches.

Try running the code! For example, if you input `20`, the output will be:

```
It's warm. A light jacket and jeans are fine.
```

### Extra

Here are some ideas to make the program even better:

- Add a check to ensure the input is a valid number (e.g., handle cases where the user enters letters).
- Include more conditions, like suggesting an umbrella if it’s raining (ask the user for rain status as a second input).
- Allow the user to input the temperature in Fahrenheit and convert it to Celsius before making suggestions.

Happy coding!
