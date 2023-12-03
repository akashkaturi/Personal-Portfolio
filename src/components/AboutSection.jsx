"use client";
import {useTransition,useState} from "react";
import Image from "next/image";
import TabButton from "@/components/TabButton";
const TAB_DATA=[
    {
        title:"Skills",
        id:"skills",
        content:(
            <ul className={`list-disc pl-2`}>
                <li>Python</li>
                <li>AWS</li>
                <li>Terraform</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Microsoft Office</li>
            </ul>
        )
    },
      {
        title:"Education",
        id:"education",
        content:(
            <ul className={`list-disc pl-2`}>
                <li>Example1</li>
                <li>Example2</li>
                <li>Example3</li>

            </ul>
        )
    },
      {
        title:"Certifications",
        id:"certifications",
        content:(
            <ul className={`list-disc pl-2`}>
                <li>Example1</li>
                <li>Example2</li>
                <li>Example3</li>
            </ul>
        )
    },
]
const AboutSection = () => {
    const [tab,setTab]=useState("skills")
    const [isPending,startTransision]=useTransition()
    const handleTabChange=(id)=>{
        startTransision(()=>{
            setTab(id);
        })
    }
    return (
        <section className={`text-white flex items-start`} id={`about`}>
            <div className={`grid grid-cols-12 max-lg:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 max-lg:py-16`}>
                <Image src={`/images/desktop.jpg`} width={700} height={500} alt={`desk`} className={'col-span-6 justify-start'}/>
                <div className={`col-span-6 flex flex-col h-full`}>
                    <h2 className={`text-4xl font-bold mb-4`}>About Me</h2>
                    <p className={`max-lg:text-base text-lg`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor quam, blandit auctor purus
                        eget, mollis scelerisque mi. Praesent molestie neque ut magna ullamcorper maximus. Fusce
                        imperdiet porta enim, vel semper dui vehicula ac. Quisque blandit libero et convallis
                        sollicitudin. Donec laoreet dolor ac eleifend ultricies.
                    </p>
                    <div className={`flex flex-row mt-8 justify-start`}>
                        <TabButton selectTab={()=> handleTabChange("skills")} active={tab==="skills"}>Skills</TabButton>
                        <TabButton selectTab={()=> handleTabChange("education")} active={tab==="education"}>Education</TabButton>
                        <TabButton selectTab={()=> handleTabChange("certifications")} active={tab==="certifications"}>Certifications</TabButton>

                    </div>
                    <div className={`mt-8`}>
                        {TAB_DATA.find((t)=>t.id===tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutSection