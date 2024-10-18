import React, { useState, useEffect } from 'react';
import { Base } from '../components/Base/Base';
import { Chart } from 'primereact/chart';
import { Card } from 'primereact/card'; 


export function Dashboard() {
    const [barChartData, setBarChartData] = useState({});
    const [barChartOptions, setBarChartOptions] = useState({});
    const [pieChartData, setPieChartData] = useState({});
    const [pieChartOptions, setPieChartOptions] = useState({});

    useEffect(() => {
        // Data for Bar Chart
        const barData = {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: 'Sales',
                    data: [540, 325, 702, 620],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                    ],
                    borderWidth: 1,
                },
            ],
        };

        const barOptions = {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        };

        setBarChartData(barData);
        setBarChartOptions(barOptions);

        // Data for Pie Chart
        const pieData = {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: 'Sales Distribution',
                    data: [540, 325, 702, 620],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                    ],
                },
            ],
        };

        const pieOptions = {
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            let label = tooltipItem.label || '';
                            if (label) {
                                label += ': ' + tooltipItem.raw; // Mostrar el valor en la tooltip
                            }
                            return label;
                        },
                    },
                },
            },
        };

        setPieChartData(pieData);
        setPieChartOptions(pieOptions);
    }, []);

    return (
        <Base>
            <h1>Prueba de Data</h1>
            <div className="flex flex-wrap justify-content-between">
                <Card title="Gráfica de Barras" className="m-2" style={{ flex: '1 1 300px' }}>
                    <Chart type="bar" data={barChartData} options={barChartOptions} />
                </Card>
                <Card title="Gráfica de Pastel" className="m-2" style={{ flex: '1 1 300px' }}>
                    <Chart type="pie" data={pieChartData} options={pieChartOptions} />
                </Card>
            </div>
        </Base>
    );
}
