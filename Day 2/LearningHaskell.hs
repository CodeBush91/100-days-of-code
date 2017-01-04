doubleMe x = x + x
doubleUs x y = doubleMe x + doubleMe y   
doubleSmallNumber x = (if x > 100 then x else x*2) + 1  

-- lists

addToStartOfList xs y  = y:xs

getItemFromList xs = xs !! y

takeFromList xs = take y xs
dropFromList xs = take y xs

existInList xs y = y `elem`xs

-- list comprehension

first10EvenNumbers y = [x*y | x <- [1..10]] 

replaceWithBoomAndBang xs = [ if x < 10 then "BOOM!" else "BANG!" | x <- xs, odd x]   