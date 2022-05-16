# HashTable
## this data structure can be called as HashTable or maps or dictionaries or objects 

In `Javascript` it called object as type of hashtable 

## What does hashTable mean
- imagine that we are in `grocery shopping` and we have object here 
```sh
const basket = {}
```
and we wanna add `lemons` as property inside `basket` object

```sh
const basket = {}
basket.lemons = 50;
```

we set the key which is `lemons` and the value which is `50` => `key value pair` 

the key `lemons` is used as the index of where to find the value in memory
as we pass the key `lemons` to the hash function and this hash function output the key `811` hashed where we stored on the memory as memory address (811)

### Memory
| key | value |
| ------ | ------ |
| 100 | 22 |
| 101 | 1 |
| ..... |.....|
| `811` | 50 | 
| ..... |.....|
| 923 | 113 |

## what is Hash Function 

it simply a function that generates a value of fixed length for each input that gets 
Hash Function has alot of types like sha or md5 or aes or rsa, etc...

lets talk about md5 in general.
if you pass (hello) to md5 hash function it will returns garbage string (5d41402abc4b2a76b9719d911017c592) and no matter how many times you put hello in there , it would be the same but as soon as changing anything in the string it will return different string even changing to capital 

the one benefit we get really fast data access because all you have to do to find `lemons` , you pass `lemons` to the hash function like md5 and it will generate the hash output and immediately we know where is in my memory  

Recap 
we have a key `lemons` 
we send it to a hash function that is going to hash something really really fast and map whatever it hashes to be on the memory address => time complixity O(1)

look at these functions and how it performs fastly 
| key | value |
| ------ | ------ |
| insert | O(1) |
| lookup | O(1) |
| delete | O(1) |
| search | O(1) |

when we come to `insert` something in the memory , it would be O(1) as we hash the key such like lemons through the hash function and places it automatically inside the memory address 

`lookup` is the exact same that we can access the property of the object , that the property get hashed and direct us to the address in the memory so it would be O(1)

`delete` is also the same thing we simply use the key and we know the address and because that isn't ordered that we don't shift anything , we just delete so it would be O(1)

`search` is also the same that if we try to find something in basket object like lemons , we simply use the hash function 

```sh
const basket = {
    apple: 30,
    lemon: 50,
    orange: 40,
    addPromo : function(code){
        console.log('promo added')
    }
}
```

when we run this code , we create basket object that have apple , lemon , orange and addPromo Function that each one has its own memory address but we can access any property fastly 

```sh
console.log(basket.apple) => o(1) returns 30;
console.log(basket.lemon) => o(1) returns 50;
console.log(basket.orange) => o(1) returns 40;
console.log(basket.addPromo()) => o(1) returns 'promo added';
```
we can also easily add new property 

```sh
basket.banana = 23;
console.log(basket.banana) => o(1) returns 23;
```

## Hash Collisions (the main problem in hashTable)

our computer has limited space and when we create an object or hash table. the computer decides how much space to allocate, its not going to allocate all the space to the hashtable , it allocate only a bit of it , we will see in the implementation how to adjust the size.

> suppose we have only 12 spaces 

so the memory will be like this 
> [0] [1] [2] [3] [4] [5] [6] [7] [8] [9] [10] [11] [12]

so if i insert (1) 

so the memory will be like this 
> [0] [1] [2] [3] [4] [5] [6] [7] [8] [9] [10] [11] [12]
  [ ] [1] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [  ] [  ] [  ]
  
then if i insert (3)

so the memory will be like this 
> [0] [1] [2] [3] [4] [5] [6] [7] [8] [9] [10] [11] [12]
  [ ] [1] [ ] [3] [ ] [ ] [ ] [ ] [ ] [ ] [  ] [  ] [  ]
  
then if i insert (14)

so the memory will be like this 
> [0] [1]  [2] [3] [4] [5] [6] [7] [8] [9] [10] [11] [12]
  [ ] [1]  [ ] [3] [ ] [ ] [ ] [ ] [ ] [ ] [  ] [  ] [  ]
  [ ] [14] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [  ] [  ] [  ]

so what happend ? the hash function randomly added the space in memory and put in (1) and this is the collision 
as here we have only 12 spaces so if i add 14 it counts 2 spaces after 12 and then put it inside and if i insert 15 it will be in (2)

you can try through this link 
https://www.cs.usfca.edu/~galles/visualization/OpenHash.html

<img width="1042" alt="Screen Shot 2022-05-16 at 3 48 07 AM" src="https://user-images.githubusercontent.com/37994931/168506580-12cdd6f2-e83d-408f-a375-94de8656c1bd.png">




