const input0 = `10
nyc
la
honolulu
lisbon
paris
madrid
istanbul
porto
london
barcelona
10 20
0 8
0 6
0 4
0 1
1 8
1 3
1 2
2 3
2 6
3 7
3 9
4 9
4 2
4 1
5 7
8 9
8 3
8 5
9 6
9 5`;

let input1 = `1
dublin
1 0`;

let input2 = `2
edinburgh
dublin
2 1
0 1`;

let input3 = `2
edinburgh
dublin
2 0`;

let input4 = `10
nyc
la
honolulu
lisbon
paris
madrid
istanbul
porto
london
barcelona
10 22
0 8
7 6
2 8
0 6
0 4
0 1
1 8
1 3
1 2
2 3
2 6
3 7
3 9
4 9
4 2
4 1
5 7
8 9
8 3
8 5
9 6
9 5`;

let input5 = `10
nyc
la
honolulu
lisbon
paris
madrid
istanbul
porto
london
barcelona
10 20
0 8
0 6
0 4
0 1
1 8
1 3
1 2
2 3
2 6
3 7
3 9
4 9
4 2
4 1
5 7
8 9
8 3
8 5
9 6
9 5`;

function processData(input) {
    var data = input.split("\n");
    var vertices_count = Number(data[0]) + 1;
    var edges_count = Number(data[vertices_count].split(" ")[1]);
    var edges_index = vertices_count + 1;
    var vertices = data.slice(1, vertices_count);
    var edges = data.slice(edges_index, edges_index + edges_count)
    console.log(data);
    console.log(vertices_count);
    console.log(edges_count);
    console.log(edges_index);
    console.log(vertices);
    console.log(edges);
}

processData(input0);