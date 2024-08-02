import { MeshProps, useLoader } from '@react-three/fiber';
import { MeshReflectorMaterial } from '@react-three/drei';
import { RepeatWrapping, TextureLoader } from 'three';

export function Wall({
  width,
  height,
  ...meshProps
}: { width: number; height: number } & MeshProps) {
  const basecolor = useLoader(TextureLoader, 'static/textures/wall/basecolor.jpg');
  const normal = useLoader(TextureLoader, 'static/textures/wall/normal.jpg');
  const roughness = useLoader(TextureLoader, 'static/textures/wall/roughness.jpg');

  basecolor.repeat.set(width, height);
  normal.repeat.set(width, height);
  roughness.repeat.set(width, height);

  basecolor.wrapS = RepeatWrapping;
  normal.wrapS = RepeatWrapping;
  roughness.wrapS = RepeatWrapping;

  basecolor.wrapT = RepeatWrapping;
  normal.wrapT = RepeatWrapping;
  roughness.wrapT = RepeatWrapping;

  return (
    <mesh {...meshProps}>
      <planeGeometry args={[width, height]} />
      <MeshReflectorMaterial
        envMapIntensity={1}
        dithering={false}
        blur={[1000, 400]}
        mixBlur={30}
        mixStrength={10}
        mixContrast={1}
        resolution={512}
        mirror={0}
        depthScale={0.01}
        minDepthThreshold={0.9}
        maxDepthThreshold={1}
        depthToBlurRatioBias={0.25}
        reflectorOffset={0.0}
        metalness={0}
        map={basecolor}
        normalMap={normal}
        roughnessMap={roughness}
      />
    </mesh>
  );
}
