import { SiMongodb, SiExpress, SiHtml5, SiCss3, SiJavascript, SiMysql, SiFigma, SiSocketdotio } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";

const Technologies = () => {
    return (
        <div className="pb-24" id="technologies">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>

            <div className="flex flex-wrap items-center justify-center gap-8">

                {/* MongoDB */}
                <div className="p-4 flex flex-col items-center">
                    <SiMongodb className="text-7xl text-green-500" />
                    <p className="text-sm mt-2 text-gray-600">MongoDB</p>
                </div>

                {/* React.js */}
                <div className="p-4 flex flex-col items-center">
                    <RiReactjsLine className="text-7xl text-cyan-500" />
                    <p className="text-sm mt-2 text-gray-600">React.js</p>
                </div>

                {/* Node.js */}
                <div className="p-4 flex flex-col items-center">
                    <FaNodeJs className="text-7xl text-green-500" />
                    <p className="text-sm mt-2 text-gray-600">Node.js</p>
                </div>

                {/* Express.js */}
                <div className="p-4 flex flex-col items-center">
                    <SiExpress className="text-7xl text-gray-700" />
                    <p className="text-sm mt-2 text-gray-600">Express.js</p>
                </div>

                {/* HTML5 */}
                <div className="p-4 flex flex-col items-center">
                    <SiHtml5 className="text-7xl text-orange-500" />
                    <p className="text-sm mt-2 text-gray-600">HTML5</p>
                </div>

                {/* CSS3 */}
                <div className="p-4 flex flex-col items-center">
                    <SiCss3 className="text-7xl text-blue-500" />
                    <p className="text-sm mt-2 text-gray-600">CSS3</p>
                </div>

                {/* JavaScript */}
                <div className="p-4 flex flex-col items-center">
                    <SiJavascript className="text-7xl text-yellow-500" />
                    <p className="text-sm mt-2 text-gray-600">JavaScript</p>
                </div>

                {/* MySQL */}
                <div className="p-4 flex flex-col items-center">
                    <SiMysql className="text-7xl text-blue-800" />
                    <p className="text-sm mt-2 text-gray-600">MySQL</p>
                </div>

                {/* Figma */}
                <div className="p-4 flex flex-col items-center">
                    <SiFigma className="text-7xl text-purple-500" />
                    <p className="text-sm mt-2 text-gray-600">Figma</p>
                </div>

                {/* Socket.IO */}
                <div className="p-4 flex flex-col items-center">
                    <SiSocketdotio className="text-7xl text-gray-600" />
                    <p className="text-sm mt-2 text-gray-600">Socket.IO</p>
                </div>
            </div>
        </div>
    );
};

export default Technologies;
