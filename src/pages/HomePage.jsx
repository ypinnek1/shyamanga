import React from 'react';

const HomePage = () => (
    <div className="relative h-[calc(100vh-80px)] text-white overflow-hidden">
        <img
            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop"
            alt="Film Set"
            className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 animate-fade-in-down font-serif">
                Storytelling Through a New Lens
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl animate-fade-in-up">
                Shyamanga Pictures is a Hyderabad-based production house dedicated to crafting compelling narratives and pushing the boundaries of cinematic excellence.
            </p>
        </div>
    </div>
);

export default HomePage;
