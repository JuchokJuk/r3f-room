import { useGLTF } from '@react-three/drei';
import stool from '@assets/stool.glb?url';

export function Stool() {
  const model = useGLTF(stool);

  return (
    <>
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={model.nodes.stool760.geometry}
        material={model.materials['gray.002']}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={model.nodes.stool760_1.geometry}
        material={model.materials['emal.002']}
      />
    </>
  );
}
