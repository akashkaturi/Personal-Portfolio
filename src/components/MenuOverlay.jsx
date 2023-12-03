import NavLink from "@/components/NavLink";

const MenuOverlay = ({links})=> {
    return (
        <div >
            <ul className={`flex flex-col py-4 items-center`} >

                {links.map((link,index)=>{
                    return(
                        <li key={index}>
                            <NavLink href={link.path} title={link.title}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default MenuOverlay