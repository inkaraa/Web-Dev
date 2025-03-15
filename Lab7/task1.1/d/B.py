n = int(input())
arr = list(map(int, input().split()))
for number in arr:
    if number % 2 == 0:
        print(number, end=" ")
