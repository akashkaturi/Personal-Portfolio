"use client"
import Image from "next/image";
import {TypeAnimation} from "react-type-animation";


const HeroSection = () => {
    const gradient = `from-[#00B4DB] to-[#0083B0]`
    const gradient2 = `from-[#2980B9] via-[#6DD5FA] to-[#FFFFFF]`
    return (
        <section>
            <div className={`grid grid-cols-1 lg:grid-cols-12 `}>
                <div className={`col-span-7 place-self-center max-lg:text-center text-left`}>
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
                            className={`px-6 py-3 max-lg:w-full w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black bg-gradient-to-br ${gradient}`}>Hit
                            Me
                        </button>
                        <button
                            className={`px-1 py-1 max-lg:w-full w-fit rounded-full mt-3 bg-transparent hover:bg-slate-200 text-black bg-gradient-to-br ${gradient}`}>
                            <span className={`block bg-[#121212] hover:bg-slate-800 text-white rounded-full px-5 py-2`}>Download CV </span>
                        </button>
                    </div>
                </div>
                <div className={`col-span-5 place-self-center mt-4 lg:mt-0`}>
                    <div className={`rounded-full bg-[#121212] w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] relative`}>
                        <Image src={`/images/coder.png`} alt={`Hero Image`}
                               className={`absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
                               width={300}
                               height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;