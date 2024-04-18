import os
a=os.listdir('images/Moon')
print('      ',end='')
for i in a:
	print('<img src=\'images/Moon/'+i+'\'>',end='')