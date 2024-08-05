import { Environment } from '@react-three/drei';

import environment from '@assets/the_sky_is_on_fire_1k.hdr?url';

export function Light() {
  return (
    <>
      <Environment files={environment} environmentIntensity={0.25} />
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
    </>
  );
}
