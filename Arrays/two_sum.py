#Basically given an array of numbers and you are told to find two numbers that add up to a given target, then return the indices of those two numbers 

nums=[3,2,4]

def two_sum(array, target):
    
    indices_list=[]
    
    for i in range(len(array)):
        
        for j in range(i+1, len(nums)):
            
            if array[i] + array[j] == target:
                
                indices_list.append(i)
                
                indices_list.append(j)
                
    return indices_list