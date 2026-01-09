const graph = {
    a : ['b', 'c'],
    b : ['d'],
    c : ['e'],
    d : ['f'],
    e : [],
    f: []
}

// Interative
const dfs = (graph, source) =>{
    const stack = [ source ];
    while(stack.length > 0){
        const peek = stack.pop();
        console.log(peek);

        graph[peek].forEach(element => {
            stack.push(element)
        });
    }
}

//Recursive
const dfsR = (graph, source) => {
    console.log(source);
    graph[source].forEach((n) => {
        dfsR(graph, n);
    })
}

dfs(graph, 'a')
console.log("---------------------------------------------------------------------------------------------------")
dfsR(graph, 'a')