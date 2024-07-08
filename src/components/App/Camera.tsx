import { OrbitControls } from '@react-three/drei';

interface CameraProps {
  enabled: boolean;
}
export function Camera({ enabled }: CameraProps) {
  return (
    <>
      <OrbitControls
        enabled={enabled}
        enableDamping
        zoomToCursor
        minPolarAngle={0}
        maxPolarAngle={(Math.PI * 7) / 16}
      />
    </>
  );
}
