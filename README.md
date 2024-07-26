# Wildflowers of USA

## Technologies Used
- HTML : used to create elements on the DOM
- Bootstrap  : Styles html elements on page
- Javascript : used to provide interative effects
- JQuery : event handling, DOM manipulation
- Tableau : Blend data from multiple source and display results 
- D3.js : User friendly visualization of the data results
- Git : version control system to track changes to source code
- GitHub : hosts repository that can be deployed to GitHub pages

## Summary
### An intelligent interactive data visualization of wildflowers scrapped from SCINet database. Photographers or any users can use this application to get more information and predict their flowers of interest blooming areas across the US.

## Code Snippet
```Javascript

    // ****************************************
    // This is a sample of Choropleth map code
    // ****************************************
    d3.csv('https://raw.githubusercontent.com/Mahi-Mani/projectdv/main/Color_State_data.csv', function (err, rows) {
    function unpack(rows, key) {
      return rows.map(function (row) { return row[key]; });
    }

    var data = [{
      type: 'choropleth',
      showlegend: false,
      locationmode: 'USA-states',
      locations: unpack(rows, 'State'),
      z: unpack(rows, 'Red'),
      text: unpack(rows, 'State'),
      zmin: 0,
      zmax: 300,
      colorscale: [
        [0, 'rgb(252,152,177)'], [0, 'rgb(251,117,151)'],
        [0.4, 'rgb(250,90,131)'], [0.6, 'rgb(249,62,110)'],
        [0.8, 'rgb(245,35,89)'], [1, 'rgb(253, 186, 203)']
      ],
      autocolorscale: false,
      reversescale: true
    }];


    var layout = {
      title: '<b>Distribution of <i>Red</i> flowers</b>',
      paper_bgcolor: "#86C6F4",
      plot_bgcolor: "#86C6F4",
      geo: {
        scope: 'usa'
      }
    };

    Plotly.newPlot("myDiv", data, layout, { showLink: false });
  });
```


## Author Links
[LinkedIn](https://www.linkedin.com/in/mahisha-gunasekaran-0a780a88/)

[GitHub](https://github.com/Mahi-Mani)