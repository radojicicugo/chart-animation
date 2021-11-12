
const ctx = document.getElementById('myChart').getContext('2d');

//gradiant fill
let gradient = ctx.createLinearGradient(0,0,0,400);
gradient.addColorStop(0, 'rgba(58,123,213,1)');
gradient.addColorStop(1, "rgba(0, 210,255,0.3)")


const labels = [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
]

const data = {
    labels,
    datasets: [{
        data:[344,300,867,545,396,449,747,646,978],
        label: "Minecraft Sales ",
        fill: true,
        backgroundColor: gradient,
        borderColor: "#000"

    },
    ],    
};

const config = {
    type: "line",
    data: data,
    options: {
        responsive: true,
        scales: {
            y: {
                ticks: {
                    callback: function(value){
                        return "$" + value + "m";
                    }
                }
            }
        }
    }
}

const myChart = new Chart(ctx, config);