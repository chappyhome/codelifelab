---
order: 1
---

# 字典：个人通讯录

## 练习描述

创建一个个人通讯录程序，使用Python字典来存储联系人信息。程序应该能够：

1. 添加新联系人（姓名、电话、电子邮件等）
2. 查找特定联系人的信息
3. 更新现有联系人的信息
4. 删除联系人
5. 显示所有联系人列表

这个练习将帮助您理解Python字典如何使用键值对存储和检索数据，以及如何操作这种数据结构。

## 示例解决方案

以下是一个个人通讯录程序：

```python
def contacts_manager():
    # 初始化空通讯录（字典）
    contacts = {}

    print("欢迎使用个人通讯录！")
    print("命令: 添加(a), 查找(f), 更新(u), 删除(d), 列表(l), 退出(q)")

    while True:
        # 获取用户命令
        command = input("
请输入命令: ").lower()

        # 处理不同的命令
        if command == 'q':
            print("谢谢使用个人通讯录！再见！")
            break

        elif command == 'a':
            name = input("请输入联系人姓名: ")
            if not name:
                print("姓名不能为空。")
                continue

            if name in contacts:
                print(f"'{name}'已存在于通讯录中。如需更新，请使用更新(u)命令。")
                continue

            phone = input("请输入电话号码: ")
            email = input("请输入电子邮件: ")
            address = input("请输入地址: ")

            # 使用嵌套字典存储联系人详细信息
            contacts[name] = {
                "phone": phone,
                "email": email,
                "address": address
            }

            print(f"联系人'{name}'已添加到通讯录。")

        elif command == 'f':
            if not contacts:
                print("通讯录为空。")
                continue

            name = input("请输入要查找的联系人姓名: ")
            if name in contacts:
                print(f"
联系人信息 - {name}:")
                for key, value in contacts[name].items():
                    print(f"{key.capitalize()}: {value}")
            else:
                print(f"未找到联系人'{name}'。")

        elif command == 'u':
            if not contacts:
                print("通讯录为空。")
                continue

            name = input("请输入要更新的联系人姓名: ")
            if name in contacts:
                print(f"正在更新'{name}'的信息。留空表示保持不变。")

                phone = input(f"电话号码 [{contacts[name]['phone']}]: ")
                email = input(f"电子邮件 [{contacts[name]['email']}]: ")
                address = input(f"地址 [{contacts[name]['address']}]: ")

                # 仅更新非空输入
                if phone:
                    contacts[name]['phone'] = phone
                if email:
                    contacts[name]['email'] = email
                if address:
                    contacts[name]['address'] = address

                print(f"联系人'{name}'的信息已更新。")
            else:
                print(f"未找到联系人'{name}'。")

        elif command == 'd':
            if not contacts:
                print("通讯录为空。")
                continue

            name = input("请输入要删除的联系人姓名: ")
            if name in contacts:
                confirm = input(f"确定要删除联系人'{name}'吗？(是/否): ").lower()
                if confirm in ['是', 'y', 'yes']:
                    del contacts[name]
                    print(f"联系人'{name}'已从通讯录中删除。")
            else:
                print(f"未找到联系人'{name}'。")

        elif command == 'l':
            if contacts:
                print("
通讯录联系人列表:")
                for index, (name, info) in enumerate(contacts.items(), 1):
                    print(f"{index}. {name} - 电话: {info['phone']}")
            else:
                print("通讯录为空。")

        else:
            print("无效命令。请使用以下命令: a, f, u, d, l, q")

# 运行通讯录管理器
contacts_manager()
```

## 讨论

这个程序展示了Python字典的多种操作：

1. **创建字典**：使用`contacts = {}`创建一个空字典。

2. **添加/更新键值对**：使用`contacts[name] = {...}`将联系人信息添加到字典中。

3. **访问值**：使用`contacts[name]`访问特定联系人的信息。

4. **检查键是否存在**：使用`if name in contacts:`检查联系人是否已存在。

5. **删除键值对**：使用`del contacts[name]`删除联系人。

6. **嵌套字典**：每个联系人的信息本身就是一个字典，展示了字典的嵌套使用。

7. **遍历字典**：使用`for name, info in contacts.items():`遍历所有联系人。

字典是Python中非常强大的数据结构，允许通过键快速查找值。在现实生活中，这类似于通过人名快速找到他们的联系方式，而不必浏览整个通讯录。

## 扩展挑战

1. 添加分组功能，将联系人分类（如家人、朋友、同事等）
2. 实现搜索功能，可以通过部分姓名或电话号码查找联系人
3. 添加生日提醒功能
4. 实现导入/导出功能，支持CSV或JSON格式
5. 添加联系人照片或头像的URL存储
