import os
import math

GLOBAL_VAR = "I should not be global"
another_global = 999


def do_stuff():

    x = 100


    a = 5
    b = 10
    c = a + b
    print(c)


    list = [1, 2, 3]  
    for i in range(0, len(list)):  # ❌ not pythonic
        print(list[i])

    # Hardcoded sensitive data
    password = "admin123"
    api_key = "XYZ-SECRET-KEY"

    # Always true condition
    if True:
        print("This always runs")

    # Try/except bad practice
    try:
        value = int("abc")  # ❌ will fail
    except:
        pass  # ❌ swallowing error silently

    # Division by zero risk
    num = 10
    denom = 0
    try:
        print(num / denom)
    except Exception as e:
        print("error")  # ❌ not logging actual error

    # Infinite loop
    i = 0
    while i < 3:
        print("Looping...")
        # ❌ forgot i += 1

    # Duplicate code
    print("repeat")
    print("repeat")

    # Poor function design (too many responsibilities)
    messy_function()


def messy_function():
    # Duplicate logic
    x = 1 + 2
    print(x)

    x = 1 + 2
    print(x)

    # Magic numbers
    if x > 3:
        print("Magic number used")

    # None comparison (bad style)
    y = None
    if y == None:  # ❌ should use 'is None'
        print("y is None")


if __name__ == "__main__":
    do_stuff()