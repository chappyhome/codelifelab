---
order: 2
---

# Input/Output → Your First Chatbot (Simple Q&A)

Welcome back to our Python adventure! In Part 1, we learned how variables are like piggy banks. Now, in Part 2, we'll explore how Python programs can talk to the user using Input and Output. We'll build a very simple chatbot that can ask questions and respond based on your answers. By the end, you'll understand how to get information _into_ your program (Input) and how to display information _out_ (Output).

Let's dive into Input and Output in Python. Think of it like having a conversation. Your program needs a way to ask questions or get information from the user – that's **Input**. It also needs a way to show messages, results, or responses back to the user – that's **Output**.

In Python, we commonly use the `input()` function to get input from the user and the `print()` function to display output.

- **`input()`**: This function pauses your program and waits for the user to type something and press Enter. Whatever the user types is returned as a string (text). You can include a message inside the parentheses to prompt the user, like `input("What's your name? ")`.
- **`print()`**: This function displays values, text, or variable contents to the console. You can print simple messages like `print("Hello there!")` or combine text and variables like we did in Part 1.

Here’s a simple example of a chatbot that asks for your name and favorite color:

```python
# Ask the user for their name
user_name = input("Hi! What's your name? ")

# Greet the user by name
print("Nice to meet you,", user_name + "!")

# Ask the user for their favorite color
fav_color = input("What's your favorite color? ")

# Respond about the color
print(fav_color + " is a great color!")

# A simple farewell
print("Thanks for chatting!")
```

This code will have an interaction like this (user input is shown after the question):

```
Hi! What's your name? Alex
Nice to meet you, Alex!
What's your favorite color? Blue
Blue is a great color!
Thanks for chatting!
```

Let’s break down the code:

- First, we use `input()` to ask for the user's name and store the response in the `user_name` variable.
- Then, we use `print()` to greet the user, combining the text "Nice to meet you, " with the value stored in `user_name`. Notice the `+` sign is used here to join strings together.
- Next, we use `input()` again to ask for the favorite color and store it in `fav_color`.
- We then use `print()` to comment on the color, again joining the variable `fav_color` with other text.
- Finally, a simple `print()` statement says goodbye.

Now, let's make a slightly more interactive Q&A bot. This one will ask a simple question and give different responses based on the answer.

```python
# Ask a simple question
answer = input("What is the capital of France? ")

# Check the answer (case-insensitive)
if answer.lower() == "paris":
    print("Correct! Well done.")
else:
    print("Not quite. The answer is Paris!")

# Ask another question
food_answer = input("Do you like pizza? (yes/no) ")

# Respond based on the food answer
if food_answer.lower() == "yes":
    print("Me too! Pizza is awesome.")
elif food_answer.lower() == "no":
    print("Oh, okay. More pizza for me then!")
else:
    print("That wasn't a clear yes or no, but thanks for sharing!")

print("Chat finished!")
```

This code will:

- Ask for the capital of France using `input()`.
- Use an `if/else` statement to check the answer. We use `.lower()` to convert the user's input to lowercase, so it doesn't matter if they type "Paris", "paris", or "PARIS".
- Print one message if the answer is correct and another if it's wrong.
- Ask a second question about pizza.
- Use an `if/elif/else` structure to respond differently to "yes", "no", or any other input.

Example interaction:

```
What is the capital of France? paris
Correct! Well done.
Do you like pizza? (yes/no) YES
Me too! Pizza is awesome.
Chat finished!
```

**Bonus:** Modify the chatbot program. Add more questions! Can you make it ask the user's age and respond differently if they are younger or older than a certain age? Remember you might need to convert the input age (which is a string) to a number using `int()` like we did in Part 1 with `pocket_money`.

Happy coding!
