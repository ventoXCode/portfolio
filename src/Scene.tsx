import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'

function StarField() {
  const pointsRef = useRef<any>()
  
  // Increase star count and radius to ensure edge-to-edge coverage
  const starData = useMemo(() => {
    const count = 8000
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i += 3) {
      // Use a larger radius (5.0) to ensure stars are far enough to cover edges
      // but stay within a reasonable range for parallax
      const r = 5.0 * Math.pow(Math.random(), 1 / 3)
      const theta = Math.acos(2 * Math.random() - 1)
      const phi = 2 * Math.PI * Math.random()
      
      positions[i] = r * Math.sin(theta) * Math.cos(phi)
      positions[i + 1] = r * Math.sin(theta) * Math.sin(phi)
      positions[i + 2] = r * Math.cos(theta)
    }
    return positions
  }, [])

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += delta * 0.015
      pointsRef.current.rotation.y += delta * 0.01
    }
  })

  return (
    <Points ref={pointsRef} positions={starData} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.003}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Increased FOV and pulled camera back to see more of the sphere */}
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }} dpr={[1, 2]}>
        <color attach="background" args={['#000000']} />
        <StarField />
      </Canvas>
    </div>
  )
}
