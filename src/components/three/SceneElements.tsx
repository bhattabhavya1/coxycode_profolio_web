import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

export const GeometricShapes = () => {
  return (
    <group>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <Sphere args={[1, 64, 64]} position={[-4, 2, -2]}>
          <MeshDistortMaterial
            color="#00D4FF"
            speed={2}
            distort={0.4}
            radius={1}
          />
        </Sphere>
      </Float>

      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <Box args={[1.5, 1.5, 1.5]} position={[4, -2, -3]}>
          <MeshWobbleMaterial
            color="#7B2FFF"
            speed={1}
            factor={0.6}
          />
        </Box>
      </Float>

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Torus args={[2, 0.4, 16, 100]} position={[0, -4, -5]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial color="#00D4FF" wireframe />
        </Torus>
      </Float>
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00D4FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7B2FFF" />
    </group>
  );
};

export const ParticleSystem = () => {
  const count = 1500;
  const points = useRef<THREE.Points>(null!);

  const particlesPosition = Array.from({ length: count }, () => ({
    x: (Math.random() - 0.5) * 20,
    y: (Math.random() - 0.5) * 20,
    z: (Math.random() - 0.5) * 20,
  }));

  const positions = new Float32Array(count * 3);
  particlesPosition.forEach((p, i) => {
    positions[i * 3] = p.x;
    positions[i * 3 + 1] = p.y;
    positions[i * 3 + 2] = p.z;
  });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    points.current.rotation.y = time * 0.05;
    points.current.rotation.x = time * 0.03;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
};
