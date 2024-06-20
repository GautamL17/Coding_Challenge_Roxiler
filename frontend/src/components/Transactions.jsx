import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Statistics from './Statistics';
const Transactions = () => {
    const [monthNumber, setMonthNumber] = useState(3);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const itemsPerPage = 10;
    const months = [
        { name: 'January', number: 1 },
        { name: 'February', number: 2 },
        { name: 'March', number: 3 },
        { name: 'April', number: 4 },
        { name: 'May', number: 5 },
        { name: 'June', number: 6 },
        { name: 'July', number: 7 },
        { name: 'August', number: 8 },
        { name: 'September', number: 9 },
        { name: 'October', number: 10 },
        { name: 'November', number: 11 },
        { name: 'December', number: 12 },
    ];


    const monthName = months.map((month) => {
        if (month.number === monthNumber) {
            return `${month.name}`
        }
    })

    const fetchData = async (month) => {
        if (month) {
            try {
                setIsLoading(true);
                const response = await axios.get(`http://localhost:3000/transactions/${month}`);
                setData(response.data);
                setIsLoading(false)
                console.log(data)
            } catch (error) {
                console.error('Error fetching data:', error);
                setData([]);
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        if (monthNumber !== null) {
            fetchData(monthNumber);
            setCurrentPage(1);
        }
    }, [monthNumber]);

    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handlePageChange = (direction) => {
        if (direction === 'next' && currentPage < Math.ceil(data.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        } else if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
            {isLoading ? (
                <div className="text-5xl text-white font-bold flex justify-center items-center mt-[15%]">
                    <div role="status">
                        <svg
                            aria-hidden="true"
                            className="w-10 h-10 text-blue-200 animate-spin dark:text-zinc-900 fill-yellow-500"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                    </div>
                </div>
            ) : (
                <>
                    <div className="text-zinc-800 font-bold text-5xl flex justify-center items-center mt-2 font-poppins">Monthly Transactions</div>
                    <div className="flex justify-between w-[80%] items-center mx-auto m-4">
                        <input type="text"
                            className='px-2 border-2 border-zinc-500 bg-white rounded-md outline-none'
                            placeholder='Search Transaction'
                            value={searchQuery}
                            onChange={(e)=>setSearchQuery(e.target.value)}
                        />
                        <div className="">
                            <select
                                name="month"
                                onChange={(e) => setMonthNumber(parseInt(e.target.value))}
                                value={monthNumber}
                                className='m-2 bg-zinc-100 cursor-pointer p-1 rounded-md text-zinc-800 outline-none font-poppins'
                            >
                                <option value="" disabled className='mx-2 p-2 font-poppins'>Select Month</option>
                                {months.map((month) => (
                                    <option key={month.number} value={month.number}>
                                        {month.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {filteredData.length > 0 && (
                        <div className='flex justify-center items-center w-[80%] mx-auto font-poppins'>
                            <table className='table-auto text-zinc-50 bg-zinc-700 font-normal rounded-lg mb-2'>
                                <thead>
                                    <tr>
                                        <th className='px- py-1 font-normal'>ID</th>
                                        <th className='px- py-1 font-normal'>Title</th>
                                        <th className='px- py-1 font-normal'>Description</th>
                                        <th className='px- py-1 font-normal'>Price</th>
                                        <th className='px- py-1 font-normal'>Category</th>
                                        <th className='px- py-1 font-normal'>Sold</th>
                                        <th className='px- py-1 font-normal'>Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paginatedData.map((item) => (
                                        <tr key={item.id} className='bg-white text-zinc-900 border border-zinc-200 shadow-lg my-2'>
                                            <td className='px-3 text-center py-1'>{item.id}</td>
                                            <td className='px-3 text-center py-1'>{item.title}</td>
                                            <td className='px-3 text-center py-1'>{item.description}</td>
                                            <td className='px-3 text-center py-1'>{item.price}</td>
                                            <td className='px-3 text-center py-1'>{item.category}</td>
                                            <td className='px-3 text-center py-1'>{item.sold ? 'Yes' : 'No'}</td>
                                            <td className='px-3 text-center py-1'><img src={item.image} alt={item.title} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tbody className='bg-zinc-900 text-transparent w-[30px]'>
                                </tbody>
                            </table>
                        </div>
                    )}
                    <div className="flex justify-between w-[20%] mt-4 mb-2 mx-auto">
                        <button
                            onClick={() => handlePageChange('prev')}
                            className='px-4 py-2 bg-blue-700 text-zinc-50 rounded-md hover:bg-blue-600'
                        >
                            Prev
                        </button>
                        <button
                            onClick={() => handlePageChange('next')}
                            className='px-4 py-2 bg-blue-700 text-zinc-50 rounded-md hover:bg-blue-600 '
                        >
                            Next
                        </button>
                    </div>
                    <Statistics month={monthNumber} monthName={monthName} />

                </>
            )}
        </>
    );
};

export default Transactions;
