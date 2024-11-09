document.addEventListener('DOMContentLoaded', function () {
    // Population Growth Chart
    var ctx1 = document.getElementById('populationGrowthChart').getContext('2d');
    var populationGrowthChart = new Chart(ctx1, {
        type: 'line', // Line chart for growth trends
        data: {
            labels: ['1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020'],
            datasets: [{
                label: 'World Population (Billions)',
                data: [2.5, 3, 3.7, 4.4, 5.3, 6.1, 6.9, 7.8],
                borderColor: '#007BFF',
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                fill: true,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });

    // Future Projections Chart
    var ctx2 = document.getElementById('futureProjectionsChart').getContext('2d');
    var futureProjectionsChart = new Chart(ctx2, {
        type: 'bar', // Bar chart for projections
        data: {
            labels: ['2025', '2030', '2040', '2050', '2060', '2070', '2080'],
            datasets: [{
                label: 'Projected Population (Billions)',
                data: [8.2, 8.5, 9.2, 9.7, 10.3, 10.9, 11.5],
                backgroundColor: '#28a745',
                borderColor: '#218838',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
});
// Global Population Growth Trends Chart (using Chart.js)
const growthTrendsCtx = document.getElementById('growthTrendsChart').getContext('2d');
const growthTrendsChart = new Chart(growthTrendsCtx, {
    type: 'line', // Line chart
    data: {
        labels: ['1900', '1950', '2000', '2050', '2100'], // Years (for example)
        datasets: [{
            label: 'Global Population (Billion)',
            data: [1.65, 2.52, 6.12, 9.73, 11.2], // Example population data
            borderColor: '#007BFF',
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

// Global Population Demographics Chart (Pie chart example)
const demographicsCtx = document.getElementById('demographicsChart').getContext('2d');
const demographicsChart = new Chart(demographicsCtx, {
    type: 'pie', // Pie chart for demographics
    data: {
        labels: ['Asia', 'Africa', 'Europe', 'Americas', 'Oceania'], // Continents
        datasets: [{
            label: 'Population Distribution by Continent',
            data: [60, 17, 10, 9, 4], // Example population distribution by continent (percentages)
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#ff5733'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true
    }
});

// Future Population Projections Chart (Bar chart example)
const futureProjectionsCtx = document.getElementById('futureProjectionsChart').getContext('2d');
const futureProjectionsChart = new Chart(futureProjectionsCtx, {
    type: 'bar', // Bar chart for future projections
    data: {
        labels: ['2025', '2050', '2075', '2100'], // Future years
        datasets: [{
            label: 'Projected Population (Billion)',
            data: [8.1, 9.8, 10.7, 11.2], // Example future population projections
            backgroundColor: '#42a5f5',
            borderColor: '#1e88e5',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
// Form validation before submission
document.getElementById("form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("All fields are required!");
        event.preventDefault(); // Prevent form submission
    }
});
