import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { GeometricShapes, ParticleSystem } from './SceneElements';
import { Suspense } from 'react';

export const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <Suspense fallback={null}>
          <GeometricShapes />
          <ParticleSystem />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/20 to-[#050505]" />
    </div>
  );
};
