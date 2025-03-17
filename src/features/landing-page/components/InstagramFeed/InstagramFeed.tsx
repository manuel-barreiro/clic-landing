'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function InstagramFeed (): React.JSX.Element {
  useEffect(() => {
    // Load Behold.so script
    const loadBeholdScript = (): void => {
      const script = document.createElement('script')
      script.type = 'module'
      script.src = 'https://w.behold.so/widget.js'
      document.head.appendChild(script)
    }

    // Check if the script is already loaded
    const existingScript = document.querySelector('script[src="https://w.behold.so/widget.js"]')
    if (existingScript === null) {
      loadBeholdScript()
    }

    return () => {
      // Clean up script when component unmounts
      const script = document.querySelector('script[src="https://w.behold.so/widget.js"]')
      if (script !== null) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <section id='instagram-feed' className='w-full py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <motion.h2
            className='text-4xl font-bold mb-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Seguinos en Instagram
          </motion.h2>
          <motion.p
            className='text-xl text-gray-600 mb-6'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            @clic.pilates
          </motion.p>
          <motion.div
            className='w-20 h-1 bg-purple-600 mx-auto'
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Behold.so Instagram Feed */}
        {/* <div data-behold-id='D8VPNpm7e4WBRBQepEnJ' /> */}

        <div className='text-center mt-10'>
          <motion.a
            href='https://www.instagram.com/clicpilates/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center px-6 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent/70 transition-colors duration-300'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' />
            </svg>
            Ver más en Instagram
          </motion.a>
        </div>
      </div>
    </section>
  )
}
