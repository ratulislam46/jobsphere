import React from 'react';
import Banner from '../Components/Navbar/Banner';
import AllJobs from '../Share/Jobs/AllJobs';
import { useLoaderData } from 'react-router';

const Home = () => {

    const allJobs = useLoaderData();

    return (
        <div>
            <header>
                <Banner></Banner>
            </header>
            <main className='w-11/12 mx-auto my-24'>
                <AllJobs allJobs={allJobs}></AllJobs>
            </main>
        </div>
    );
};

export default Home;