document.addEventListener('DOMContentLoaded', () => {

    const options = {
        
        chart:{
            type: 'bar'
        },
        title:{
            text: ' '
        },
        tooltip:{
            animation: true
        }
        
    }
    fetch('csv/cityNetworkViewer.csv')
        .then(res => {
            return res.text();
        })
        .then(csv => {
        options.data = {
            csv
        };
        Highcharts.chart('firstContainer', options);
    })

    fetch('csv/genreNetworkViewer.csv')
        .then(res => {
            return res.text();
        })
        .then(csv => {
        options.data = {
            csv
        };
        Highcharts.chart('secondContainer', options);
    })

    fetch('csv/programNetworkViewers.csv')
        .then(res => {
            return res.text();
        })
        .then(csv => {
        options.data = {
            csv
        };
        Highcharts.chart('thirdContainer', options);
    })
})


// network,genre,viewers
// ABC,Sports,1037
// ABC,Mystery,3850
// ABC,Science Fiction,0
// CBS,Sports,1255
// CBS,Science Fiction,2375
// CBS,Mystery,3600
// SYFY,Mystery,0
// SYFY,Sports,0
// SYFY,Science Fiction,1675

// hometown,genre,viewers
// Boston,Sports,130
// Boston,Science Fiction,1100
// Boston,Mystery,2100
// Cleveland,Sports,855
// Cleveland,Science Fiction,525
// Cleveland,Mystery,1550
// New York,Sports,300
// New York,Science Fiction,1950
// New York,Mystery,2250
// Pittsburgh,Sports,1007
// Pittsburgh,Science Fiction,475
// Pittsburgh,Mystery,1550
