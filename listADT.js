// An implementation of a List ADT

class List {
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
        this.clear = clear;
        this.find = find;
        this.toString = toString;
        this.insert = insert;
        this.append = append;
        this.remove = remove;
        this.front = front;
        this.end = end;
        this.prev = prev;
        this.next = next;
        this.length = length;
        this.currPos = currPos;
        this.moveTo = moveTo;
        this.getElement = getElement;
        this.length = length;
        this.contains = contains;
    }

    append(element) {
        this.dataStore[this.listSize++] = element
    }

    find(element){
        // return -1 if not found in the list
        for(let i =0; i < this.dataStore.length; ++i){
            if(this.dataStore[i] == element){
                return i;
            }
        }
        return -1;
    }

    remove(element){
        let foundAt = this.find(element);
        if (foundAt > -1){
            this.dataStore.splice(foundAt,1);
            --this.listSize;
            return true;
        }
        return false;
    }

    length(){
        return this.listSize;
    }

    toString(){
        return this.dataStore;
    }

    insert(element,after){
        let insterPos = this.find(after);
        if(foundAt > -1){
            this.dataStore.splice(insterPos+1,0,element);
            ++this.listSize;
            return true;
        }
        return false;
    }

    clear(){
        delete this.dataStore;
        this.dataStore =[];
        this.listSize = this.pos = 0;
    }

    contains(element){
        for(let i=0; i < this.dataStore.length; ++i){
            if(this.dataStore[i] == element){
                return true;
            }
            return false;
        }
    }

    front(){
        // the front element in the list
        this.pos =0;
    }

    end(){
        // end element in the list 
        this.pos = this.listSize-1;
    }

    prev(){
        // previous element
        if(this.pos >0){
            --this.pos;
        }
    }

    next(){
        // next element after
        if(this.pos < this.listSize-1){
            ++this.pos;
        }
    }

    currPos(){
        // current position in the list
        return this.pos;
    }

    moveTo(position){
        // move to certain position
        this.pos = position;
    }

    getElement(){
        // get element at a specified position in the list
        return this.dataStore[this.pos];
    }
}

// iterating through the list 

let users = new List();
users.append("elon")
users.append("musk")
users.append("jeff")
users.append("bezos")

for(users.front(); users.currPos < users.length; users.next()){
    console.log(users.getElement())
}

// traversing the list backwards

for (users.end(); users.currPos >= 0; users.prev){
    console.log(users.getElement);
}