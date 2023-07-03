import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
// import { createRequire } from "module";
// import process from 'process'
// import 'dotenv/config'

// const require = createRequire(import.meta.url);

// require('dotenv').config();

const Contact = () => {
  const formRef = useRef();

  const key = import.meta.env.VITE_API_KEY
  const template = import.meta.env.VITE_TEMPLATE
  const service = import.meta.env.VITE_SERVICE

  // console.log(key, template, service)

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);

    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs.send(service, template, {
      from_name: form.name,
      to_name: 'Hanna Skairipa',
      reply_to: form.email,
      message: form.message
    }, key).then(() => {
      setLoading(false);
      alert('Thanks for contacting me.');

      setForm({
        name: '',
        email: '',
        message: '',
      });
    }, (err) => {
      setLoading(false);

      alert(err);
    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder="What's your name?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder="What's your email?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea rows={8} name='message' value={form.message} onChange={handleChange} placeholder="What do you want to say?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>

          <button type="submit" className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {loading ? 'Loading...' : 'send'}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")