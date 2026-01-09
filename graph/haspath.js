const hasPathDFS = (graph, src, dst) => {
    if( src == dst){
        return true;
    }

    for(let neighbour of graph[src]){
        if (hasPathDFS(graph, neighbour.dst) === true) return true;
    }

    return false;
}

const hasPathBFS = (graph, src, dst) => {
    const q = [src];
    while(q.length > 0){
        const curr = q.shift();
        if(curr == dst) return true;
        for(let neighbor of graph[curr]){
            q.push(neighbor);
        }
    }
    return false;
}

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

console.log(hasPathDFS(graph, 'f', 'k')); 
console.log(hasPathBFS(graph, 'f', 'k'));