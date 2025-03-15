n = int(input())
arr = list(map(int, input().split()))
count = 0
for number in arr:
    if number > 0:
        count += 1
print(count)
