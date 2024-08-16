def get_common_elements(list1, list2):
	ret_val = []
	for e in list1:
        	if e in list2:
			ret_val.append(e)
	for e in list2:
		if e in list1:
			ret_val.append(e)

	return ret_val 


print(get_common_elements([1, 2, 2, 3], [1, 2, 3, 3]))
