import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
  SSAO,
} from '@react-three/postprocessing';
import { KernelSize, Resolution, BlendFunction } from 'postprocessing';

export function Effects() {
  return (
    <>
      <EffectComposer enableNormalPass>
        <Bloom
          intensity={0.15} // The bloom intensity.
          kernelSize={KernelSize.VERY_LARGE} // blur kernel size
          luminanceThreshold={0.99} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
          mipmapBlur={true} // Enables or disables mipmap blur.
          resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
          resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
        />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
        {/* @ts-ignore */}
        <SSAO
          blendFunction={BlendFunction.MULTIPLY}
          samples={10}
          radius={0.5}
          intensity={30}
        />
      </EffectComposer>
    </>
  );
}
