/* const dfs = () => {
  
}

const bfs = () => {
  
} */

function dfs(tree) {
    if (typeof tree !== 'object' || Array.isArray(tree)) {
      throw new Error('INVALID_ARGUMENT');
    }
    
    let result = [];
    
    function traverse(node) {
      result.push(node);
      for (let child of tree[node]) {
        traverse(child);
      }
    }
    
    traverse(Object.keys(tree)[0]);
    
    return result;
  }
  
  // Пример использования:
const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F', 'G'],
    D: [],
    E: [],
    F: [],
    G: [],
};
console.log('Обход дерева в глубину:');
console.log(dfs(graph)); // ['A', 'B', 'D', 'E', 'C', 'F', 'G']
  
try {
    dfs('{}');
} catch (e) {
    console.log(e.message); // INVALID_ARGUMENT
}

/***********************************************************/

function bfs(tree) {
    if (typeof tree !== 'object' || Array.isArray(tree)) {
      throw new Error('INVALID_ARGUMENT');
    }
    
    let result = [];
    let queue = [Object.keys(tree)[0]];
    
    while (queue.length > 0) {
      let node = queue.shift();
      result.push(node);
      for (let child of tree[node]) {
        queue.push(child);
      }
    }
   
    return result;
}
  
console.log('Обход дерева в ширину:'); 
console.log(bfs(graph)); // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  
try {
    bfs('{}');
}catch (e) {
    console.log(e.message); // INVALID_ARGUMENT
}