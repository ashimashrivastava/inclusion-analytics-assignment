document.addEventListener('DOMContentLoaded', () => {

    Highcharts.chart('firstContainer', {
        chart:{
            type: 'line'
        },

        credits:{
            enabled: false
        },
        title:{
            text: 'Number of people watching specific genre in different programing networks!'
        },
        
        tooltip:{
            animation: true
        },
        xAxis: {
            categories: ['ABC', 'CBS', 'SyFy']
        },
        series: [
            {
                name: 'Mystry',
                data: [3850, 3600, 0]
            },
            {
                name: 'Science Fiction',
                data: [0, 2375, 1675]
            },
            {
                name: 'Sports',
                data: [1037, 1255, 0]
            }
        ]
    })

    Highcharts.chart('secondContainer', {
        chart:{
            type: 'bar'
        },

        credits:{
            enabled: false
        },
        title:{
            text: 'Number of people watching specific genre in different programing networks!'
        },
        
        tooltip:{
            animation: true
        },
        xAxis: {
            categories: ['ABC', 'CBS', 'SyFy']
        },
        series: [
            {
                name: 'Mystry',
                data: [3850, 3600, 0]
            },
            {
                name: 'Science Fiction',
                data: [0, 2375, 1675]
            },
            {
                name: 'Sports',
                data: [1037, 1255, 0]
            }
        ]
    })
})