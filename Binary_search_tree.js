// Binary tree - parent nodes are only limited to having two child nodes
// a parent node without a child node is called a leaf node
// Binary search tree - the data is stored in such a way that the nodes on the left
// contain less key values as compared to those on the left. 

// Implementation of a Binary Search Tree
// so a tree contains nodes, so we need a way to create nodes in our implementation
// so a node object will do, then create an instance of the node whenever we need a new node in the 
// binary search tree. 

// Node Object
class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.show = show;
    }

    show(){
        return this.data;
    }
}


class BinarySearcTree{
    constructor(){
        this.root = null;
        this.insert = insert; 
        this.inOrder = inOrder;
    }

    insert(data){
        const n = new Node(data,null,null)
        if (this.root == null){
            this.root = n; 
        }
        else {
            let current = this.root;
            let parent;
            while(true){
                parent = current;
                if(data < current.data){
                    current = current.left;
                    if(current == null){
                        parent.left = n; 
                        break;
                    }
                }
                else {
                    current = current.right;
                    if(current == null){
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }
    // inOrder treversal
    inOrder(node){
        if(node != null){
            this.inOrder(node.left);
            putstr(node.show() + " ");
            this.inOrder(node.right);
        }
    }
}