import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BarChart from './BarChart';
import PieChart from './PieChart';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import 'tailwindcss/tailwind.css'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Statistics = ({ month, monthName }) => {
    const [monthNumber, setMonthNumber] = useState(month || 3);
    const [barChartData, setBarChartData] = useState({})
    const [pieData, setPieData] = useState({})
    const [statsData, setStatsData] = useState({})
    const [data,setData] = useState({})


    const fetchData = async (monthNumber) => {
        // const { data } = await axios.get(`http://localhost:3000/barchart/${monthNumber}`)
        // setBarChartData(data);
        // const response = await axios.get(`http://localhost:3000/piechart/${monthNumber}`)
        // setPieData(response.data)
        // const statsResponse = await axios.get(`http://localhost:3000/statistics/${monthNumber}`)
        // setstatsData(statsResponse.data)
        const {data} = await axios.get(`http://localhost:3000/combined/${monthNumber}`)
        setData(data);
        setPieData(data.pieChart)
        setBarChartData(data.barChart)

        setStatsData(data.statistics)
    }

    useEffect(() => {
        if (monthNumber !== null) {
            fetchData(monthNumber);
        }
    }, [monthNumber]);

    const chartData = {
        labels: Object.keys(barChartData),
        datasets: [
            {
                label: 'Transaction Counts',
                data: Object.values(barChartData),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const pieChartData = {
        labels: Object.keys(pieData),
        datasets: [
            {
                data: Object.values(pieData),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(199, 199, 199, 0.6)',
                    'rgba(83, 102, 255, 0.6)',
                    'rgba(255, 159, 254, 0.6)',
                    'rgba(199, 159, 199, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(199, 199, 199, 1)',
                    'rgba(83, 102, 255, 1)',
                    'rgba(255, 159, 254, 1)',
                    'rgba(199, 159, 199, 1)',
                ],
                borderWidth: 1,
            },
        ],
        outerWidth: 2000,

    };

    const pieChartOptions = {
        maintainAspectRatio: false,
        aspectRatio: 10,
    };

    return (
        <>

            <h1 className="text-zinc-800 font-bold text-5xl flex justify-center items-center mt-20 mb-10 font-poppins" >Statistics</h1>
            <div className="text-xl font-medium text-zinc-800 p-2 mx-auto w-[50%] bg-zinc-200 rounded-md ">
                <h1 className='flex justify-center items-center' >
                    Statistics of {monthName}
                </h1>
                <div className="flex justify-between"> <h3>Total sale</h3> <h3>{statsData.totalSaleAmount ? statsData.totalSaleAmount : '...'}</h3> </div>
                <div className="flex justify-between"> <h3>Total sold item</h3> <h3>{statsData.totalSaleAmount ? statsData.totalSoldItems : '...'}</h3> </div>
                <div className="flex justify-between"> <h3>Total not sold item</h3> <h3>{statsData.totalSaleAmount ? statsData.totalNotSoldItems : '...'}</h3> </div>
            </div>

            <div className="w-[50%] mx-auto my-3">
                <BarChart chartData={chartData} />
                <h1 className='text-3xl font-semibold text-zinc-950 flex justify-center'>Bar Chart</h1>
            </div>

            <div className="h-[400px] mx-auto flex justify-center items-center flex-col my-10">
                <PieChart chartData={pieChartData} options={pieChartOptions} />
                <h1 className='text-3xl font-semibold text-zinc-950 '>Pie Chart</h1>
            </div>
        </>
    )
}

export default Statistics



