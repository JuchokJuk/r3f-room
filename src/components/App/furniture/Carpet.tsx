import { useGLTF } from '@react-three/drei';

export function Carpet() {
  const model = useGLTF('static/carpet.glb');

  return (
    <mesh
      receiveShadow
      // @ts-ignore
      geometry={model.nodes.Cube001.geometry}
      material={model.materials['Persian Rug Carpet 1']}
    />
  );
}
