class  CustomArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
       return this.data[index];
    }

    push(item){
        this.data[this.length] = item; 
        this.length++;
        return this.length;
    }

    pop(){
        delete this.data[this.length - 1];
        this.length--;
        return this.length;
    }

    delete(index){
        this.shiftItems(index);
        return this.length;
    }

    shiftItems(index){
        for(let i=0;i<this.index -1 ;i--){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}


const myArray = new CustomArray();
console.log(`${myArray}`); 
myArray.push("a");
myArray.push("b");
myArray.push("c");
myArray.delete(1);
myArray.pop();
console.log(myArray);