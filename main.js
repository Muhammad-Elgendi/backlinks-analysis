var data_str = {'alive_backlinks_count': 3, 'backlinks_opportunities_count': 18, 'status_code': {'http_200': 3}, 'follow_type': {'DoFollow': 3}, 'dofollow_percent': 100.0, 'postion': {'body': 3}, 'anchor_type': {'text': 3}, 'countries': [{'name': 'United States', 'code': 'US', 'count': 3}], 'referring_domains_count': 3, 'referring_ips_count': 3, 'anchor_text': '\n\t\t\t\t\t\t\t\t\t\tquantamixsolutions.com/\n\t\t\t\t\t\t\t\t\t https://quantamixsolutions.com Privacy Policy A Guide to Top 10 AI tools and techniques in SEO for Digital Marketing | Quantamix Solutions'};

// convert JSON string
// var data = JSON.parse(data_str)

var data = data_str;

// backlinks table 
var backlinks_table = [{"backlink":"https:\/\/www.raisedtoday.com\/fr\/soci%C3%A9t%C3%A9\/quantamix-solutions","status_code":200,"is_doFollow":true,"target_url":"https:\/\/quantamixsolutions.com\/","position":"body","anchor_text":"\n\t\t\t\t\t\t\t\t\t\tquantamixsolutions.com\/\n\t\t\t\t\t\t\t\t\t","anchor_type":"text","externalLinks":97,"hasManyBacklinks":false,"ip":"104.24.120.60","countryCode":"US","country":"United States","from_spam_heavy_country":false,"rank":115552367,"pagerank":0.55,"AlexaTrafficRank":682345.0,"AlexaReach":606448.0,"AlexaRank":176382.0,"AlexaRankCountry":"India","AlexaRankCountryCode":"IN"},{"backlink":"https:\/\/themacmarketer.com\/a-guide-to-top-10-ai-tools-and-techniques-in-seo-for-digital-marketing-quantamix-solutions\/","status_code":200,"is_doFollow":true,"target_url":"https:\/\/quantamixsolutions.com\/blog\/40\/ai-tools-and-techniques-in-seo-for-affiliate-marketing","position":"body","anchor_text":"A Guide to Top 10 AI tools and techniques in SEO for Digital Marketing | Quantamix Solutions","anchor_type":"text","externalLinks":15,"hasManyBacklinks":false,"ip":"94.237.79.108","countryCode":"SG","country":"Singapore","from_spam_heavy_country":false,"rank":19583346,"pagerank":2.13,"AlexaTrafficRank":5726678.0,"AlexaReach":5201003.0,"AlexaRank":null,"AlexaRankCountry":null,"AlexaRankCountryCode":null}];

// opportunities table
var opportunities_table =[{"URL":"https:\/\/www.crunchbase.com\/organization\/quantamix-solutions","status_code":403,"is_doFollow":true,"externalLinks":1,"hasManyBacklinks":false,"ip":"104.22.63.68","countryCode":"US","country":"United States","from_spam_heavy_country":false,"rank":1229,"pagerank":6.35,"AlexaTrafficRank":3984.0,"AlexaReach":5170.0,"AlexaRank":948.0,"AlexaRankCountry":"United States","AlexaRankCountryCode":"US"},{"URL":"https:\/\/www.glassdoor.com\/Jobs\/Quantamix-Solutions-Amsterdam-Jobs-EI_IE2852604.0,19_IL.20,29_IM1112.htm","status_code":403,"is_doFollow":true,"externalLinks":0,"hasManyBacklinks":false,"ip":"104.17.91.51","countryCode":"US","country":"United States","from_spam_heavy_country":false,"rank":2022,"pagerank":6.15,"AlexaTrafficRank":447.0,"AlexaReach":479.0,"AlexaRank":127.0,"AlexaRankCountry":"United States","AlexaRankCountryCode":"US"},{"URL":"https:\/\/www.glassdoor.com\/Location\/Quantamix-Solutions-Uithoorn-Location-EI_IE2852604.0,19_IL.20,28_IC3065372.htm","status_code":403,"is_doFollow":true,"externalLinks":0,"hasManyBacklinks":false,"ip":"104.17.91.51","countryCode":"US","country":"United States","from_spam_heavy_country":false,"rank":2022,"pagerank":6.15,"AlexaTrafficRank":447.0,"AlexaReach":479.0,"AlexaRank":127.0,"AlexaRankCountry":"United States","AlexaRankCountryCode":"US"},{"URL":"https:\/\/angel.co\/company\/quantamix-solutions-1","status_code":403,"is_doFollow":false,"externalLinks":1,"hasManyBacklinks":false,"ip":"104.18.24.39","countryCode":"US","country":"United States","from_spam_heavy_country":false,"rank":10550,"pagerank":5.71,"AlexaTrafficRank":6197.0,"AlexaReach":7161.0,"AlexaRank":2574.0,"AlexaRankCountry":"United States","AlexaRankCountryCode":"US"},{"URL":"https:\/\/oblcc.com\/quantamix","status_code":200,"is_doFollow":true,"externalLinks":19,"hasManyBacklinks":false,"ip":"198.49.23.145","countryCode":"US","country":"United States","from_spam_heavy_country":false,"rank":3118963,"pagerank":3.46,"AlexaTrafficRank":null,"AlexaReach":null,"AlexaRank":null,"AlexaRankCountry":null,"AlexaRankCountryCode":null},{"URL":"https:\/\/www.zaubacorp.com\/company\/QUANTAMIX-SOLUTIONS-PRIVATE-LIMITED\/U72200PN2019PTC181629","status_code":200,"is_doFollow":true,"externalLinks":27,"hasManyBacklinks":false,"ip":"13.235.181.248","countryCode":"IN","country":"India","from_spam_heavy_country":true,"rank":255974,"pagerank":4.48,"AlexaTrafficRank":6479.0,"AlexaReach":6258.0,"AlexaRank":527.0,"AlexaRankCountry":"India","AlexaRankCountryCode":"IN"},{"URL":"https:\/\/www.glassdoor.com.au\/Location\/All-Quantamix-Solutions-Office-Locations-E2852604.htm","status_code":403,"is_doFollow":true,"externalLinks":0,"hasManyBacklinks":false,"ip":"104.16.203.90","countryCode":"US","country":"United States","from_spam_heavy_country":false,"rank":838534,"pagerank":4.2,"AlexaTrafficRank":24755.0,"AlexaReach":23915.0,"AlexaRank":326.0,"AlexaRankCountry":"Australia","AlexaRankCountryCode":"AU"},{"URL":"https:\/\/commons.wikimedia.org\/wiki\/File:Quantamix_Solutions_Logo.png","status_code":200,"is_doFollow":true,"externalLinks":80,"hasManyBacklinks":false,"ip":"208.80.154.224","countryCode":"US","country":"United States","from_spam_heavy_country":false,"rank":68,"pagerank":8.02,"AlexaTrafficRank":325.0,"AlexaReach":294.0,"AlexaRank":302.0,"AlexaRankCountry":"United States","AlexaRankCountryCode":"US"},{"URL":"https:\/\/www.iamexpat.nl\/career\/jobs-netherlands\/recruitment-agencies-and-companies\/quantamix-solutions-bv","status_code":200,"is_doFollow":true,"externalLinks":254,"hasManyBacklinks":true,"ip":"159.69.245.13","countryCode":"DE","country":"Germany","from_spam_heavy_country":false,"rank":111324,"pagerank":4.72,"AlexaTrafficRank":111922.0,"AlexaReach":91775.0,"AlexaRank":89781.0,"AlexaRankCountry":"India","AlexaRankCountryCode":"IN"},{"URL":"https:\/\/graduateland.com\/employer\/jobs\/quantamix-solutions-bv","status_code":200,"is_doFollow":true,"externalLinks":80,"hasManyBacklinks":false,"ip":"54.76.82.221","countryCode":"IE","country":"Ireland","from_spam_heavy_country":false,"rank":1587133,"pagerank":3.8,"AlexaTrafficRank":158285.0,"AlexaReach":149472.0,"AlexaRank":null,"AlexaRankCountry":null,"AlexaRankCountryCode":null},{"URL":"https:\/\/www.glassdoor.sg\/Reviews\/Quantamix-Solutions-Reviews-E2852604.htm","status_code":403,"is_doFollow":true,"externalLinks":0,"hasManyBacklinks":false,"ip":"104.16.95.86","countryCode":"US","country":"United States","from_spam_heavy_country":false,"rank":941731,"pagerank":4.08,"AlexaTrafficRank":18218.0,"AlexaReach":18869.0,"AlexaRank":108.0,"AlexaRankCountry":"Singapore","AlexaRankCountryCode":"SG"},{"URL":"https:\/\/europe-internship.com\/employer\/harish77kumar\/","status_code":200,"is_doFollow":true,"externalLinks":12,"hasManyBacklinks":false,"ip":"82.98.139.204","countryCode":"ES","country":"Spain","from_spam_heavy_country":false,"rank":5054452,"pagerank":3.09,"AlexaTrafficRank":1063529.0,"AlexaReach":957090.0,"AlexaRank":null,"AlexaRankCountry":null,"AlexaRankCountryCode":null},{"URL":"https:\/\/www.naukri.com\/recruiter-job-listings-Python-Developer-Quantamix-Solutions-Pvt-Ltd-Bengaluru-Bangalore-Pune-Jaipur-2-to-4-years-7634208","status_code":200,"is_doFollow":true,"externalLinks":64,"hasManyBacklinks":false,"ip":"54.251.103.25","countryCode":"SG","country":"Singapore","from_spam_heavy_country":false,"rank":71227,"pagerank":5.06,"AlexaTrafficRank":449.0,"AlexaReach":602.0,"AlexaRank":38.0,"AlexaRankCountry":"India","AlexaRankCountryCode":"IN"},{"URL":"https:\/\/www.chemarc.com\/companies\/company_detail\/quantamix-solutions-private-limited\/U72200PN2019PTC181629","status_code":200,"is_doFollow":true,"externalLinks":50,"hasManyBacklinks":false,"ip":"35.240.242.143","countryCode":null,"country":null,"from_spam_heavy_country":false,"rank":14064885,"pagerank":2.35,"AlexaTrafficRank":414452.0,"AlexaReach":369582.0,"AlexaRank":44798.0,"AlexaRankCountry":"India","AlexaRankCountryCode":"IN"},{"URL":"https:\/\/cleartax.in\/f\/company\/quantamix-solutions-private-limited\/U72200PN2019PTC181629","status_code":200,"is_doFollow":true,"externalLinks":35,"hasManyBacklinks":false,"ip":"13.226.50.6","countryCode":"US","country":"United States","from_spam_heavy_country":false,"rank":104602,"pagerank":4.75,"AlexaTrafficRank":2236.0,"AlexaReach":2157.0,"AlexaRank":154.0,"AlexaRankCountry":"India","AlexaRankCountryCode":"IN"},{"URL":"https:\/\/empowerednews.net\/content-automation-ai-tools-market-detailed-swot-analysis-by-2027-quantamix-solutions-scoop-it-stats-llc-wordsmith-wordlift-srl\/181672469\/","status_code":200,"is_doFollow":true,"externalLinks":6,"hasManyBacklinks":false,"ip":"172.67.165.194","countryCode":"US","country":"United States","from_spam_heavy_country":false,"rank":785344,"pagerank":4.22,"AlexaTrafficRank":289833.0,"AlexaReach":372685.0,"AlexaRank":29770.0,"AlexaRankCountry":"India","AlexaRankCountryCode":"IN"},{"URL":"https:\/\/www.hubspot.com\/agencies\/growack-com","status_code":200,"is_doFollow":true,"externalLinks":0,"hasManyBacklinks":false,"ip":"104.19.155.83","countryCode":"US","country":"United States","from_spam_heavy_country":false,"rank":1907,"pagerank":6.17,"AlexaTrafficRank":728.0,"AlexaReach":1034.0,"AlexaRank":366.0,"AlexaRankCountry":"United States","AlexaRankCountryCode":"US"},{"URL":"http:\/\/eurobankingonline.org\/","status_code":403,"is_doFollow":true,"externalLinks":0,"hasManyBacklinks":false,"ip":"185.135.241.56","countryCode":"NL","country":"Netherlands","from_spam_heavy_country":false,"rank":41291075,"pagerank":1.75,"AlexaTrafficRank":null,"AlexaReach":null,"AlexaRank":null,"AlexaRankCountry":null,"AlexaRankCountryCode":null}];



$(window).on('load', function() {
    fillMetrics();
    renderGraphs();  
    prepareTables();
});

function fillMetrics(){
    $('#backlinks').text(data.alive_backlinks_count)
    $('#follow-percent').text(data.dofollow_percent +"% dofollow")
    $('#ref-ips').text(data.referring_ips_count)
    $('#ref-domains').text(data.referring_domains_count)
    $('#opportunities').text(data.backlinks_opportunities_count)
}

function prepareTables(){
    var table = new Tabulator("#backlinks-table", {
        data:backlinks_table,     //load row data from array      
        width:"311px",
        tooltips:true,            //show tool tips on cells      
        pagination:"local",       //paginate the data
        paginationSize:10,         //allow 7 rows per page of data
        movableColumns:true,      //allow column order to be changed
        resizableRows:true,       //allow row order to be changed
        initialSort:[             //set the initial sort order of the data
            {column:"name", dir:"asc"},
        ],
        columns:[                 //define the table columns
            {title:"Backlink", field:"backlink"},
            {title:"Status code", field:"status_code"},
            {title:"DoFollow", field:"is_doFollow", formatter:"tickCross", sorter:"boolean"},
            {title:"Target url", field:"target_url"},
            {title:"Position", field:"position"},
            {title:"Anchor text", field:"anchor_text"},
            {title:"Anchor type", field:"anchor_type"},
            {title:"External Links", field:"externalLinks"},
            {title:"hasManyBacklinks", field:"hasManyBacklinks",formatter:"tickCross", sorter:"boolean"},
            {title:"IP", field:"ip"},
            {title:"countryCode", field:"countryCode"},
            {title:"Country", field:"country"},
            {title:"from_spam_heavy_country", field:"from_spam_heavy_country",formatter:"tickCross", sorter:"boolean"},
            {title:"Rank", field:"rank"},
            {title:"Page rank", field:"pagerank"},
            {title:"AlexaTrafficRank", field:"AlexaTrafficRank"},
            {title:"AlexaReach", field:"AlexaReach"},
            {title:"AlexaRank", field:"AlexaRank"},
            {title:"AlexaRankCountry", field:"AlexaRankCountry"},
            {title:"AlexaRankCountryCode", field:"AlexaRankCountryCode"}

            // {title:"Name", field:"name", editor:"input"},
            // {title:"Task Progress", field:"progress", hozAlign:"left", formatter:"progress", editor:true},
            // {title:"Gender", field:"gender", width:95, editor:"select", editorParams:{values:["male", "female"]}},
            // {title:"Rating", field:"rating", formatter:"star", hozAlign:"center", width:100, editor:true},
            // {title:"Color", field:"col", width:130, editor:"input"},
            // {title:"Date Of Birth", field:"dob", width:130, sorter:"date", hozAlign:"center"},
            // {title:"Driver", field:"car", width:90,  hozAlign:"center", formatter:"tickCross", sorter:"boolean", editor:true},
        ],
    });

    var table2 = new Tabulator("#opportunities-table", {
        data:opportunities_table,     //load row data from array      
        width:"311px",
        tooltips:true,            //show tool tips on cells      
        pagination:"local",       //paginate the data
        paginationSize:10,         //allow 7 rows per page of data
        movableColumns:true,      //allow column order to be changed
        resizableRows:true,       //allow row order to be changed
        initialSort:[             //set the initial sort order of the data
            {column:"name", dir:"asc"},
        ],
        columns:[                 //define the table columns
            {title:"URL", field:"URL"},
            {title:"Status code", field:"status_code"},
            {title:"DoFollow by Default", field:"is_doFollow", formatter:"tickCross", sorter:"boolean"},
            {title:"External Links", field:"externalLinks"},
            {title:"hasManyBacklinks", field:"hasManyBacklinks",formatter:"tickCross", sorter:"boolean"},
            {title:"IP", field:"ip"},
            {title:"countryCode", field:"countryCode"},
            {title:"Country", field:"country"},
            {title:"from_spam_heavy_country", field:"from_spam_heavy_country",formatter:"tickCross", sorter:"boolean"},
            {title:"Rank", field:"rank"},
            {title:"Page rank", field:"pagerank"},
            {title:"AlexaTrafficRank", field:"AlexaTrafficRank"},
            {title:"AlexaReach", field:"AlexaReach"},
            {title:"AlexaRank", field:"AlexaRank"},
            {title:"AlexaRankCountry", field:"AlexaRankCountry"},
            {title:"AlexaRankCountryCode", field:"AlexaRankCountryCode"}
        ],
    });


    //trigger download of csv files
    document.getElementById("download-csv").addEventListener("click", function(){
        table.download("csv", "alive-backlinks.csv");
    });

    document.getElementById("download-csv-2").addEventListener("click", function(){
        table2.download("csv", "backlinks-opportunities.csv");
    });

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
    // chart7.title("Top Anchors Terms");
    
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


