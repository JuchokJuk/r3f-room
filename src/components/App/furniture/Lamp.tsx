import { useGLTF } from '@react-three/drei';
import lamp from '../../../assets/lamp.glb?url';

export function Lamp() {
  const model = useGLTF(lamp);

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
