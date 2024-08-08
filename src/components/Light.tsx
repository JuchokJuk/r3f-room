import { Environment, SoftShadows } from '@react-three/drei';

import environment from '@assets/the_sky_is_on_fire_1k.hdr?url';

export function Light() {
  return (
    <>
      {/* <Environment files={environment} environmentIntensity={0.25} /> */}
      {/* <ambientLight intensity={0.5} /> */}
      <directionalLight
        intensity={1.8}
        position-x={-0.575312}
        position-y={1.63099}
        position-z={-0.28476}
        castShadow
      />
      <directionalLight
        intensity={4.8}
        position-x={0.575312}
        position-y={4.63099}
        position-z={2.28476}
        castShadow
      />
      <SoftShadows focus={10} samples={8} size={4} />
    </>
  );
}
