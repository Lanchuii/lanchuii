import { useState, useEffect } from "react";
import { motion } from "framer-motion"
import { IoMenu } from "react-icons/io5";
import Links from "./Links";

interface Props {
  navItems: string[]
}

const variants = {
  open: {
    clipPath: "circle(1200px at 600px 0px)",
    transition: {
      type: "spring",
      stiffness: 20
    }
  },
  closed: {
    clipPath: "circle(0px at 600px 0px)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 40
    }
  }
}

const Sidebar = ({navItems}: Props) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (openSidebar && screenWidth >= 600) {
        setOpenSidebar(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [openSidebar]);

  return (
    <motion.div className="sidebar" animate={openSidebar ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links navItems={navItems} setOpenSidebar={setOpenSidebar} />
      </motion.div>
      <motion.div className="nav-button" whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
        <IoMenu fontSize={30} onClick={() => setOpenSidebar(prev => !prev)}/>
      </motion.div>
    </motion.div>
  )
}

export default Sidebar