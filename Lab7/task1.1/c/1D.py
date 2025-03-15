n = int(input())
p = 1
is_power = False
while p <= n:
    if p == n:
        is_power = True
        break
    p *= 2
print("YES" if is_power else "NO")
