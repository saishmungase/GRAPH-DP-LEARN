const graph = {
    a : ['c', 'b'],
    b : ['d'],
    c : ['e'],
    d : ['f'],
    e : [],
    f: []
}

const bfs = (graph, source) => {
    let q = [source]
    while(q.length > 0){
        const front = q.shift();
        console.log(front)
        graph[front].forEach(n => {
            q.push(n)
        });
    }
}

bfs(graph, 'a')