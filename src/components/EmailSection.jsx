'use client'
import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from 'public/github.svg'
import LinkedinIcon from 'public/linkedin.svg'

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = `/api/send`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        };
        const response = await fetch(endpoint, options);
        const resData = await response.json()
        console.log(resData)
        if (response.status === 200) {
            console.log("Message sent successfully");
            setEmailSubmitted(true)
        }

    }


    return (
        <section className={`grid grid-cols-2 max-lg:my-12 py-24 gap-4 relative`}>
            <div
                className={`bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full blur-lg h-80 w-80 z-0 absolute lg-max:top-3/4 top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2`}>

            </div>
            <div>
                <h5 className={`text-xl font-bold text-white my-2`}>Let&apos;s connect</h5>
                <p className={`text-[#ADB7BE] mb-4 max-w-md`}>
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
                <div className={`socials flex flex-row gap-2`}>
                    <Link href={`github.com`}>
                        <Image src={GithubIcon} alt={`github_icon`}/>
                    </Link>
                    <Link href={`linkedin.com`}>
                        <Image src={LinkedinIcon} alt={`github_icon`}/>
                    </Link>
                </div>
            </div>
            <div>
                <form className={`flex flex-col gap-6`} onSubmit={handleSubmit}>

                    <div className={`mb-6`}>
                        <label htmlFor={`email`} className={`text-white mb-2 block text-sm font-medium`}>Your
                            Email</label>
                        <input
                            name={`email`}
                            type={`email`}
                            id={`email`}
                            required
                            className={`bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5`}
                            placeholder={`example@email.com`}
                        />
                    </div>
                    <div className={`mb-6`}>
                        <label htmlFor={`subject`}
                               className={`text-white mb-2 block text-sm font-medium`}>Subject</label>
                        <input
                            name={`subject`}
                            type={`subject`}
                            id={`subject`}
                            required
                            className={`bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5`}
                            placeholder={`Just saying Hi!`}
                        />
                    </div>
                    <div className={`mb-6`}>
                        <label htmlFor={`subject`}
                               className={`text-white mb-2 block text-sm font-medium`}>Message</label>
                        <textarea
                            name={`message`}
                            id={`message`}
                            className={`bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5`}
                            placeholder={`Let's talk about...`}
                        />
                    </div>
                    <button type={`submit`}
                            className={`bg-primary-500 hover:bg-primary-600 font-medium py-2.5 px-5 rounded-lg w-full`}>Send
                        Message
                    </button>
                    {emailSubmitted && (
                        <p className={`text-green-500 text-sm`}>
                            Email sent successfully!
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}
export default EmailSection;