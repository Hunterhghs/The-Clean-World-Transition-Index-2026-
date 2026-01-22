// ===== Country Data =====
const countryData = [
    { rank: 1, country: "Norway", flag: "🇳🇴", region: "europe", overall: 94.7, co2: 98.2, air: 96.1, renewable: 97.8, electrification: 96.4, waste: 89.2, water: 88.5, change: 2.1 },
    { rank: 2, country: "Denmark", flag: "🇩🇰", region: "europe", overall: 91.4, co2: 89.5, air: 93.2, renewable: 93.6, electrification: 85.1, waste: 88.7, water: 93.1, change: 3.4 },
    { rank: 3, country: "Sweden", flag: "🇸🇪", region: "europe", overall: 89.8, co2: 96.5, air: 94.8, renewable: 88.2, electrification: 89.2, waste: 86.4, water: 85.2, change: 1.8 },
    { rank: 4, country: "Finland", flag: "🇫🇮", region: "europe", overall: 88.6, co2: 87.3, air: 97.8, renewable: 86.4, electrification: 82.6, waste: 84.9, water: 91.4, change: 2.7 },
    { rank: 5, country: "Iceland", flag: "🇮🇸", region: "europe", overall: 87.9, co2: 92.4, air: 97.2, renewable: 99.1, electrification: 78.5, waste: 72.4, water: 86.8, change: 1.2 },
    { rank: 6, country: "Switzerland", flag: "🇨🇭", region: "europe", overall: 86.4, co2: 93.8, air: 88.6, renewable: 78.2, electrification: 84.3, waste: 87.1, water: 89.7, change: 2.3 },
    { rank: 7, country: "Netherlands", flag: "🇳🇱", region: "europe", overall: 84.2, co2: 78.4, air: 82.1, renewable: 76.5, electrification: 86.7, waste: 85.3, water: 90.2, change: 4.1 },
    { rank: 8, country: "Austria", flag: "🇦🇹", region: "europe", overall: 83.7, co2: 84.6, air: 86.9, renewable: 82.4, electrification: 78.2, waste: 93.2, water: 84.6, change: 2.9 },
    { rank: 9, country: "Germany", flag: "🇩🇪", region: "europe", overall: 82.9, co2: 79.2, air: 81.4, renewable: 74.8, electrification: 81.5, waste: 94.6, water: 86.3, change: 3.6 },
    { rank: 10, country: "France", flag: "🇫🇷", region: "europe", overall: 82.1, co2: 94.1, air: 84.2, renewable: 68.5, electrification: 79.8, waste: 78.4, water: 82.1, change: 2.4 },
    { rank: 11, country: "United Kingdom", flag: "🇬🇧", region: "europe", overall: 80.6, co2: 82.3, air: 79.8, renewable: 72.4, electrification: 78.9, waste: 76.2, water: 87.5, change: 3.8 },
    { rank: 12, country: "Japan", flag: "🇯🇵", region: "asia", overall: 79.6, co2: 68.4, air: 78.2, renewable: 64.8, electrification: 76.5, waste: 89.4, water: 91.7, change: 4.2 },
    { rank: 13, country: "Belgium", flag: "🇧🇪", region: "europe", overall: 78.9, co2: 76.8, air: 75.4, renewable: 65.2, electrification: 77.4, waste: 90.7, water: 83.8, change: 2.1 },
    { rank: 14, country: "South Korea", flag: "🇰🇷", region: "asia", overall: 76.8, co2: 58.4, air: 62.8, renewable: 58.2, electrification: 82.3, waste: 92.8, water: 88.6, change: 5.4 },
    { rank: 15, country: "New Zealand", flag: "🇳🇿", region: "asia", overall: 75.4, co2: 74.2, air: 95.4, renewable: 84.6, electrification: 68.4, waste: 62.8, water: 78.4, change: 1.9 },
    { rank: 16, country: "Canada", flag: "🇨🇦", region: "americas", overall: 74.2, co2: 71.8, air: 89.2, renewable: 78.4, electrification: 72.6, waste: 68.4, water: 74.8, change: 2.8 },
    { rank: 17, country: "Portugal", flag: "🇵🇹", region: "europe", overall: 73.8, co2: 78.6, air: 82.4, renewable: 78.9, electrification: 68.2, waste: 64.2, water: 72.4, change: 4.8 },
    { rank: 18, country: "Spain", flag: "🇪🇸", region: "europe", overall: 72.6, co2: 74.2, air: 78.6, renewable: 76.4, electrification: 65.8, waste: 62.4, water: 68.2, change: 3.9 },
    { rank: 19, country: "Israel", flag: "🇮🇱", region: "middle-east", overall: 72.3, co2: 62.4, air: 68.2, renewable: 42.8, electrification: 64.8, waste: 72.4, water: 96.8, change: 3.2 },
    { rank: 20, country: "Costa Rica", flag: "🇨🇷", region: "americas", overall: 71.8, co2: 86.2, air: 84.6, renewable: 95.2, electrification: 52.4, waste: 48.6, water: 64.2, change: 2.4 },
    { rank: 21, country: "Ireland", flag: "🇮🇪", region: "europe", overall: 71.4, co2: 68.4, air: 86.8, renewable: 72.4, electrification: 68.2, waste: 64.8, water: 78.6, change: 3.6 },
    { rank: 22, country: "Italy", flag: "🇮🇹", region: "europe", overall: 70.8, co2: 72.8, air: 68.4, renewable: 68.2, electrification: 64.6, waste: 74.8, water: 72.4, change: 2.8 },
    { rank: 23, country: "Slovenia", flag: "🇸🇮", region: "europe", overall: 70.2, co2: 74.6, air: 72.8, renewable: 58.4, electrification: 62.8, waste: 91.4, water: 68.2, change: 4.2 },
    { rank: 24, country: "Uruguay", flag: "🇺🇾", region: "americas", overall: 68.9, co2: 82.4, air: 78.6, renewable: 91.4, electrification: 48.2, waste: 42.8, water: 58.4, change: 3.8 },
    { rank: 25, country: "Singapore", flag: "🇸🇬", region: "asia", overall: 68.4, co2: 52.8, air: 58.4, renewable: 18.6, electrification: 72.4, waste: 78.6, water: 95.4, change: 4.6 },
    { rank: 26, country: "United States", flag: "🇺🇸", region: "americas", overall: 67.8, co2: 58.6, air: 74.2, renewable: 52.8, electrification: 68.4, waste: 62.4, water: 72.8, change: 4.8 },
    { rank: 27, country: "Australia", flag: "🇦🇺", region: "asia", overall: 66.4, co2: 48.2, air: 94.2, renewable: 58.6, electrification: 62.8, waste: 58.4, water: 68.2, change: 5.2 },
    { rank: 28, country: "Czech Republic", flag: "🇨🇿", region: "europe", overall: 65.8, co2: 54.8, air: 62.4, renewable: 48.2, electrification: 68.6, waste: 78.4, water: 74.2, change: 3.4 },
    { rank: 29, country: "UAE", flag: "🇦🇪", region: "middle-east", overall: 64.7, co2: 38.4, air: 52.8, renewable: 32.4, electrification: 58.6, waste: 68.2, water: 88.4, change: 6.8 },
    { rank: 30, country: "Morocco", flag: "🇲🇦", region: "africa", overall: 62.4, co2: 68.2, air: 64.8, renewable: 72.4, electrification: 48.6, waste: 38.4, water: 54.2, change: 5.4 },
    { rank: 31, country: "Chile", flag: "🇨🇱", region: "americas", overall: 61.8, co2: 54.6, air: 68.4, renewable: 68.2, electrification: 52.8, waste: 48.6, water: 62.4, change: 4.6 },
    { rank: 32, country: "China", flag: "🇨🇳", region: "asia", overall: 58.4, co2: 38.2, air: 42.8, renewable: 62.4, electrification: 82.3, waste: 58.6, water: 52.4, change: 7.2 },
    { rank: 33, country: "Poland", flag: "🇵🇱", region: "europe", overall: 57.2, co2: 42.8, air: 48.6, renewable: 42.4, electrification: 58.2, waste: 68.4, water: 72.6, change: 4.8 },
    { rank: 34, country: "Brazil", flag: "🇧🇷", region: "americas", overall: 56.8, co2: 72.4, air: 62.8, renewable: 78.6, electrification: 42.4, waste: 32.8, water: 48.6, change: 2.4 },
    { rank: 35, country: "Jordan", flag: "🇯🇴", region: "middle-east", overall: 58.2, co2: 54.8, air: 58.2, renewable: 48.6, electrification: 42.4, waste: 38.6, water: 78.4, change: 5.8 },
    { rank: 36, country: "Mexico", flag: "🇲🇽", region: "americas", overall: 54.6, co2: 52.4, air: 48.2, renewable: 42.8, electrification: 48.6, waste: 38.4, water: 58.2, change: 3.2 },
    { rank: 37, country: "South Africa", flag: "🇿🇦", region: "africa", overall: 54.1, co2: 32.4, air: 52.8, renewable: 38.6, electrification: 52.4, waste: 42.8, water: 68.4, change: 4.2 },
    { rank: 38, country: "Thailand", flag: "🇹🇭", region: "asia", overall: 52.8, co2: 42.6, air: 38.4, renewable: 38.2, electrification: 52.8, waste: 58.4, water: 62.6, change: 4.8 },
    { rank: 39, country: "Turkey", flag: "🇹🇷", region: "europe", overall: 52.4, co2: 48.2, air: 42.8, renewable: 54.6, electrification: 42.4, waste: 38.6, water: 58.2, change: 3.6 },
    { rank: 40, country: "Egypt", flag: "🇪🇬", region: "africa", overall: 51.8, co2: 52.4, air: 38.6, renewable: 42.8, electrification: 48.2, waste: 32.4, water: 72.6, change: 4.4 },
    { rank: 41, country: "Argentina", flag: "🇦🇷", region: "americas", overall: 51.4, co2: 58.2, air: 62.4, renewable: 52.8, electrification: 38.6, waste: 28.4, water: 48.2, change: 2.8 },
    { rank: 42, country: "Vietnam", flag: "🇻🇳", region: "asia", overall: 49.8, co2: 38.4, air: 32.6, renewable: 48.2, electrification: 52.4, waste: 42.8, water: 58.6, change: 6.2 },
    { rank: 43, country: "Indonesia", flag: "🇮🇩", region: "asia", overall: 48.2, co2: 42.8, air: 28.4, renewable: 38.6, electrification: 48.2, waste: 38.4, water: 52.8, change: 5.4 },
    { rank: 44, country: "Saudi Arabia", flag: "🇸🇦", region: "middle-east", overall: 46.8, co2: 28.4, air: 42.6, renewable: 18.2, electrification: 52.8, waste: 48.6, water: 72.4, change: 6.4 },
    { rank: 45, country: "India", flag: "🇮🇳", region: "asia", overall: 44.6, co2: 38.2, air: 18.6, renewable: 42.8, electrification: 48.4, waste: 32.6, water: 48.2, change: 5.8 },
    { rank: 46, country: "Russia", flag: "🇷🇺", region: "europe", overall: 42.8, co2: 38.4, air: 48.2, renewable: 28.6, electrification: 42.4, waste: 28.8, water: 58.6, change: 1.2 },
    { rank: 47, country: "Philippines", flag: "🇵🇭", region: "asia", overall: 42.4, co2: 48.2, air: 32.4, renewable: 38.8, electrification: 38.6, waste: 28.4, water: 48.2, change: 3.8 },
    { rank: 48, country: "Nigeria", flag: "🇳🇬", region: "africa", overall: 38.6, co2: 52.4, air: 28.2, renewable: 32.8, electrification: 32.4, waste: 18.6, water: 38.4, change: 4.2 },
    { rank: 49, country: "Pakistan", flag: "🇵🇰", region: "asia", overall: 36.2, co2: 42.8, air: 12.4, renewable: 28.6, electrification: 38.2, waste: 22.4, water: 42.8, change: 3.4 },
    { rank: 50, country: "Bangladesh", flag: "🇧🇩", region: "asia", overall: 34.8, co2: 48.2, air: 8.6, renewable: 18.4, electrification: 38.6, waste: 18.2, water: 38.4, change: 4.6 }
];

// ===== DOM Elements =====
const rankingsTableBody = document.getElementById('rankingsTableBody');
const countrySearch = document.getElementById('countrySearch');
const filterButtons = document.querySelectorAll('.filter-btn');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

// ===== Initialize Page =====
document.addEventListener('DOMContentLoaded', () => {
    renderRankingsTable(countryData);
    initializeCharts();
    initializeEventListeners();
});

// ===== Render Rankings Table =====
function renderRankingsTable(data) {
    rankingsTableBody.innerHTML = data.map(country => `
        <tr data-region="${country.region}">
            <td class="rank-cell">${country.rank}</td>
            <td>
                <div class="country-cell">
                    <span class="country-flag">${country.flag}</span>
                    <span>${country.country}</span>
                </div>
            </td>
            <td class="score-cell ${getScoreClass(country.overall)}">${country.overall.toFixed(1)}</td>
            <td>
                <div class="score-bar">
                    <div class="score-bar-fill" style="width: ${country.co2}%"></div>
                </div>
            </td>
            <td>
                <div class="score-bar">
                    <div class="score-bar-fill" style="width: ${country.air}%"></div>
                </div>
            </td>
            <td>
                <div class="score-bar">
                    <div class="score-bar-fill" style="width: ${country.renewable}%"></div>
                </div>
            </td>
            <td>
                <div class="score-bar">
                    <div class="score-bar-fill" style="width: ${country.electrification}%"></div>
                </div>
            </td>
            <td>
                <div class="score-bar">
                    <div class="score-bar-fill" style="width: ${country.waste}%"></div>
                </div>
            </td>
            <td>
                <div class="score-bar">
                    <div class="score-bar-fill" style="width: ${country.water}%"></div>
                </div>
            </td>
            <td class="${getChangeClass(country.change)}">${country.change > 0 ? '+' : ''}${country.change.toFixed(1)}</td>
        </tr>
    `).join('');
}

function getScoreClass(score) {
    if (score >= 70) return 'score-high';
    if (score >= 50) return 'score-medium';
    return 'score-low';
}

function getChangeClass(change) {
    if (change > 0) return 'change-positive';
    if (change < 0) return 'change-negative';
    return 'change-neutral';
}

// ===== Event Listeners =====
function initializeEventListeners() {
    // Search functionality
    countrySearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = countryData.filter(country => 
            country.country.toLowerCase().includes(searchTerm)
        );
        renderRankingsTable(filtered);
    });

    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            const filtered = filter === 'all' 
                ? countryData 
                : countryData.filter(country => country.region === filter);
            renderRankingsTable(filtered);
        });
    });

    // Tab navigation
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(`${tab}-content`).classList.add('active');
        });
    });

    // Mobile navigation
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                navLinks.classList.remove('active');
            }
        });
    });
}

// ===== Chart Configurations =====
const chartColors = {
    primary: 'rgba(14, 165, 233, 1)',
    primaryLight: 'rgba(14, 165, 233, 0.2)',
    secondary: 'rgba(16, 185, 129, 1)',
    secondaryLight: 'rgba(16, 185, 129, 0.2)',
    accent: 'rgba(139, 92, 246, 1)',
    accentLight: 'rgba(139, 92, 246, 0.2)',
    warning: 'rgba(245, 158, 11, 1)',
    warningLight: 'rgba(245, 158, 11, 0.2)',
    danger: 'rgba(239, 68, 68, 1)',
    dangerLight: 'rgba(239, 68, 68, 0.2)',
    text: 'rgba(148, 163, 184, 1)',
    grid: 'rgba(51, 65, 85, 0.5)'
};

const defaultChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            position: 'top',
            labels: {
                color: chartColors.text,
                font: { size: 11 },
                padding: 16
            }
        }
    },
    scales: {
        x: {
            grid: { color: chartColors.grid },
            ticks: { color: chartColors.text }
        },
        y: {
            grid: { color: chartColors.grid },
            ticks: { color: chartColors.text }
        }
    }
};

function initializeCharts() {
    // CO2 Intensity Chart
    new Chart(document.getElementById('co2Chart'), {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
            datasets: [
                {
                    label: 'Global Average',
                    data: [0.262, 0.255, 0.248, 0.241, 0.235, 0.228, 0.230],
                    borderColor: chartColors.primary,
                    backgroundColor: chartColors.primaryLight,
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Top Performers',
                    data: [0.12, 0.11, 0.10, 0.095, 0.09, 0.085, 0.08],
                    borderColor: chartColors.secondary,
                    backgroundColor: chartColors.secondaryLight,
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            ...defaultChartOptions,
            scales: {
                ...defaultChartOptions.scales,
                y: {
                    ...defaultChartOptions.scales.y,
                    title: { display: true, text: 'kg CO₂ / $ GDP', color: chartColors.text }
                }
            }
        }
    });

    // Air Quality Chart
    new Chart(document.getElementById('airChart'), {
        type: 'bar',
        data: {
            labels: ['Europe', 'Americas', 'Asia-Pacific', 'Middle East', 'Africa'],
            datasets: [
                {
                    label: 'PM2.5 (μg/m³)',
                    data: [9.2, 11.8, 18.4, 24.6, 28.2],
                    backgroundColor: [
                        chartColors.secondary,
                        chartColors.primary,
                        chartColors.warning,
                        chartColors.accent,
                        chartColors.danger
                    ],
                    borderRadius: 8
                }
            ]
        },
        options: {
            ...defaultChartOptions,
            plugins: {
                ...defaultChartOptions.plugins,
                legend: { display: false }
            },
            scales: {
                ...defaultChartOptions.scales,
                y: {
                    ...defaultChartOptions.scales.y,
                    title: { display: true, text: 'PM2.5 Concentration', color: chartColors.text }
                }
            }
        }
    });

    // Renewable Energy Chart
    new Chart(document.getElementById('renewableChart'), {
        type: 'doughnut',
        data: {
            labels: ['Solar', 'Wind', 'Hydro', 'Nuclear', 'Other Renewables', 'Fossil Fuels'],
            datasets: [{
                data: [14.2, 9.8, 15.4, 9.2, 4.8, 46.6],
                backgroundColor: [
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(14, 165, 233, 0.8)',
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(139, 92, 246, 0.8)',
                    'rgba(236, 72, 153, 0.8)',
                    'rgba(100, 116, 139, 0.8)'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: chartColors.text,
                        font: { size: 11 },
                        padding: 12
                    }
                }
            }
        }
    });

    // Electrification Chart
    new Chart(document.getElementById('electrificationChart'), {
        type: 'bar',
        data: {
            labels: ['Norway', 'Sweden', 'Netherlands', 'Denmark', 'China', 'Germany', 'UK', 'USA'],
            datasets: [{
                label: 'EV Sales Share (%)',
                data: [92, 54, 48, 46, 42, 38, 34, 28],
                backgroundColor: chartColors.primaryLight,
                borderColor: chartColors.primary,
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            ...defaultChartOptions,
            indexAxis: 'y',
            plugins: {
                ...defaultChartOptions.plugins,
                legend: { display: false }
            }
        }
    });

    // Waste Management Chart
    new Chart(document.getElementById('wasteChart'), {
        type: 'radar',
        data: {
            labels: ['Recycling Rate', 'Landfill Diversion', 'Composting', 'Waste Reduction', 'Circular Economy', 'E-Waste Mgmt'],
            datasets: [
                {
                    label: 'Top Performers',
                    data: [92, 88, 78, 72, 68, 82],
                    borderColor: chartColors.secondary,
                    backgroundColor: chartColors.secondaryLight,
                    borderWidth: 2
                },
                {
                    label: 'Global Average',
                    data: [48, 52, 32, 38, 28, 42],
                    borderColor: chartColors.primary,
                    backgroundColor: chartColors.primaryLight,
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { color: chartColors.text }
                }
            },
            scales: {
                r: {
                    grid: { color: chartColors.grid },
                    angleLines: { color: chartColors.grid },
                    pointLabels: { color: chartColors.text },
                    ticks: { display: false }
                }
            }
        }
    });

    // Water Stress Chart
    new Chart(document.getElementById('waterChart'), {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
            datasets: [
                {
                    label: 'Countries with High Water Stress',
                    data: [17, 18, 19, 20, 21, 22, 23],
                    borderColor: chartColors.danger,
                    backgroundColor: chartColors.dangerLight,
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Water Recycling Adoption (%)',
                    data: [12, 15, 18, 22, 28, 34, 40],
                    borderColor: chartColors.secondary,
                    backgroundColor: chartColors.secondaryLight,
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            ...defaultChartOptions,
            scales: {
                ...defaultChartOptions.scales,
                y: {
                    ...defaultChartOptions.scales.y,
                    title: { display: true, text: 'Percentage (%)', color: chartColors.text }
                }
            }
        }
    });

    // Regional Charts
    initializeRegionalCharts();
}

function initializeRegionalCharts() {
    const regionalData = {
        europe: { labels: ['CO₂', 'Air', 'Renew', 'Elec', 'Waste', 'Water'], data: [82, 84, 72, 76, 78, 82] },
        asia: { labels: ['CO₂', 'Air', 'Renew', 'Elec', 'Waste', 'Water'], data: [52, 48, 54, 62, 58, 64] },
        americas: { labels: ['CO₂', 'Air', 'Renew', 'Elec', 'Waste', 'Water'], data: [62, 72, 64, 54, 48, 58] },
        africa: { labels: ['CO₂', 'Air', 'Renew', 'Elec', 'Waste', 'Water'], data: [58, 42, 38, 42, 28, 48] },
        middleEast: { labels: ['CO₂', 'Air', 'Renew', 'Elec', 'Waste', 'Water'], data: [38, 48, 32, 52, 48, 78] }
    };

    const regionColors = {
        europe: 'rgba(59, 130, 246, 0.6)',
        asia: 'rgba(239, 68, 68, 0.6)',
        americas: 'rgba(16, 185, 129, 0.6)',
        africa: 'rgba(245, 158, 11, 0.6)',
        middleEast: 'rgba(139, 92, 246, 0.6)'
    };

    Object.entries(regionalData).forEach(([region, data]) => {
        const chartId = region === 'middleEast' ? 'middleEastChart' : `${region}Chart`;
        const ctx = document.getElementById(chartId);
        if (ctx) {
            new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: data.labels,
                    datasets: [{
                        label: region.charAt(0).toUpperCase() + region.slice(1),
                        data: data.data,
                        borderColor: regionColors[region],
                        backgroundColor: regionColors[region].replace('0.6', '0.2'),
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        r: {
                            grid: { color: chartColors.grid },
                            angleLines: { color: chartColors.grid },
                            pointLabels: { 
                                color: chartColors.text,
                                font: { size: 10 }
                            },
                            ticks: { display: false },
                            min: 0,
                            max: 100
                        }
                    }
                }
            });
        }
    });
}

// ===== Scroll Animation =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.metric-card, .highlight-card, .finding-card, .regional-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add visible class styles
const style = document.createElement('style');
style.textContent = `
    .metric-card.visible, .highlight-card.visible, .finding-card.visible, .regional-card.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ===== Navbar Scroll Effect =====
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
    }
    
    lastScroll = currentScroll;
});
