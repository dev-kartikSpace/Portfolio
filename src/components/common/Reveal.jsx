import React from 'react'
import { motion } from 'framer-motion'

const OFFSETS = {
    up: { y: 28 },
    down: { y: -28 },
    left: { x: 28 },
    right: { x: -28 },
    none: {},
}

const Reveal = ({ children, direction = 'up', delay = 0, duration = 0.5, once = true, amount = 0.2, className }) => {
    const offset = OFFSETS[direction] || {}
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, ...offset }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once, amount }}
            transition={{ duration, delay, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    )
}

export default Reveal
