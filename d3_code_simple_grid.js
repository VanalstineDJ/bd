var square = 20,
  w = 900,
  h = 300;

// create the svg
var svg = d3.select('#grid').append('svg')
  .attr({
    width: w,
    height: h
  });

// calculate number of rows and columns
var squaresRow = _.round(w / square);
var squaresColumn = _.round(h / square);

// loop over number of columns
_.times(squaresColumn, function(n) {

  // create each set of rows
  var rows = svg.selectAll('rect' + ' .row-' + (n + 1))
    .data(d3.range(squaresRow))
    .enter().append('rect')
    .attr({
      class: function(d, i) {
        return 'square row-' + (n + 1) + ' ' + 'col-' + (i + 1);
      },
      id: function(d, i) {
        return 's-' + (n + 1) + (i + 1);
      },
      width: square,
      height: square,
      x: function(d, i) {
        return i * square;
      },
      y: n * square,
      fill: '#fff',
      stroke: '#FDBB30'
    });

    // test with some feedback
    var test = rows.on('mouseover', function (d, i) {
      d3.select('#grid-ref').text(function () {
        return 'row: ' + (n + 1) + ' | ' + 'column: ' + (i + 1);
      });
      d3.selectAll('.square').attr('fill', 'white');
      d3.select(this).attr('fill', '#7AC143');
    });
});
function handleClick(event){
            console.log(document.getElementById("numofcol").value)
            console.log(document.getElementById("numofrow").value)
            draw(document.getElementById("numofcol").value)
            return false;
        }

