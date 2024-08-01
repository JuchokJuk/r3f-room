import { Camera } from './Camera';

import { Environment } from '@react-three/drei';
import { Floor } from './models/Floor';
import { Wall } from './models/Wall';

export function Scene() {
  return (
    <>
      <Camera />
      <Environment files="static/the_sky_is_on_fire_1k.hdr" environmentIntensity={0.25} />
      <directionalLight
        intensity={4.8}
        position-x={-0.575312}
        position-y={1.63099}
        position-z={-0.28476}
        castShadow
      />
      <directionalLight
        intensity={4.8}
        position-x={0.575312}
        position-y={2.63099}
        position-z={3.28476}
        castShadow
      />
      <Floor position={[0, 0, 0]} rotation-x={-Math.PI / 2} />
      <Wall position={[0, 1, -2]}/>
      <Wall position={[0, 1, 2]} rotation-x={Math.PI}/>

      <Wall position={[-2, 1, 0]} rotation-y={Math.PI/ 2}/>
      <Wall position={[2, 1, 0]} rotation-y={-Math.PI/ 2}/>
    </>
  );
}
