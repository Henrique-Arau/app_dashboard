let ctx = document.getElementById('chart').getContext('2d');
let chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: [
                'rgba(255, 99, 132, 10)',
                'rgba(54, 162, 235, 10)',
                'rgba(255, 206, 86, 10)',
                'rgba(75, 192, 192, 10)',
                'rgba(153, 102, 255, 10)',
                'rgba(255, 159, 64, 10)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 10)',
                'rgba(54, 162, 235, 10)',
                'rgba(255, 206, 86, 10)',
                'rgba(75, 192, 192, 10)',
                'rgba(153, 102, 255, 10)',
                'rgba(255, 159, 64, 10)'
            ],
            data: [0, 10, 5, 2, 20, 30, 15],
        }]
    },
    options: {
        animation: {
            duration: 2000,
                easing: 'easeOutBounce'
            
        },
        layout : {
            padding: {
                left: 15,
                right: 15,
                top: 15,
                bottom: 15
            }
        },
        legend : {
            display: true,
            position: 'bottom'
        },
        title : {
            display: true,
            text :'sales by months',
            fontSize: 20
        },
        tooltips : {
            enabled : true,
            intersect: true,
            backgroundColor: 'rgba(255, 99, 132, 10)'
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    drawBorder : false
                },
                position : 'bottom'

            }],
            xAxes: [{
                gridLines: {
                    display: false
                }
            }]
        }

    }
   
 
});

const addData = () => {
    let sizeData = chart.data.datasets[0].data.length
    chart.data.datasets[0].data[sizeData] = Math.random() * 100
    chart.data.labels[sizeData] = `New Data ${sizeData + 1}`
    chart.update()
}

const removeData = () => {
    chart.data.datasets[0].data.pop()
    chart.data.labels.pop()
    chart.update()
}