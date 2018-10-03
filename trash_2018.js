      google.charts.load('current', {
        'packages': ['sankey']
      });
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        var t = 'Trash';
        var r = 'Recycling';
        var c = 'Compost';
        var tb = 'Trash Bins';
        var rb = 'Recycling Bins';
        var cb = 'Compost Bins';
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');
        data.addRows([
          [t, tb, 125.8],
          [t, rb, 19.8],
          [t, cb, 2.2],
          [r, tb, 79.4],
          [r, rb, 140.6],
          [r, cb, 1.6],
          [c, cb, 126.8],
          [c, rb, 16.0],
          [c, tb, 172.8],
        ]);

        var colors = ['000000', '000000', '0000ff', '008000', '0000ff', '008000']

        // Sets chart options.
        var options = {
          width: 600,
          sankey: {
            node: {

              nodePadding: 40,
              colors: colors,
              label: {
                fontName: 'Times-Roman',
                fontSize: 14,
                bold: true,
                italic: false
              }
            },
            link: {
              colorMode: 'source'
            }
          }
        };

        // Instantiates and draws our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
        chart.draw(data, options);
      }
      
      
