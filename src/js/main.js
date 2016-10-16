require('../styles/styles.sass');


import data from './data';
// import dagre from 'ciena-dagre';
import dagre from 'dagre';
import * as d3 from 'd3';



// --------------------------
// SETUP GRAPH
// --------------------------

// Create a new directed graph
var g = new dagre.graphlib.Graph();

// Set an object for the graph label
g.setGraph({});

// Default to assigning a new object as a label for each new edge.
g.setDefaultEdgeLabel(function() { return {}; });

// Add nodes to the graph. The first argument is the node id. The second is
// metadata about the node. In this case we're going to add labels to each of
// our nodes.
g.setNode("kspacey",    { label: "Kevin Spacey",  width: 144, height: 100 });
g.setNode("swilliams",  { label: "Saul Williams", width: 160, height: 100 });
g.setNode("bpitt",      { label: "Brad Pitt",     width: 108, height: 100 });
g.setNode("hford",      { label: "Harrison Ford", width: 168, height: 100 });
g.setNode("lwilson",    { label: "Luke Wilson",   width: 144, height: 100 });
g.setNode("kbacon",     { label: "Kevin Bacon",   width: 121, height: 100 });

// Add edges to the graph.
g.setEdge("kspacey",   "swilliams");
g.setEdge("swilliams", "kbacon");
g.setEdge("bpitt",     "kbacon");
g.setEdge("hford",     "lwilson");
g.setEdge("lwilson",   "kbacon");

dagre.layout(g);

const nodes = g.nodes().map(node => g.node(node));

const edges = g.edges().map(edge => g.edge(edge));
// const edges = [].concat.apply([], edgesTmp);

// g.nodes().forEach(function(v) {
//      console.log("Node " + v + ": " + JSON.stringify(g.node(v)));
// });
// g.edges().forEach(function(e) {
//     console.log("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(g.edge(e)));
// });

// --------------------------
// USE D3 TO RENDER
// --------------------------
const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select('#svg')
  .attr("width", width)
  .attr("height", height)
  .append("g");
  // .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

const rects = svg.selectAll('.rects').data(nodes); // UPDATE

rects.enter().append('rect') // ENTER
  .attr('x', d => d.x - (d.width / 2.0))
  .attr('y', d => d.y - (d.height / 2.0))
  .attr('width', d => d.width)
  .attr('height', d => d.height)
  .style("stroke", "black")
  .style("stroke-width", 2)
  .style("fill", "none");
rects.enter().append('text')
  .attr("x", d => d.x)
  .attr("y", d => d.y)
  .text(d => d.label);

edges.forEach((edge, i) => {
  const lines = svg.selectAll(`.lines-${i}`).data(edge.points);
  const lineFunction = d3.line()
    .x(d => d.x)
    .y(d => d.y);

  lines.enter().append('path') // ENTER
    .attr('d', lineFunction(edge.points))
    .attr("stroke-width", 4)
    .attr("stroke", "green")
    .style("fill", "none");
});
