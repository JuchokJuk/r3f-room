import { useGLTF } from '@react-three/drei';
import { PointLight } from 'three';

export function Lamp() {
  const model = useGLTF('static/lamp.glb');

  return (
    <>
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={model.nodes.Mesh133.geometry}
        material={model.materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={model.nodes.Mesh133_1.geometry}
        material={model.materials['Light iron']}
      />
      <pointLight position-y={1.5} />
    </>
  );
}
