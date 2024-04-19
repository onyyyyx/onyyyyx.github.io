import os
a=os.listdir('images/Moon/New')
for i in a:
	print('<img src=\'images/Moon/'+i+'\'>',end='')
print()