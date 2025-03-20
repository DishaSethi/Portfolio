import { SiMongodb, SiExpress, SiHtml5, SiCss3, SiJavascript, SiMysql, SiFigma, SiSocketdotio,SiTailwindcss } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const Technologies = () => {
    return (
        <div className="pb-24" id="technologies">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>

            <div className="flex flex-wrap items-center justify-center gap-8">
                {[ 
                    { icon: <SiMongodb className="text-7xl text-green-500" />, label: "MongoDB" },
                    { icon: <RiReactjsLine className="text-7xl text-cyan-500" />, label: "React.js" },
                    { icon: <FaNodeJs className="text-7xl text-green-500" />, label: "Node.js" },
                    { icon: <SiExpress className="text-7xl text-gray-700" />, label: "Express.js" },
                    { icon: <SiHtml5 className="text-7xl text-orange-500" />, label: "HTML5" },
                    { icon: <SiCss3 className="text-7xl text-blue-500" />, label: "CSS3" },
                    { icon: <SiJavascript className="text-7xl text-yellow-500" />, label: "JavaScript" },
                    { icon: <SiMysql className="text-7xl text-blue-800" />, label: "MySQL" },
                    { icon: <SiFigma className="text-7xl text-purple-500" />, label: "Figma" },
                    { icon: <SiSocketdotio className="text-7xl text-gray-600" />, label: "Socket.IO" },
                    { icon: <SiTailwindcss className="text-7xl text-cyan-600" />, label: "TailwindCSS" }
                ].map((tech, index) => (
                    <motion.div 
                        key={index} 
                        className="p-4 flex flex-col items-center"
                        animate={{ y: [0, -8, 0, 8, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2 // Creates a wave effect
                        }}
                    >
                        {tech.icon}
                        <p className="text-sm mt-2 text-white-600">{tech.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
