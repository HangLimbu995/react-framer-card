import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdFileDownload, MdClose } from "react-icons/md";
import { motion } from "framer-motion"

const Card = ({ item,referance }) => {
    return (
        <motion.div
            drag
         dragConstraints={referance}
         whileDrag={{scale: 1.1}}
         dragElastic={0.1}
         dragTransition={{ bounceStiffness: 200, bounceDamping: 200 }}
            className='relative w-60 h-60 bg-zinc-900/90 text-white flex flex-col rounded-[30px] gap-4 p-5 overflow-hidden '>
            <FaRegFileAlt />
            <p>{item.desc}</p>
            <div className='absolute w-full bottom-0 left-0 '>
                <div className='py-3 px-5 flex justify-between'>
                    <span>{item.filesize}</span>
                    <span className='p-1 bg-zinc-800 rounded-[50%]'>
                        {item.closeIcon ? <MdClose /> : <MdFileDownload />}
                    </span>
                </div>
                {item.downloadOption.open && (
                    <div className={`w-full bottom-0 flex justify-center items-center ${item.downloadOption.color === 'green' ? 'bg-green-500' : 'bg-blue-500'} left-0 py-3 px-2`}>
                        {item.downloadOption.text}
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default Card