a = 'abcdefghijklmnopqrstuvwxyz'
n = 9
for i in a:
	n += 1
	print("'" + str(i).upper() + "':" + str(n), end = ', ')