import { MeshProps, useLoader } from '@react-three/fiber';
import { MeshReflectorMaterial } from '@react-three/drei';
import { RepeatWrapping, TextureLoader } from 'three';

export function Floor(props: MeshProps) {
  const basecolor = useLoader(TextureLoader, 'static/textures/floor/basecolor.jpg');
  const normal = useLoader(TextureLoader, 'static/textures/floor/normal.jpg');
  const roughness = useLoader(TextureLoader, 'static/textures/floor/roughness.jpg');

  basecolor.repeat.set(4, 4);
  normal.repeat.set(4, 4);
  roughness.repeat.set(4, 4);

  basecolor.wrapS = RepeatWrapping;
  normal.wrapS = RepeatWrapping;
  roughness.wrapS = RepeatWrapping;

  basecolor.wrapT = RepeatWrapping;
  normal.wrapT = RepeatWrapping;
  roughness.wrapT = RepeatWrapping;

  return (
    <mesh {...props} receiveShadow>
      <planeGeometry args={[4, 4]} />
      <MeshReflectorMaterial
        envMapIntensity={1}
        dithering={false}
        blur={[1000, 400]}
        mixBlur={30}
        mixStrength={80}
        mixContrast={1}
        resolution={512}
        mirror={0}
        depthScale={0.01}
        minDepthThreshold={0.9}
        maxDepthThreshold={1}
        depthToBlurRatioBias={0.25}
        reflectorOffset={0.0}
        map={basecolor}
        normalMap={normal}
        roughnessMap={roughness}
      />
    </mesh>
  );
}
