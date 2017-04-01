function NewNode (value){
  this.val = value;
  this.child = ['',''];
  //return this;
}

function NewTree (baseValue){
  return new NewNode(baseValue);
}

let myTree = new NewTree (1);

myTree.child[0] = new NewNode(2);
myTree.child[1] = new NewNode(3);

myTree.child[0].child[0] = new NewNode(4);
myTree.child[0].child[1] = new NewNode(5);
myTree.child[1].child[0] = new NewNode(6);
myTree.child[1].child[1] = new NewNode(7);

myTree.child[0].child[0].child[0] = new NewNode(8);
myTree.child[0].child[0].child[1] = new NewNode(9);
myTree.child[0].child[1].child[0] = new NewNode(10);
myTree.child[0].child[1].child[1] = new NewNode(11);
myTree.child[1].child[0].child[0] = new NewNode(12);
myTree.child[1].child[0].child[1] = new NewNode(13);
myTree.child[1].child[1].child[0] = new NewNode(14);
myTree.child[1].child[1].child[1] = new NewNode(15);

// function inOrder(node){
//   let left = node.child[0];
//   function _checkLeft(left){
//     console.log(left);
//     if(!_checkLeft(left.child[0])) return;
//   }
// }


function inOrder(node) {
  if (node.child[0]) {
    console.log(node.child[0].val);
    inOrder(node.child[0]);
  }
  if (node.child[1]) {
    console.log(node.child[1].val);
    inOrder(node.child[1]);
  }

}

inOrder(myTree);