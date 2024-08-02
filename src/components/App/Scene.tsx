import { Camera } from './Camera';

import { Environment } from '@react-three/drei';
import { Room } from './Room/Room';
import { useState } from 'react';
import { Color, Plane, Vector3 } from 'three';
import { Draggable } from './Draggable';
import { Info } from './Info/Info';
import { Carpet } from './furniture/Carpet';
import { Lamp } from './furniture/Lamp';

import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
  LensFlare,
  ToneMapping,
} from '@react-three/postprocessing';
import { KernelSize, Resolution, BlendFunction } from 'postprocessing';

type Furniture = {
  id: number;
  component: typeof Carpet | typeof Lamp;
  position: [number, number, number];
  rotation: number;
  name: string;
};

const furniture: Furniture[] = [
  {
    id: 0,
    component: Lamp,
    position: [-1.5, 0, -1.5],
    rotation: 0,
    name: 'Лампа',
  },
  {
    id: 1,
    component: Carpet,
    position: [0, 0, 0],
    rotation: 0,
    name: 'Ковёр',
  },
];

const width = 4;
const depth = 4;
const height = 2.5;

const range = {
  xRangeMin: -width / 2,
  xRangeMax: width / 2,
  zRangeMin: -depth / 2,
  zRangeMax: depth / 2,
};

const floorPlane = new Plane(new Vector3(0, 1, 0), 0);
export function Scene() {
  const [dragging, setDragging] = useState(false);
  return (
    <>
      <EffectComposer>
        <Bloom
          intensity={0.5} // The bloom intensity.
          kernelSize={KernelSize.VERY_LARGE} // blur kernel size
          luminanceThreshold={0.99} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
          mipmapBlur={true} // Enables or disables mipmap blur.
          resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
          resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
        />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
        <ToneMapping
          blendFunction={BlendFunction.NORMAL} // blend mode
          adaptive={true} // toggle adaptive luminance map usage
          resolution={256} // texture resolution of the luminance map
          middleGrey={0.6} // middle grey factor
          maxLuminance={16.0} // maximum luminance
          averageLuminance={1.0} // average luminance
          adaptationRate={1.0} // luminance adaptation rate
        />
      </EffectComposer>
      <Camera enabled={!dragging} />
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
      <Room width={width} depth={depth} height={height}>
        {furniture.map((item) => (
          <Draggable
            key={item.id}
            {...range}
            floorPlane={floorPlane}
            position={item.position}
            rotation={item.rotation}
            setDragging={setDragging}
          >
            <Info content={item.name}>
              <item.component />
            </Info>
          </Draggable>
        ))}
      </Room>
    </>
  );
}
