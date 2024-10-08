// 32 x 32 grid
let hyacinth = [
    //1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 1, 0, 0, 3, 3, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 4, 3, 1, 1, 4, 3, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 3, 3, 3, 1, 4, 4, 6, 6, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 4, 3, 3, 4, 4, 4, 5, 6, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 4, 5, 4, 4, 4, 1, 5, 5, 5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 5, 5, 5, 4, 1, 1, 5, 5, 3, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 4, 5, 5, 4, 1, 1, 4, 3, 3, 3, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 3, 3, 1, 4, 6, 6, 4, 4, 5, 3, 3, 1, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 1, 1, 1, 6, 6, 4, 5, 5, 4, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 1, 1, 4, 4, 1, 5, 5, 4, 1, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 5, 4, 4, 4, 1, 1, 1, 5, 4, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 8, 8, 0, 0, 1, 1, 5, 5, 4, 4, 3, 4, 1, 1, 4, 4, 6, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 7, 7, 8, 0, 0, 1, 1, 4, 4, 3, 3, 4, 6, 6, 6, 4, 4, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 7, 7, 8, 8, 4, 4, 1, 4, 3, 3, 3, 4, 6, 4, 1, 4, 5, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 7, 7, 7, 8, 8, 1, 1, 1, 4, 4, 1, 1, 4, 1, 1, 1, 8, 8, 4, 0, 0, 8, 8, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 1, 1, 1, 5, 4, 1, 1, 4, 1, 1, 8, 8, 7, 4, 0, 8, 8, 8, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 6, 1, 4, 5, 5, 1, 4, 5, 4, 8, 8, 7, 4, 1, 8, 8, 7, 7, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 6, 4, 4, 5, 5, 4, 6, 5, 5, 8, 7, 7, 1, 1, 1, 7, 7, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 3, 1, 1, 1, 6, 6, 6, 1, 7, 7, 7, 1, 1, 8, 7, 7, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 3, 1, 1, 6, 6, 1, 8, 7, 7, 7, 4, 4, 7, 7, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 5, 5, 4, 4, 4, 1, 8, 7, 7, 5, 1, 7, 7, 7, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 7, 4, 5, 4, 1, 4, 4, 7, 7, 7, 1, 1, 7, 7, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 7, 7, 7, 4, 4, 1, 1, 5, 5, 7, 7, 1, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 7, 7, 7, 8, 8, 7, 1, 8, 7, 7, 7, 7, 7, 9, 9, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

];

// 32 x 32 grid
let blossom = [
    //1,   2,   3,   4,   5,   6,   7,   8,   9,   10,  11,  12,  13,  14,  15,  16,  17,  18,  19,  20,  21,  22,  23,  24,  25,  26,  27,  28,  29,  30,  31,  32
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","light","light","light","light","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","light","pink","pink","pink","pink","pink","pink","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","light","pink","pink","pink","pink","pink","pink","pink","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","light","pink","pink","pink","pinker","pinker","pink","pink","pink","pink","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","light","pink","pink","pinker","pinker","pinker","pinker","pink","pink","pink","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"], 
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","pink","pink","pink","pinker","pinker","pinker","pinker","pink","pink","pink","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","pink","pink","pinker","pinker","pinker","pinker","pinker","pinker","pink","pink","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","pink","pinker","pinker","pinker","pinker","pinker","pinker","pink","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"], 
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","pink","pink","pinker","pinker","pinker","pinker","pink","pink","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"], 
    ["bg","bg","bg","bg","bg","light","light","light","light","bg","bg","bg","bg","pink","dot","pinker","pinker","pinker","pink","bg","bg","bg","bg","light","light","light","light","bg","bg","bg","bg","bg"], 
    ["bg","bg","bg","bg","light","pink","pink","pink","pink","pink","pink","bg","bg","pink","pink","pinker","dot","pink","pink","bg","bg","light","light","pink","pink","pink","pink","pink","bg","bg","bg","bg"], 
    ["bg","bg","bg","light","pink","pink","pink","pink","pinker","pinker","pink","pink","pink","bg","pink","pinker","pinker","pink","bg","light","light","pink","pinker","pinker","pink","pink","pink","pink","pink","bg","bg","bg"], 
    ["bg","bg","light","pink","pink","pink","pinker","pinker","pinker","pinker","pinker","pinker","pink","pink","bg","pink","pink","bg","light","pink","pinker","pinker","pinker","pinker","pinker","pinker","pink","pink","pink","pink","bg","bg"], 
    ["bg","bg","light","pink","pink","pinker","pinker","pinker","pinker","pinker","pinker","pinker","pinker","dot","pink","pink","pink","pink","pinker","pinker","pinker","pinker","pinker","pinker","pinker","pinker","pinker","pink","pink","pink","bg","bg"], 
    ["bg","bg","pink","pink","pink","pinker","pinker","dotr","pinker","pinker","pinker","pinker","pinker","dot","pink","pink","pink","pink","pinker","pinker","pinker","pinker","dot","pinker","pinker","pinker","pinker","pink","pink","pink","bg","bg"],
    ["bg","bg","pink","pink","pink","pink","pinker","pinker","pinker","pinker","pinker","pinker","pink","pink","bg","pink","pink","bg","light","pink","pinker","pinker","pinker","pinker","pinker","pinker","pink","pink","pink","pink","bg","bg"],
    ["bg","bg","bg","pink","pink","pink","pink","pink","pinker","pinker","pink","pink","pink","bg","light","pinker","pinker","pink","bg","pink","pink","pink","pinker","pinker","pink","pink","pink","pink","pink","bg","bg","bg"],
    ["bg","bg","bg","bg","pink","pink","pink","pink","pink","pink","pink","bg","bg","light","pink","pinker","pink","pink","pink","bg","bg","pink","pink","pink","pink","pink","pink","pink","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","pink","pink","pink","pink","bg","bg","bg","bg","light","pinker","pinker","pinker","dot","pink","bg","bg","bg","bg","pink","pink","pink","pink","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","light","pink","pinker","pinker","pinker","pinker","pink","pink","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","light","pinker","pinker","pinker","pinker","pinker","pinker","pink","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","light","pink","pinker","pinker","pinker","pinker","pinker","pinker","pink","pink","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","light","pink","pink","pinker","pinker","pinker","pinker","pink","pink","pink","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","light","pink","pink","pinker","pinker","pinker","pinker","pink","pink","pink","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","pink","pink","pink","pink","pinker","pinker","pink","pink","pink","pink","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","pink","pink","pink","pink","pink","pink","pink","pink","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","pink","pink","pink","pink","pink","pink","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","pink","pink","pink","pink","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"],
        
];

// Courtney's array
let words = ["ouch","pain","spike","thorn","stab","skewer","no","poke"]
let word = words[Math.floor(Math.random()*words.length)];
let cactus = [
    //1 "cactus" "shadow" "soil" "potted" "dimension"  arr  8  9 10 11 12 13 14 15 16 1arr 18 19"cactus"0"cactus"1"cactus"2"cactus"3"cactus"4"cactus"5"cactus"6"cactus"arr"cactus"8"cactus"9"shadow"0"shadow"1"shadow"2
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg", "shine", "shine", "shine", "shine", "shine","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"], //1
    ["bg","bg","bg","cactus", "shine","bg","bg","bg","bg","bg","bg","bg", "shine","cactus","cactus","cactus","cactus","cactus", "shine","bg","bg","bg","bg","bg","bg","cactus","shadow","bg","bg","bg","bg","bg"], //2
    ["bg","bg","bg","cactus","cactus", "shine","bg","bg","bg","bg","bg", "shine","cactus","cactus", word,"cactus","cactus","cactus","cactus", "shine","bg","bg","bg","bg", "shine","cactus","shadow","bg","bg","bg","bg","bg"], //3
    ["bg","bg","bg","shadow","cactus", word, "shine","bg","bg","bg","shadow","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","shadow","bg","bg", "shine", "shine","cactus","shadow","bg","bg","bg","bg","bg"], //4
    ["bg","bg","bg","bg","shadow","cactus","cactus", "shine","bg","bg","shadow","cactus","cactus","cactus","cactus","cactus","cactus", word,"cactus","cactus","shadow","bg","bg","cactus", "shine","cactus","shadow","bg","bg","bg","bg","bg"], //5
    ["bg","bg","bg","bg","shadow","cactus","cactus", "shine","bg","bg","shadow","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","shadow","bg","bg", "shine", word,"shadow","bg","bg","bg","bg","bg","bg"], //6
    ["bg","bg","bg","bg","shadow","cactus","cactus","cactus", "shine","bg","shadow","cactus", word,"cactus","cactus","cactus","cactus","cactus","cactus","cactus","shadow","bg", "shine", "shine","cactus","shadow","bg","bg","bg","bg","bg","bg"], //arr
    ["bg","bg","bg","bg","bg","shadow","cactus", word,"cactus", "shine", "shine","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","shadow","bg", "shine", "shine","cactus","shadow","bg","bg","bg","bg","bg","bg"], //8
    ["bg","bg","bg","bg","bg","shadow","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","shadow","bg","bg", "shine", "shine","shadow","bg","bg","bg","bg","bg","bg"], //9
    ["bg","bg","bg","bg","bg","bg","shadow","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus", word,"cactus","cactus","cactus","cactus","shadow","bg", "shine", "shine","cactus","shadow","bg","bg","bg","bg","bg","bg"], //10
    ["bg","bg","bg","bg","bg","bg","bg","shadow","shadow","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","shadow", "shine", "shine", "shine","cactus","shadow","bg","bg","bg","bg","bg","bg"], //11
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","shadow","shadow","cactus", word,"cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus", word,"cactus","cactus","cactus","shadow","bg","bg","bg","bg","bg","bg"], //12
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","shadow","cactus","cactus","cactus","cactus","cactus","cactus", word,"cactus","cactus","cactus","cactus","cactus","cactus","shadow","bg","bg","bg","bg","bg","bg","bg"], //13
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","shadow","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","shadow","shadow","shadow","shadow","bg","bg","bg","bg","bg","bg","bg","bg"], //14
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","shadow","cactus","cactus","cactus", word,"cactus","cactus","cactus","cactus","cactus","shadow","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"], //15
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","shadow","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","shadow","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"], //16
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","shadow","cactus","cactus","cactus","cactus","cactus","cactus","cactus", word,"cactus","shadow","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","shadow","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","shadow","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","bg","bg","potted","shadow","cactus",word,"cactus","cactus","cactus","cactus","cactus","cactus","cactus","shadow","potted","bg","bg","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","bg","potted","dimension","shadow","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","cactus","shadow","dimension","potted","bg","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","bg","potted","dimension","shadow","cactus","cactus","cactus", word,"cactus","cactus","cactus","cactus", word,"shadow","dimension","potted","bg","bg","bg","bg","bg","bg","bg","bg","bg"],["bg","bg","bg","bg","bg","bg","bg","potted","potted","dimension","shadow","shadow","cactus","cactus","cactus","cactus","cactus","cactus","cactus","shadow","shadow","dimension","potted","potted","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","potted","potted","potted","soil","shadow","shadow","shadow","shadow","shadow","shadow","shadow","shadow","shadow","soil","potted","potted","potted","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","potted","potted","potted","potted","soil","shadow","shadow","shadow","shadow","shadow","shadow","shadow","soil","potted","potted","potted","potted","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","potted","potted","potted","potted","soil","soil","soil","soil","soil","soil","soil","soil","soil","potted","potted","potted","potted","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","dimension","potted","potted","potted","potted","potted","potted","potted","potted","potted","potted","potted","potted","potted","potted","potted","dimension","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","potted","dimension","potted","potted","potted","potted","potted","potted","potted","potted","potted","potted","potted","potted","potted","dimension","potted","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","dimension","potted","dimension","dimension","dimension","dimension","dimension","dimension","dimension","dimension","dimension","dimension","dimension","dimension","dimension","potted","dimension","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","dimension","potted","potted","potted","potted","potted","potted","potted","potted","potted","potted","potted","potted","potted","potted","potted","dimension","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","dimension","dimension","potted","potted","potted","potted","potted","potted","potted","potted","potted","potted","potted","potted","potted","dimension","dimension","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","dimension","dimension","dimension","potted","potted","potted","potted","potted","potted","potted","potted","potted","potted","potted","potted","dimension","dimension","bg","bg","bg","bg","bg","bg","bg","bg"],
    ["bg","bg","bg","bg","bg","bg","bg","dimension","dimension","dimension","dimension","dimension","dimension","dimension","dimension","dimension","dimension","dimension","dimension","dimension","dimension","dimension","dimension","dimension","bg","bg","bg","bg","bg","bg","bg","bg"],
     
];

// Vince's array
let rose = [
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 1, 1, 1, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 9, 1, 2, 2, 1, 9, 9, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 9, 9, 9, 10, 1, 2, 2, 1, 11, 10, 9, 9, 9, 8, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 8, 8, 9, 9, 10, 10, 11, 1, 3, 2, 2, 1, 11, 10, 1, 1, 9, 8, 8, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 8, 8, 9, 9, 1, 1, 11, 1, 1, 3, 3, 3, 3, 1, 11, 1, 5, 5, 1, 9, 9, 8, 8, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 8, 9, 9, 10, 1, 5, 5, 1, 4, 4, 4, 4, 3, 3, 1, 1, 4, 2, 2, 1, 11, 9, 9, 9, 8, 0, 0, 0],
    [ 0, 0, 0, 8, 9, 9, 10, 11, 1, 5, 5, 1, 4, 4, 1, 1, 1, 4, 1, 1, 2, 4, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [ 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 5, 5, 5, 1, 4, 4, 4, 4, 4, 1, 7, 4, 4, 2, 2, 1, 0, 0],
    [ 0, 1, 5, 2, 2, 3, 4, 5, 1, 4, 4, 4, 1, 1, 5, 5, 5, 5, 1, 1, 4, 1, 1, 1, 1, 7, 2, 1, 1, 9, 8, 0],
    [ 0, 1, 2, 2, 2, 3, 7, 7, 1, 7, 7, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 5, 5, 6, 1, 7, 2, 1, 10, 9, 8, 0],
    [ 0, 1, 2, 2, 3, 7, 1, 1, 1, 1, 1, 4, 1, 2, 2, 1, 1, 1, 3, 2, 1, 5, 5, 6, 1, 7, 2, 1, 10, 9, 8, 0],     
    [ 0, 1, 2, 2, 2, 2, 7, 7, 1, 7, 7, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 5, 5, 6, 1, 7, 2, 1, 11, 10, 9, 8],
    [ 0, 1, 2, 2, 3, 4, 1, 1, 1, 1, 4, 1, 2, 2, 1, 1, 1, 4, 2, 1, 5, 5, 5, 6, 1, 4, 4, 1, 11, 10, 9, 8],
    [ 0, 8, 1, 2, 4, 1, 6, 6, 6, 5, 5, 7, 1, 2, 1, 6, 6, 6, 1, 4, 2, 5, 5, 5, 1, 1, 1, 11, 11, 10, 9, 8],
    [ 8, 9, 1, 7, 7, 1, 6, 6, 5, 5, 5, 2, 1, 1, 5, 5, 5, 5, 1, 1, 4, 2, 2, 1, 7, 4, 4, 1, 1, 11, 10, 9],
    [ 8, 9, 1, 1, 4, 1, 1, 2, 2, 2, 1, 6, 6, 6, 5, 4, 4, 5, 6, 6, 1, 1, 1, 7, 7, 4, 2, 2, 2, 1, 10, 9],
    [ 8, 9, 1, 1, 4, 1, 1, 2, 2, 2, 1, 6, 6, 6, 5, 4, 4, 5, 6, 6, 1, 1, 1, 7, 4, 4, 2, 2, 5, 5, 1, 9],
    [ 8, 9, 10, 5, 5, 2, 4, 1, 1, 1, 1, 6, 6, 6, 5, 5, 5, 1, 1, 1, 4, 1, 1, 1, 1, 4, 2, 2, 5, 1, 10, 9],
    [ 8, 9, 10, 1, 1, 4, 1, 1, 6, 5, 5, 2, 1, 1, 6, 6, 6, 1, 4, 4, 2, 5, 5, 6, 4, 4, 2, 2, 5, 1, 10, 9],
    [ 8, 9, 10, 11, 1, 4, 1, 1, 6, 5, 5, 2, 1, 1, 6, 6, 6, 1, 4, 2, 2, 5, 5, 6, 1, 1, 1, 1, 1, 1, 10, 9],
    [ 8, 9, 10, 11, 11, 1, 6, 6, 6, 5, 5, 5, 2, 1, 1, 1, 1, 1, 2, 2, 1, 5, 6, 6, 6, 6, 1, 7, 7, 1, 10, 9],
    [ 8, 9, 10, 11, 11, 1, 1, 1, 1, 5, 5, 2, 1, 1, 2, 2, 2, 2, 1, 7, 7, 1, 1, 1, 6, 6, 1, 7, 7, 4, 1, 9],
    [ 0, 8, 9, 1, 1, 4, 7, 7, 7, 1, 1, 1, 1, 1, 5, 5, 5, 5, 1, 7, 4, 4, 4, 2, 1, 1, 7, 4, 4, 2, 1, 8],
    [ 0, 8, 9, 1, 1, 4, 4, 4, 7, 1, 4, 7, 7, 1, 5, 5, 5, 5, 1, 7, 4, 4, 4, 2, 1, 1, 7, 4, 4, 2, 1, 8],
    [ 0, 8, 1, 2, 2, 4, 4, 4, 1, 4, 4, 4, 4, 4, 1, 6, 6, 1, 4, 4, 2, 5, 5, 1, 7, 7, 7, 4, 4, 5, 1, 8],
    [ 0, 0, 1, 5, 5, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 0],
    [ 0, 0, 1, 1, 1, 1, 1, 1, 11, 11, 1, 5, 1, 1, 1, 4, 4, 7, 7, 7, 4, 1, 11, 11, 11, 11, 10, 10, 9, 8, 0, 0],        
    [ 0, 0, 0, 0, 8, 9, 9, 10, 10, 11, 1, 5, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 11, 11, 10, 10, 9, 9, 8, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 8, 8, 9, 9, 10, 1, 1, 11, 11, 1, 2, 2, 4, 4, 4, 2, 1, 11, 10, 9, 9, 8, 8, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 8, 8, 9, 10, 10, 10, 11, 11, 1, 1, 1, 2, 2, 1, 10, 10, 9, 8, 8, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 9, 9, 9, 10, 10, 10, 10, 1, 5, 5, 1, 9, 9, 8, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 9, 9, 9, 9, 9, 1, 1, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let font1;
let images =[];

let currentPage = 0;

function preload()  {

    font1 = loadFont('assets/Boniro.ttf');
    images[0] = loadImage('assets/cat.png');
    images[1] = loadImage('assets/dog.png');
    images[2] = loadImage('assets/quokka.png');
    images[3] = loadImage('assets/bear.png');

}

function setup() {
     createCanvas(800, 700);
     background(0, 60, 150);
     fill(100);
     textAlign(LEFT);
     textFont(font1);
      
}

function draw() {
    background(0,15);

    if (currentPage == 1) {
        mapToColorShapes(hyacinth, 400, 200, 0, 0.45, 255);
        mapToColorText(blossom, 50, 200, 0, .3, 175);

      push();
      translate(100,50);
      fill(255);
      textSize(40);
      let t = "This is my hyacinth and my cherry blossom."
      text(t,0,0,600);
      pop();
 

    } else if (currentPage == 2) {
        
        mapToColorText(blossom, 600, 100, 75, .5, 120);
        mapToBitMaps(blossom,images,300,100,90,.5)
        mapToColorPixels(hyacinth, 100, 100, 45, 1, 255);
        mapToBitMaps(hyacinth, images, 600, 180, -25, .6);
        mapToMonoPixels(hyacinth,100,400, 0,.35, 255);

     push();
     translate(40,50);
     fill(200);
     textSize(40);
     let t = "My flowers but changed with images, rotations, and shapes."
     text(t,0,0,600);
     pop();


    } else if (currentPage == 3) {
        mapToColorShapes2(rose, 100, 100, 39, .5);
        mapToColorText2(cactus, 300, 200, -15, 0.45, 175);
        push();
        translate(200,50);
        fill(200);
        textSize(40);
        let t = "My group's flowers and plants blooming.";
        t += "\n";
        t += "\n";
        t += "\n";
        t += "\n";
        t += "\n";
        t += "\n";
        t += "\n";
        t += "\n";
        t += "\n";
        t += "The rose is Vince's and the cactus is Courtney's.";
        text(t,0,0,400);
        pop();

    } else {

        push();
        translate(80,100);
        fill(225);
        textSize(30);
        text ("My groups members were Courtney and Vince. ", 0, 0, 600 );
        translate(0,120);
        text ("This little garden will show 4 plants mapped differently.", 0, 0, 600 );
        translate(250,120);
        mapToColorShapes(hyacinth, -100, 0, 0, .35, 255);
        pop();

    }

}


function keyPressed() { 

  
    //console.log(key);
     // or 
    if ( key == '1' ) { 
      console.log("Page 1");
      currentPage = 1;

     } else if ( key == '2' ) { 
        console.log("Page 2");
        currentPage = 2;
        
     } else if ( key == '3' ) { 
        console.log("Page 3");
        currentPage = 3;   
     } else {
        currentPage = 0;

     }
    
}

function mapToMonoPixels(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            fill(arr[i][j] * 128, fade);
            rect(j * 12, i * 12, 10, 10);
        }
    }
   pop();

}

function mapToColorPixels(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        console.log(arr.length)
        for (var j = 0; j < arr.length; j++) {
            
            a = arr[i][j];
            if (a === 1) {
                stroke(0)
                fill(81, 0, 138);
                rect((j * 30) + 15, (i * 30) + 15, 40, 40);
            
            }
            else if (a === 2) {
                stroke(0)
                fill(92, 0, 156);
                rect((j * 30) + 15, (i * 30) + 15, 40, 40);
            } 
            else if (a === 3) {
                stroke(0)
                fill(129, 22, 204);
                rect((j * 30) + 15, (i * 30) + 15, 40, 40);
            } 
            else if (a === 4) {
            stroke(0)
                fill(170, 89, 227);
                rect((j * 30) + 15, (i * 30) + 15, 40, 40);
            } 
            else if (a === 5) {
                stroke(0)
                fill(182, 132, 194);
                rect((j * 30) + 15, (i * 30) + 15, 40, 40);
                } 
            else if (a === 6) {
                stroke(0)
                fill(219, 184, 227);
                rect((j * 30) + 15, (i * 30) + 15, 40, 40);
                    } 
                  
            else if (a === 7) {
                stroke(0)
                fill(54, 199, 47);
                rect((j * 30) + 15, (i * 30) + 15, 40, 40);
                    } 
            else if (a === 8) {
                    stroke(0)
                    fill(89, 235, 82);
                    rect((j * 30) + 15, (i * 30) + 15, 40, 40);
                        } 
            else if (a === 9) {
                stroke(0)
                fill(171, 149, 125);
                rect((j * 30) + 15, (i * 30) + 15, 40, 40);
                    }
            else {
                stroke(100);
                fill((100), fade);
            }

        }
    }
    pop();

}

function mapToColorShapes(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        console.log(arr.length)
        for (var j = 0; j < arr.length; j++) {
            
            a = arr[i][j];
            if (a === 1) {
                stroke(0)
                fill(81, 0, 138);
                ellipse((j * 30) + 15, (i * 30) + 15, 40, 40);
            
            }
            else if (a === 2) {
                stroke(0)
                fill(92, 0, 156);
                ellipse((j * 30) + 15, (i * 30) + 15, 40, 40);
            } 
            else if (a === 3) {
                stroke(0)
                fill(129, 22, 204);
                ellipse((j * 30) + 15, (i * 30) + 15, 40, 40);
            } 
            else if (a === 4) {
            stroke(0)
                fill(170, 89, 227);
                ellipse((j * 30) + 15, (i * 30) + 15, 40, 40);
            } 
            else if (a === 5) {
                stroke(0)
                fill(182, 132, 194);
                ellipse((j * 30) + 15, (i * 30) + 15, 40, 40);
                } 
            else if (a === 6) {
                stroke(0)
                fill(219, 184, 227);
                ellipse((j * 30) + 15, (i * 30) + 15, 40, 40);
                    } 
                  
            else if (a === 7) {
                stroke(0)
                fill(54, 199, 47);
                ellipse((j * 30) + 15, (i * 30) + 15, 40, 40);
                    } 
            else if (a === 8) {
                    stroke(0)
                    fill(89, 235, 82);
                    ellipse((j * 30) + 15, (i * 30) + 15, 40, 40);
                        } 
            else if (a === 9) {
                stroke(0)
                fill(171, 149, 125);
                ellipse((j * 30) + 15, (i * 30) + 15, 40, 40);
                    }
            else {
                stroke(100);
                fill((100), fade);
            }

        }
    }
    pop();

}

function mapToColorText(arr,lx,ly,rot,sc,fade) {
    textSize(40);
    textAlign(CENTER);
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];

        if (value === "pink") {
            stroke(0);
            fill(255, 186, 230);
        }
        else if (value === "light") {
            fill(255, 249, 253);
        } 
        else if (value === "dot") {
            fill(237, 46, 169);
        }
        else if (value === "pinker") {
            stroke(0)
            fill(255, 229, 246); 
        } 
        else {
            stroke(120);
            fill(random(130, 173, 146), fade);
        }
        text(value, j * 30, i * 30,100);
        }
    }
    pop();

}

function mapToBitMaps(arr,imgarr,lx,ly,rot,sc) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    let nuimg;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
                let value = arr[i][j];
                if ( value == 0 ) {
                nuimg = imgarr[0];
                } else if ( value == "pink" ){
                nuimg = imgarr[2];
                } else if ( value == "pinker" ) {
                nuimg = imgarr[1];
                } else {
                nuimg = imgarr[3];
                }
            image(nuimg, j * 12, i * 12, 14, 14);
        }
    }
    pop();

}

function mapToTintedBitMaps(arr,imgarr,lx,ly,rot,sc,fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    let nuimg;
    let c;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
                let value = arr[i][j];
                if ( value == 1 ) {
                nuimg = imgarr[3];
                c = color(255,100,0,fade);
                } else if ( value == 2 ){
                c = color(255,0,255,fade);
                nuimg = imgarr[2];
                } else if ( value == 3 ) {
                nuimg = imgarr[1];
                c = color(20,200,120,fade);
                } else {
                nuimg = imgarr[0];
                c = color(120,0,240,fade);
                }
            
            c = color(255,fade);
            tint(c);
            image(nuimg, j * 9, i * 9, 15, 15);
        }
    }
    pop();

}

// Function to change Courtney's array
function mapToColorText2(arr,lx,ly,rot,sc,fade) {
    textSize(random(20));
    textAlign(CENTER);
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
                let value = arr[i][j];
                

        if (value === "bg") {
            stroke(0)
            fill(0);

        }
        else if (value ==="cactus") {
            
            fill(55,148,110);
        } 
        else if (value ==="shine") {
            
            fill(40,148,110);
        }

        else if (value ==="shadow") {
            stroke(0)
            fill(48,100,78);
            
        } 
        else if (value ==="soil") {
        stroke(0)
            fill(50,78,66);
            
        } 
        else if (value ==="potted") {
            stroke(0)
            fill(106,190,48);
            
            } 
        else if (value ==="dimension") {
            stroke(0)
            fill(153,229,80);
            
                } 
        

        else {
            stroke(120);
            fill(random(100,200,255), fade);
        }
        text(value, j * 30, i * 30,100);
        }
    }
    pop();

}

// Function to change Vince's array
function mapToColorShapes2(arr,lx,ly,rot,sc) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);

  
    let tileSize = width / arr[0].length; // Assuming rose is a square grid
    let numRows = arr.length;
    let numCols = arr[0].length;
  
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        let val = arr[i][j];
        let posX = j * tileSize;
        let posY = i * tileSize;
  
        if (val === 0) {
          fill(255); // White
        } else if (val === 1) {
          // Adding shading to red
          let redShade = map(i, 0, numRows, 255, 200);
          fill(redShade, 0, 0); // Red with shading
        } else if (val === 2 || val === 4) {
          // Adding shading to black
          let blackShade = map(i, 0, numRows, 0, 100);
          fill(30 + blackShade); // Lighter shade of Black
        }
        rect(posX, posY, tileSize, tileSize);
      }
    }
    pop();
}
