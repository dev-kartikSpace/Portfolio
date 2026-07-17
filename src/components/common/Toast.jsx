import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styled from 'styled-components'
import { CheckCircle2 } from 'lucide-react'

const ToastWrapper = styled(motion.div)`
    position: fixed;
    bottom: 24px;
    left: 50%;
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 10px;
    background: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.card_border};
    color: ${({ theme }) => theme.text_primary};
    padding: 14px 20px;
    border-radius: 12px;
    font-size: 14px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
`

const Toast = ({ open, message }) => {
    return (
        <AnimatePresence>
            {open && (
                <ToastWrapper
                    initial={{ opacity: 0, y: 20, x: '-50%' }}
                    animate={{ opacity: 1, y: 0, x: '-50%' }}
                    exit={{ opacity: 0, y: 20, x: '-50%' }}
                    transition={{ duration: 0.3 }}
                >
                    <CheckCircle2 size={18} color="#22c55e" />
                    {message}
                </ToastWrapper>
            )}
        </AnimatePresence>
    )
}

export default Toast
