var data_str = '{"alive_backlinks_count": 2, "backlinks_opportunities_count": 18, "status_code": {"http_200": 2}, "follow_type": {"DoFollow": 2}, "dofollow_percent": 100.0, "postion": {"body": 2}, "anchor_type": {"text": 2}, "countries": [{"name": "Singapore", "code": "SG", "count": 1}, {"name": "United States", "code": "US", "count": 1}], "referring_domains_count": 2, "referring_ips_count": 2, "anchor_text": "\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tquantamixsolutions.com/\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t A Guide to Top 10 AI tools and techniques in SEO for Digital Marketing | Quantamix Solutions"}';
var data = JSON.parse(data_str)


$(window).on('load', function() {
    fillMetrics();
    renderGraphs();  
});

function fillMetrics(){
    $('#backlinks').text(data.alive_backlinks_count)
    $('#follow-percent').text(data.dofollow_percent +"% dofollow")
    $('#ref-ips').text(data.referring_ips_count)
    $('#ref-domains').text(data.referring_domains_count)
}

function get(variable){
    if (typeof variable === 'undefined') {
        variable = NaN;
    }
    return variable;
}

function renderGraphs(){

    var chart = c3.generate({
        bindto: '#link-type',
        data: {
            // iris data from R
            columns: [
                ['DoFollow', get(data.follow_type.DoFollow)], 
                ['NoFollow', get(data.follow_type.NoFollow)] 
            ],
            type : 'pie'        
        }
    });

    var char2 = c3.generate({
        bindto: '#link-type2',
        data: {
            columns: [
                ['Dofollow', data.dofollow_percent]
            ],
            type: 'gauge'          
        },
        gauge: {
    //        label: {
    //            format: function(value, ratio) {
    //                return value;
    //            },
    //            show: false // to turn off the min/max labels.
    //        },
    //    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
    //    max: 100, // 100 is default
    //    units: ' %',
    //    width: 39 // for adjusting arc thickness
        },
        color: {
            pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
            threshold: {
    //            unit: 'value', // percentage is default
    //            max: 200, // 100 is default
                values: [30, 60, 90, 100]
            }
        },
        size: {
            height: 180
        }
    });

    var chart3 = c3.generate({
        bindto:"#anchor-type",
        data: {
            columns: [
                ['Text', get(data.anchor_type.text)],
                ['Image',get(data.anchor_type.image)],
            ],
            type : 'donut'   
        },
        donut: {
            title: "Links Anchor Types"
        }
    });

    var chart4 = c3.generate({
        bindto: '#link-postion',
        size: {
            height: 150
        },
        bar: {
            width: 40
        },
        padding: {
            left: 60
        },
        color: {
            pattern: ['#FABF62', '#ACB6DD','#06a57c']
        },
        data: {
            x: 'x',
            columns:
                [
              ['x', 'Header', 'Body','Footer'],
              ['count',get(data.postion.header), get(data.postion.body), get(data.postion.footer)]
              ],

            type: 'bar',
           
            color: function(inColor, data) {
                var colors = ['#FABF62', '#ACB6DD','#06a57c'];
                if(data.index !== undefined) {
                    return colors[data.index];
                }

                return inColor;
            }
        },
        axis: {
            rotated: true,
            x: {
                type: 'category'
            }
        },
        tooltip: {
            grouped: false
        },
        legend: {
            show: false
        }
    });

    // get status codes that are available
    var codes_keys = ['x'];
    var codes_values = ['count'];
    for (x in data.status_code) {
        codes_keys.push(x.replace('http_',''));
        codes_values.push(data.status_code[x]);
    }
    var chart5 = c3.generate({
        bindto: '#status-code',  
        bar: {
            width: 40
        },
        padding: {
            left: 60
        },    
        data: {
            x: 'x',
            columns:
                [
                codes_keys,
                codes_values    
              ],

            type: 'bar'
        },
        axis: {
            rotated: false,
            x: {
                type: 'category'
            }
        },
        tooltip: {
            grouped: false
        },
        legend: {
            show: false
        }
    });


    // prepare countries array
    var countries_keys = ['x']
    var countries_count = ['count']
    for (const country of data.countries){
        countries_keys.push(country.name + " - " + country.code )
        countries_count.push(country.count)

    }
    var chart6 = c3.generate({
        bindto: '#countries',
        size: {
            height: 150
        },
        bar: {
            width: 40
        }
       ,   
        data: {
            x: 'x',
            columns:
                [
                    countries_keys,
                    countries_count
              ],

            type: 'bar'         
         
        },
        axis: {
            rotated: true,
            x: {
                type: 'category'
            }
        },
        tooltip: {
            grouped: false
        },
        legend: {
            show: false
        }
    });


    // create a tag cloud chart
    var chart7 = anychart.tagCloud();

    // set the parsing mode and configure parsing settings
    chart7.data(data.anchor_text, {
    mode: "by-word",
    maxItems: 30
    });

    // set text spacing
    chart7.textSpacing(15);

    // configure angles
    chart7.angles([0]);

    // set the chart title
    chart7.title("Top Anchors Terms");
    
    // set the container id
    chart7.container("top-anchors");
    
    // initiate drawing the chart
    chart7.draw();

    // ----------------------------------------------
    // DISCLAIMER : you are limited in the ways you can use trial version 
    // and you may not remove credits from the charts. 
    // Buy your license from https://www.anychart.com/buy/
    // ----------------------------------------------

    // remove anychart credits
    // $('div.anychart-credits').remove();
}


