import { useGLTF } from '@react-three/drei';
import carpet from '@assets/carpet.glb?url';

export function Carpet() {
  const model = useGLTF(carpet);

  return (
    <mesh
      receiveShadow
      // @ts-ignore
      geometry={model.nodes.Cube001.geometry}
      material={model.materials['Persian Rug Carpet 1']}
    />
  );
}
