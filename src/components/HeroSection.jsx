"use client"
import Image from "next/image";
import {motion} from "framer-motion";
import {TypeAnimation} from "react-type-animation";


const HeroSection = () => {
    const gradient = `from-primary-900 via-primary-700 to-primary-500`
    return (
        <section>
            <div className={`grid grid-cols-1 lg:grid-cols-12`}>
                <motion.div initial={{opacity: 0, scale: 0.75}} animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.5}}
                            className={`col-span-8 place-self-center max-lg:text-center text-left justify-self-start`}>
                    <h1 className={`text-6xl max-lg:text-4xl mb-4 font-extrabold`}>
                        <span
                            className={` text-transparent bg-clip-text bg-gradient-to-br ${gradient}`}>Hello, I&apos;m </span>
                        <br></br>
                        <span className={`max-lg:text-4xl text-5xl`}>
                        <TypeAnimation
                            sequence={[
                                'Akash',
                                1000,
                                'AWS Solutions Architect',
                                1000,
                                'Backend Developer',
                                1000,
                                'Python Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                        </span>
                    </h1>
                    <p className={`text-lg lg:text-xl mb-6`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper nec quam eget faucibus.
                        Ut
                        vel dolor eu ipsum hendrerit tristique.
                    </p>
                    <div>
                        <button
                            className={`px-6 py-3 max-lg:w-full w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black bg-gradient-to-br ${gradient}`}>Hire
                            Me
                        </button>
                        <button
                            className={`px-1 py-1 max-lg:w-full w-fit rounded-full mt-3 bg-transparent hover:bg-slate-200 text-black bg-gradient-to-br ${gradient}`}>
                            <span className={`block bg-[#121212] hover:bg-slate-800 text-white rounded-full px-5 py-2`}>Download CV </span>
                        </button>
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0, scale: 0.75}} animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.5}} className={`col-span-4 place-self-center mt-4 lg:mt-0`}>
                    <div className={`rounded-full bg-[#121212] w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] relative`}>
                        <Image src={`/images/coder.png`} alt={`Hero Image`}
                               className={`absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
                               width={300}
                               height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
export default HeroSection;