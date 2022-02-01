class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node;
        if(this.root === null){
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true){
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } 
                }
            }
        }
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);