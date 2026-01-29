"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface TextRevealProps {
    children: string
    className?: string
    delay?: number
}

export const TextReveal = ({ children, className = "", delay = 0 }: TextRevealProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const words = children.split(" ")

    return (
        <div ref={ref} className={className} style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", gap: "0.25em" }}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{
                        duration: 0.5,
                        delay: delay + i * 0.05,
                        ease: [0.33, 1, 0.68, 1], // Custom cubic-bezier for "premium" feel
                    }}
                    style={{ display: "inline-block" }}
                >
                    {word}
                </motion.span>
            ))}
        </div>
    )
}
