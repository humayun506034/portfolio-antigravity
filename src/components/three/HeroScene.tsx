"use client"

import { useRef, useMemo, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

// Fallback if maath is not available or issues with imports, we can construct simple random sphere
const GeneratePositions = (count: number, radius: number) => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
        const r = radius * Math.cbrt(Math.random())
        const theta = Math.random() * 2 * Math.PI
        const phi = Math.acos(2 * Math.random() - 1)

        const x = r * Math.sin(phi) * Math.cos(theta)
        const y = r * Math.sin(phi) * Math.sin(theta)
        const z = r * Math.cos(phi)

        positions[i * 3] = x
        positions[i * 3 + 1] = y
        positions[i * 3 + 2] = z
    }
    return positions
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Stars = (props: any) => {
    const ref = useRef<THREE.Points>(null)
    const sphere = useMemo(() => GeneratePositions(5000, 1.5), [])

    useFrame((state, delta) => {
        if (ref.current) {
            // Basic rotation
            ref.current.rotation.x -= delta / 15
            ref.current.rotation.y -= delta / 20

            // Interaction based on mouse position
            // state.pointer.x and y are normalized coordinates (-1 to 1)
            const x = state.pointer.x
            const y = state.pointer.y

            // Smoothly look at mouse position or influence rotation
            ref.current.rotation.x -= y * 0.005
            ref.current.rotation.y -= x * 0.005
        }
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#64B5F6" // Light blue from theme
                    size={0.003} // Slightly larger for better visibility
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

const ShootingStar = () => {
    const ref = useRef<THREE.Mesh>(null)
    const [active, setActive] = useState(false)

    useFrame((state, delta) => {
        if (!active) {
            if (Math.random() < 0.005) { // Chance to spawn
                setActive(true)
                if (ref.current) {
                    ref.current.position.x = (Math.random() - 0.5) * 5
                    ref.current.position.y = (Math.random() - 0.5) * 5
                    ref.current.position.z = -2 // Start from back
                }
            }
        } else {
            if (ref.current) {
                ref.current.position.z += delta * 10 // Move fast towards camera
                if (ref.current.position.z > 2) {
                    setActive(false)
                }
            }
        }
    })

    if (!active) return null

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
        </mesh>
    )
}

const HeroScene = () => {
    return (
        <div className="absolute inset-0 z-0 h-full w-full">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
                <ShootingStar />
                <ShootingStar />
                <ShootingStar />
            </Canvas>
        </div>
    )
}

export default HeroScene
