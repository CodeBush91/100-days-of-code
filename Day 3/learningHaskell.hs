-- Types and Typeclasses

-- Explicit type declaration on a function
removeNonUppercase :: [Char] -> [Char]  
removeNonUppercase st = [ c | c <- st, c `elem` ['A'..'Z']]   

-- Type of head returns a, a is similar to generic
-- :t head  

-- Pattern Matching
lucky :: (Integral a) => a -> String  
lucky 7 = "LUCKY NUMBER SEVEN!"  
lucky x = "Sorry, you're out of luck, pal!"   

--recursive function
factorial :: (Integral a) => a -> a  
factorial 0 = 1  
factorial n = n * factorial (n - 1)  

-- Implmentation of head function using Pattern Matching
head' :: [a] -> a  
head' [] = error "Can't call head on an empty list, dummy!"  
head' (x:_) = x  

-- Guards (quite cool) - Notice no = 
bmiTell :: (RealFloat a) => a -> String  
bmiTell bmi  
    | bmi <= 18.5 = "You're underweight, you emo, you!"  
    | bmi <= 25.0 = "You're supposedly normal. Pffft, I bet you're ugly!"  
    | bmi <= 30.0 = "You're fat! Lose some weight, fatty!"  
    | otherwise   = "You're a whale, congratulations!"  

-- Calculate BMI before response
bmiTell :: (RealFloat a) => a -> a -> String  
bmiTell weight height  
    | weight / height ^ 2 <= 18.5 = "You're underweight, you emo, you!"  
    | weight / height ^ 2 <= 25.0 = "You're supposedly normal. Pffft, I bet you're ugly!"  
    | weight / height ^ 2 <= 30.0 = "You're fat! Lose some weight, fatty!"  
    | otherwise                 = "You're a whale, congratulations!"  

-- Refactor to remove repeating ourselves 
bmiTell :: (RealFloat a) => a -> a -> String  
bmiTell weight height  
    | bmi <= 18.5 = "You're underweight, you emo, you!"  
    | bmi <= 25.0 = "You're supposedly normal. Pffft, I bet you're ugly!"  
    | bmi <= 30.0 = "You're fat! Lose some weight, fatty!"  
    | otherwise   = "You're a whale, congratulations!"  
    where bmi = weight / height ^ 2  