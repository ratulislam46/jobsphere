import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-gray-800 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src={team1}
                        animate={{ y: [10, 150, 100] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="max-w-sm shadow-2xl border-s-8 border-b-8 border-blue-500 rounded-t-4xl rounded-br-4xl"
                    />

                    <motion.img
                        src={team2}
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="max-w-sm shadow-2xl border-s-8 border-b-8 border-blue-500 rounded-t-4xl rounded-br-4xl"
                    />
                </div>
                <div className='flex-1'>
                    {/* <motion.h1
                        animate={{ rotate: 360, transition: { duration: 2 } }} className="text-5xl font-bold">Latest jobs for you!
                    </motion.h1> */}

                    <h1 className='text-5xl font-bold text-white'>
                        <motion.span
                            animate={{
                                color: ['#ff5733', '#4fff33', '#339cff', '#33ffe0', '#ff333f', '#4933ff'],
                                transition: { duration: 8, repeat: Infinity }
                            }}
                        >Remote jobs</motion.span> for you!
                    </h1>

                    <motion.p
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 2 } }}
                        className="py-6 text-2xl text-gray-300"> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.</motion.p>

                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;