import random
import string
def generate_password(length=12, use_special_chars=True):
    # Define the character sets
    lower = string.ascii_lowercase
    upper = string.ascii_uppercase
    digits = string.digits
    special = string.punctuation if use_special_chars else ''
    all_characters = lower + upper + digits + special
    password = ''.join(random.choice(all_characters) for _ in range(length))
    return password
if __name__ == "__main__":
    length = int(input("Enter password length: "))
    use_special_chars = input("Include special characters? (y/n): ").lower() == 'y'
    print("Generated Password:", generate_password(length, use_special_chars))
