def traverse(string):
    index = -1
    while index + len(string) > -1:
        print(string[index])
        index -= 1

traverse("Preposterous")
