---
order: 1
---

# Personal Address Book

## Exercise Description

Create a personal contact book program that uses Python dictionaries to store contact information. The program should be able to:

1. Add new contacts (name, phone, email, etc.)
2. Look up information for a specific contact
3. Update existing contact information
4. Delete contacts
5. Display a list of all contacts

This exercise will help you understand how Python dictionaries store and retrieve data using key-value pairs, and how to manipulate this data structure.

## Sample Solution

Here's a personal contact book program:

```python
def contacts_manager():
    # Initialize empty contacts dictionary
    contacts = {}

    print("Welcome to the Personal Contact Book!")
    print("Commands: Add(a), Find(f), Update(u), Delete(d), List(l), Quit(q)")

    while True:
        # Get user command
        command = input("
Enter command: ").lower()

        # Process different commands
        if command == 'q':
            print("Thank you for using the Personal Contact Book! Goodbye!")
            break

        elif command == 'a':
            name = input("Enter contact name: ")
            if not name:
                print("Name cannot be empty.")
                continue

            if name in contacts:
                print(f"'{name}' already exists in the contact book. Use update(u) to modify.")
                continue

            phone = input("Enter phone number: ")
            email = input("Enter email address: ")
            address = input("Enter address: ")

            # Use nested dictionary to store contact details
            contacts[name] = {
                "phone": phone,
                "email": email,
                "address": address
            }

            print(f"Contact '{name}' has been added to the book.")

        elif command == 'f':
            if not contacts:
                print("Contact book is empty.")
                continue

            name = input("Enter the name of the contact to find: ")
            if name in contacts:
                print(f"
Contact Information - {name}:")
                for key, value in contacts[name].items():
                    print(f"{key.capitalize()}: {value}")
            else:
                print(f"Contact '{name}' not found.")

        elif command == 'u':
            if not contacts:
                print("Contact book is empty.")
                continue

            name = input("Enter the name of the contact to update: ")
            if name in contacts:
                print(f"Updating information for '{name}'. Leave blank to keep unchanged.")

                phone = input(f"Phone [{contacts[name]['phone']}]: ")
                email = input(f"Email [{contacts[name]['email']}]: ")
                address = input(f"Address [{contacts[name]['address']}]: ")

                # Only update non-empty inputs
                if phone:
                    contacts[name]['phone'] = phone
                if email:
                    contacts[name]['email'] = email
                if address:
                    contacts[name]['address'] = address

                print(f"Contact '{name}' has been updated.")
            else:
                print(f"Contact '{name}' not found.")

        elif command == 'd':
            if not contacts:
                print("Contact book is empty.")
                continue

            name = input("Enter the name of the contact to delete: ")
            if name in contacts:
                confirm = input(f"Are you sure you want to delete contact '{name}'? (yes/no): ").lower()
                if confirm in ['yes', 'y']:
                    del contacts[name]
                    print(f"Contact '{name}' has been deleted from the book.")
            else:
                print(f"Contact '{name}' not found.")

        elif command == 'l':
            if contacts:
                print("
Contact Book Entries:")
                for index, (name, info) in enumerate(contacts.items(), 1):
                    print(f"{index}. {name} - Phone: {info['phone']}")
            else:
                print("Contact book is empty.")

        else:
            print("Invalid command. Please use: a, f, u, d, l, q")

# Run the contacts manager
contacts_manager()
```

## Discussion

This program demonstrates several operations with Python dictionaries:

1. **Creating a Dictionary**: Using `contacts = {}` to create an empty dictionary.

2. **Adding/Updating Key-Value Pairs**: Using `contacts[name] = {...}` to add contact information to the dictionary.

3. **Accessing Values**: Using `contacts[name]` to access information for a specific contact.

4. **Checking if a Key Exists**: Using `if name in contacts:` to check if a contact already exists.

5. **Deleting Key-Value Pairs**: Using `del contacts[name]` to remove a contact.

6. **Nested Dictionaries**: Each contact's information is itself a dictionary, demonstrating nested use of dictionaries.

7. **Iterating Through a Dictionary**: Using `for name, info in contacts.items():` to go through all contacts.

Dictionaries are powerful data structures in Python that allow for quick lookup of values by key. In real life, this is similar to looking up someone's contact information by their name, rather than browsing through an entire address book.

## Extension Challenges

1. Add grouping functionality to categorize contacts (e.g., family, friends, colleagues)
2. Implement search functionality that can find contacts by partial name or phone number
3. Add birthday reminder functionality
4. Implement import/export functionality, supporting CSV or JSON formats
5. Add storage for contact photos or avatar URLs
