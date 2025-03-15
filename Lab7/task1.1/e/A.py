def min(a,b,c,d):
    min_value=a
    if b<min_value:
        return b
    if c<min_value:
        return c
    if d<min_value:
        return d
    return min_value

result=min(4,5,6,7)
print(result)