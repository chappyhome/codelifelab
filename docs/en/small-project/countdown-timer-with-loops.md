---
order: 4
---

# Countdown Timer with Loops

## Exercise Description

Create an automatic countdown timer program using loop structures. The program should be able to:

1. Ask the user for the number of seconds to count down
2. Count down from the specified number to zero
3. Display the current time remaining each second
4. Show a notification when the countdown ends

This exercise will help you understand how loop structures in Python (for loops and while loops) repeat blocks of code until a specific condition is met.

## Sample Solution

Here are two versions of the countdown timer program, implemented using both for loops and while loops:

### For Loop Version

```python
import time

def countdown_timer_for():
    print("Welcome to the Countdown Timer!")

    # Get user input for countdown seconds
    try:
        seconds = int(input("Enter the number of seconds to count down: "))
        if seconds < 0:
            print("Please enter a positive number!")
            return
    except ValueError:
        print("Please enter a valid integer!")
        return

    print(f"Starting {seconds} second countdown...")

    # Implement countdown using a for loop
    for remaining in range(seconds, -1, -1):
        # Clear the current line and show remaining time
        print(f"\rCountdown: {remaining} seconds ", end="")

        # Wait for 1 second if not the last second
        if remaining > 0:
            time.sleep(1)

    # Countdown finished
    print("\nTime's up!")

# Run the for loop version of the countdown timer
countdown_timer_for()
```

### While Loop Version

```python
import time

def countdown_timer_while():
    print("Welcome to the Countdown Timer!")

    # Get user input for countdown seconds
    try:
        seconds = int(input("Enter the number of seconds to count down: "))
        if seconds < 0:
            print("Please enter a positive number!")
            return
    except ValueError:
        print("Please enter a valid integer!")
        return

    print(f"Starting {seconds} second countdown...")

    # Implement countdown using a while loop
    remaining = seconds
    while remaining >= 0:
        # Clear the current line and show remaining time
        print(f"\rCountdown: {remaining} seconds ", end="")

        # Wait for 1 second if not the last second
        if remaining > 0:
            time.sleep(1)

        # Decrease remaining time
        remaining -= 1

    # Countdown finished
    print("\nTime's up!")

# Run the while loop version of the countdown timer
countdown_timer_while()
```

## Discussion

This program demonstrates the use of two main loop structures in Python:

1. **For Loop**: Useful when you know the number of times the loop needs to execute. In our example, `range(seconds, -1, -1)` creates a sequence from `seconds` down to `0` in reverse order, and the loop executes once for each value.

2. **While Loop**: Useful when you need to loop until a certain condition is met. In our example, the loop continues as long as `remaining >= 0`.

Key differences between the implementations:

- The for loop automatically handles decrementing the counter
- The while loop requires us to manually update the counter (`remaining -= 1`)

Loops are fundamental control structures in programming that allow programs to repeat blocks of code, which is useful for countdowns, batch processing data, or any task that requires repetition.

## Extension Challenges

1. Add minutes and hours functionality, formatting the display as "HH:MM:SS"
2. Implement pause and resume functionality
3. Add a progress bar to visualize the countdown
4. Create multiple parallel countdown timers
5. Play a sound or display a notification when the countdown ends
