import { elToAl } from './edgelist.js'


const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = elToAl(edges)
    return hasPath(graph, nodeA, nodeB, new Set())
}

const hasPath = (graph, src, dst, visited) => {
    if(visited.has(src)) return false;
    if(src == dst) return true;
    visited.add(src)
    for(let neighbor of graph[src]){
        if(hasPath(graph, neighbor, dst, visited))return true;
    }
    return false;
}

console.log(((undirectedPath(edges, 'k', 'l'))?"Yes":"No"))