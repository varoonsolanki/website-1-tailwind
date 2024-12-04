import React from 'react'

const Mobiles = () => {
   const mobilesData = [
    { id: 1, name: 'All Sample', price: 599999, description: 'All Company Mobile', image: '/initail.jpg' },
    { id: 2, name: 'Iphone 17 pro max', price: 399999, description: 'Camera Swipe Button ', image: '/17promax.jpg' },
    { id: 3, name: 'Iphone 16 pro max', price: 349999, description: 'Chip is A18pro', image: '/16promax.jpg' },
    { id: 4, name: 'Iphone 16', price: 299999, description: 'Latest Version Device', image: '/iphone16.jpg' },
    { id: 5, name: 'Iphone 12 pro max', price: 259999, description: 'Dual Standby Sim', image: '/iphone12promax.jpg' },
    { id: 6, name: 'Iphone 12 ', price: 109999, description: 'Cinematic Phone', image: '/ipone12.jpg' },
    { id: 7, name: 'OnePlus 10 pro', price: 69999, description: 'Best Mobile In OnePlus', image: '/oneplus.jpg' },
    { id: 8, name: 'Iphone 6s', price: 49999, description: 'Slim Iphone With Box', image: '8pls.jpg' },
    { id: 9, name: 'Samsung S4', price: 19999, description: 'samsung mobile', image: '/samsung.jpg' },
   ];

    return (
    <div className='mobiles grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10'>
    {mobilesData.map(mobiles => (
        <div key={mobiles.id} className='mobile-card bg-white p-5 rounded-md shadow-md text-center '>
        <img src={mobiles.image} alt={mobiles.name} className='w-full rounded-md transition-transform duration-300 transform hover:scale-110' />
        <h3 className='mt-4 text-2xl font-bold'>{mobiles.name}</h3>
        <p className='text-gray-500'>{mobiles.description}</p>
        <div className='price text-blue-500 text-xl font-semibold mt-2'>${mobiles.price}</div>
        <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md'>Add to Cart</button>       
        </div> 
    ))}
    </div>    
  );
};

export default Mobiles;