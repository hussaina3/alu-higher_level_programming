#!/usr/bin/python3
"""Module that defines a Square with size validation and area method."""


class Square:
    """Represents a square with a private size attribute."""

    def __init__(self, size=0):
        """Initialize the square.

        Args:
            size (int): The size of the square.

        Raises:
            TypeError: If size is not an integer.
            ValueError: If size is less than 0.
        """
        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        if size < 0:
            raise ValueError("size must be >= 0")
        self.__size = size

    def area(self):
        """Return the current square area."""
        return self.__size ** 2
