require('../styles/styles.sass');

import data from './data';
// import dagre from 'ciena-dagre';
import dagre from 'dagre';
import * as d3 from 'd3';

const relationNameToKey = (name) => name.toLowerCase();

const transformResponseToGraphData = (response) => {
  const g = new dagre.graphlib.Graph({});

  // Set an object for the graph label
  g.setGraph({});

  // Default to assigning a new object as a label for each new edge.
  g.setDefaultEdgeLabel(() => ({}));

  response.data.viewer.project.models.edges.forEach(edge => {
    const { node } = edge;

    // Add nodes to the graph. The first argument is the node id. The second is
    // metadata about the node. In this case we're going to add labels to each of
    // our nodes.
    g.setNode(
      relationNameToKey(node.name),
      {
        label: node.name,
        width: node.name.length * 10,
        height: 50
      }
    );

    node.fields.edges
      .filter(field => field.node.relation !== null)
      .forEach(field => {
        const { relation, isList } = field.node;

        const toMany = !!isList;

        g.setEdge(
          relationNameToKey(relation.leftModel.name),
          relationNameToKey(relation.rightModel.name),
          { label: toMany ? 'N' : '1' },
        );
      });
  });

  dagre.layout(g);

  return g;
};

const getNodesFromGraphData = (g) => {
  return g.nodes().map(node => g.node(node));
};

const getEdgesFromGraphData = (g) => {
  // return g.edges().map(edge => g.edge(edge));
  return g.edges().map(edge => ({
    label: edge.name,
    ...g.edge(edge)
  }));
};

const render = (graph, edges, nodes) => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Render the svg
  const svgRoot = d3.select('#svg')
    .attr("width", width)
    .attr("height", height);

  const svg = svgRoot.append("g");

  // Render the nodes
  const rects = svg.selectAll('.rects').data(nodes);

  rects.enter().append('rect')
    .attr('x', d => d.x - (d.width / 2.0))
    .attr('y', d => d.y - (d.height / 2.0))
    .attr('width', d => d.width)
    .attr('height', d => d.height)
    .style("stroke", "black")
    .style("stroke-width", 1)
    .style("fill", "none");
  rects.enter().append('text')
    .attr("x", d => d.x - d.width / 2.5)
    .attr("y", d => d.y)
    .text(d => d.label);

  // Render the edges
  edges.forEach((edge, i) => {
    const lines = svg.selectAll(`.lines-${i}`).data(edge.points);
    const lineFunction = d3.line()
      .curve(d3.curveLinear)
      .x(d => d.x)
      .y(d => d.y);

    lines.enter().append('path')
      .attr('d', lineFunction(edge.points))
      .attr("stroke-width", 6)
      .attr("class", `.lines-${i}`)
      .attr("stroke", "#27ae60")
      .style("fill", "none");

    const lineLabels = svg.selectAll(`.lines-${i}-labels`).data([edge]);

    lineLabels.enter().append('rect')
      .attr("x", d => d.points[d.points.length - 1].x)
      .attr("y", d => d.points[d.points.length - 1].y - 20)
      .attr('width', 20)
      .attr('height', 20)
      .attr('fill', 'white')
      .attr('stroke', 'black');

    lineLabels.enter().append('text')
      .attr("x", d => d.points[d.points.length - 1].x + 4)
      .attr("y", d => d.points[d.points.length - 1].y - 4)
      .attr("class", `.lines-${i}-labels`)
      .text(d => d.label);
  });
};

// -------------------------------
// MAIN
// -------------------------------
const graph = transformResponseToGraphData(data);

const edges = getEdgesFromGraphData(graph);
const nodes = getNodesFromGraphData(graph);

render(graph, edges, nodes);
