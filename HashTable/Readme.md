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
