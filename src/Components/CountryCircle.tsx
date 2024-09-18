import React, { useRef, useEffect } from 'react';
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from 'chart.js';
import indiaFlag from '../Assets/icons8-india-48.png'; // Import the flag images
import usaFlag from '../Assets/icons8-usa-48.png';
import othersFlag from '../Assets/icons8-globe-showing-americas-48.png';

const DoughnutChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

      const drawTextInCenter = (chart: Chart) => {
        const ctx = chart.ctx;
        const width = chart.width;
        const height = chart.height;

        if (!ctx || !width || !height) return;

        ctx.restore();
        const fontSize = (height / 160).toFixed(2);
        ctx.font = `${fontSize}em sans-serif`;
        ctx.textBaseline = 'middle';

        const text = '98k';
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;

        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(text, textX, textY);
        ctx.save();
      };

      const chartInstance = new Chart(chartRef.current, {
        type: 'doughnut',
        data: {
          labels: ['India', 'USA', 'Others'],
          datasets: [
            {
              data: [60, 30, 10,5],
              backgroundColor: ['#94A0B8', '#566480', '#3E485D','#333B4C'],
              hoverOffset: 10,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                generateLabels: (chart) => {
                  const data = chart.data;
                  if (data && data.labels) {
                    return data.labels.map((label, i) => ({
                      text: label as string, 
                      fillStyle: (data.datasets && data.datasets[0].backgroundColor && Array.isArray(data.datasets[0].backgroundColor))
                        ? data.datasets[0].backgroundColor[i] 
                        : '#ffffff', 
                      index: i,
                      pointStyle: 'rectRounded',
                      fontColor: '#ffffff',
                      usePointStyle: true,
                      icon: i === 0 ? indiaFlag : i === 1 ? usaFlag : othersFlag, 
                    }));
                  }
                  return [];
                },
                usePointStyle: true,
                boxWidth: 20,
                boxHeight: 20,
              },
            },
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                },
              },
            },
          },
          cutout: '70%',
          animation: {
            onComplete: function(animation) {
              drawTextInCenter(this);
            }
          },
        },
      });

      return () => {
        chartInstance.destroy();
      };
    }
  }, []);  return <canvas ref={chartRef} />;
};

export default DoughnutChart;