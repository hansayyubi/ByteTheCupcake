// menambahkan hovered ke dalam class melalui selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink(){
    list.forEach(item=>{
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
    
}
list.forEach(item => item.addEventListener("mouseover", activeLink))

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function(){
    navigation.classList.toggle("active");
    main.classList.toggle("active");
}

// Chart
const ctx = document.getElementById('myChart').getContext('2d');
const chartTooltip = document.getElementById('chartTooltip');

const data = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
        {
            label: 'Dataset 1',
            data: [2000, 2100, 1900, 2200, 2300, 2000, 2100, 1950, 1800, 2500, 2600, 2400, 2300, 2050, 2047, 2200, 2250, 2100, 2200, 2150, 2100, 2200, 2300, 2400, 2200, 2100, 2050, 2000, 1950, 2200],
            borderColor: 'black',
            borderWidth: 2,
            fill: true,
            backgroundColor: 'rgba(255, 206, 86, 0.2)'
        },
        {
            label: 'Dataset 2',
            data: [1500, 1600, 1550, 1700, 1650, 1750, 1800, 1950, 2100, 1800, 1700, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2100, 2150, 2250, 2300, 2200, 2150, 2050, 1950, 1850, 1750, 1650, 1550],
            borderColor: 'gray',
            borderWidth: 2,
            fill: true,
            backgroundColor: 'rgba(201, 203, 207, 0.2)'
        }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            intersect: false,
            mode: 'index'
        },
        plugins: {
            tooltip: {
                enabled: false,
                external: function(context) {
                    // Tooltip Element
                    let tooltipEl = chartTooltip;

                    // Hide if no tooltip
                    if (context.tooltip.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }

                    // Set Text
                    if (context.tooltip.dataPoints.length > 0) {
                        const dataPoint = context.tooltip.dataPoints[0];
                        tooltipEl.innerHTML = `<b>${dataPoint.raw}</b>`;
                    }

                    // Display, position, and set styles for font
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.left = context.tooltip.caretX + 'px';
                    tooltipEl.style.top = context.tooltip.caretY + 'px';
                }
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                max: 3000,
                min: 1000
            }
        }
    }
};

const myChart = new Chart(ctx, config);
