function NewNode (value){
  this.val = value;
  this.child = ['',''];
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



function traverseTree(fn, tree){
  console.log(`***************************${fn.name}***************************`);
  fn(tree);

}
function dlr(node) {
  if(node){
    console.log(node.val);
    dlr(node.child[0]);
    dlr(node.child[1]);
  }

}

function lrd(node) {
  if(node){
    lrd(node.child[0]);
    lrd(node.child[1]);
    console.log(node.val);
  }
}
function ldr(node) {
  if(node){
    ldr(node.child[0]);
    console.log(node.val);
    ldr(node.child[1]);
  }
}

traverseTree(dlr, myTree);
traverseTree(ldr, myTree);
traverseTree(lrd, myTree);
