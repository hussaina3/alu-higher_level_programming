#!/usr/bin/python3
Square = __import__('3-square').Square

my_square = Square(3)
print("Area: {} for size: {}".format(my_square.area(), my_square._Square__size))
