name = input("Enter with a name ")

print(name)

for index in range(1, len(name)):
    print(name[:-index])
