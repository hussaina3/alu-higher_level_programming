#!/usr/bin/python3
Square = __import__('6-square').Square

my_square = Square(3, (1, 1))
print(my_square)

my_square.size = 2
my_square.position = (3, 2)
print(my_square)
