n = int(input())
arr = list(map(int, input().split()))
for i in range(n // 2):
    temp = arr[i]
    arr[i] = arr[n - i - 1]
    arr[n - i - 1] = temp
for number in arr:
    print(number, end=" ")
