import {motion} from "framer-motion";

const variants = {
    default: {width: 0},
    active: {width: "7rem"},
};

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected
        ? "text-white bg-primary-400"
        : "text-[#ADB7BE] border-slate-600";

    return (
        <motion.button
            className={`bg-primary-500 mt-3 mr-12 mb-4 rounded-full py-3 text-xl cursor-pointer ${buttonStyles}`}
            onClick={() => onClick(name)}
            animate={isSelected ? "active" : "default"}
            variants={variants}
        >
            {name}
        </motion.button>
    );
};

export default ProjectTag;
