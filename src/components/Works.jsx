import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../style"
import { github, www } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects, iOSProjects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const IOSProjectCard = ({ index, name, description, tags, image, source_code_link, demo_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-ful">
        <div className="relative w-full">
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover -top-16">
            <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="open" className="w-1/2 h-1/2 object-contain" />
              </div>
              <div className="mx-[2.5px]" />
              <div onClick={() => window.open(demo_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={www} alt="demo" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl mt-12" />
        </div>

        <div className="mt-5">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-secondary">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {
            tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))
          }
        </div>
      </Tilt>
    </motion.div>
  )
}

const ProjectCard = ({ index, name, description, tags, image, source_code_link, demo_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-ful">
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="open" className="w-1/2 h-1/2 object-contain" />
              </div>
              <div className="mx-[2.5px]" />
              <div onClick={() => window.open(demo_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={www} alt="demo" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-secondary">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {
            tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))
          }
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My projects</p>
        <h2 className={styles.sectionHeadText}>Web Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          The fellowing projects showcase my skills that I have accumulated over the years as a developer
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {
          projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} {...project} index={index} />
          ))
        }
      </div>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>iOS Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          The fellowing projects showcase my skills that I have accumulated over the years as a developer
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {
          iOSProjects.map((project, index) => (
            <IOSProjectCard key={`project-${index}`} {...project} {...project} index={index} />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")