import { Vector3, Plane, Raycaster, Vector2, Group, Box3 } from 'three';
import { clamp } from 'three/src/math/MathUtils.js';
import { ReactNode, RefObject, useEffect, useRef } from 'react';
import { ThreeEvent, useThree } from '@react-three/fiber';

interface DraggableProps {
  position: [number, number, number];
  floorPlane: Plane;
  xRangeMin: number;
  xRangeMax: number;
  zRangeMin: number;
  zRangeMax: number;
  rotation: number;
  setDragging: (dragging: boolean) => void;
  children: ReactNode;
}

const raycaster = new Raycaster();

export function Draggable({
  position,
  floorPlane,
  xRangeMin,
  xRangeMax,
  zRangeMin,
  zRangeMax,
  rotation = 0,
  setDragging,
  children,
}: DraggableProps) {
  const group = useRef() as RefObject<Group>;
  const groupSize = useRef<Vector3>();
  const dragging = useRef(false);
  const { camera } = useThree();

  const planeIntersectPoint = useRef(new Vector3());
  const pointer = useRef(new Vector2());

  const offset = useRef(new Vector2());
  const startRotation = useRef(0);
  const rotationOffset = useRef(0);

  function grab(event: ThreeEvent<PointerEvent>) {
    if (!group.current) return;

    //

    if (event.nativeEvent.button === 2) return;

    if (event.object.parent?.parent?.uuid !== group.current!.uuid) return;

    dragging.current = true;
    setDragging(dragging.current);

    event.ray.intersectPlane(floorPlane, planeIntersectPoint.current);

    offset.current.x = planeIntersectPoint.current.x - group.current.position.x;
    offset.current.y = planeIntersectPoint.current.z - group.current.position.z;

    startRotation.current = group.current.rotation.y;

    rotationOffset.current = Math.atan2(
      group.current.position.x - planeIntersectPoint.current.x,
      group.current.position.z - planeIntersectPoint.current.z,
    );

    event.stopPropagation();
  }

  function move(event: PointerEvent) {
    if (dragging.current) {
      if (event.ctrlKey) {
        setRotation(event);
      } else {
        setPosition(event);
      }
    }
  }

  function setPosition(event: PointerEvent) {
    if (!group.current) return;
    if (!groupSize.current) return;

    //

    pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(pointer.current, camera);

    raycaster.ray.intersectPlane(floorPlane, planeIntersectPoint.current);

    group.current.position.x = clamp(
      planeIntersectPoint.current.x - offset.current.x,
      xRangeMin + groupSize.current.x / 2,
      xRangeMax - groupSize.current.x / 2,
    );

    group.current.position.z = clamp(
      planeIntersectPoint.current.z - offset.current.y,
      zRangeMin + groupSize.current.z / 2,
      zRangeMax - groupSize.current.z / 2,
    );
  }

  function setRotation(event: PointerEvent) {
    if (!group.current) return;

    //

    pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(pointer.current, camera);

    raycaster.ray.intersectPlane(floorPlane, planeIntersectPoint.current);

    offset.current.x = planeIntersectPoint.current.x - group.current.position.x;
    offset.current.y = planeIntersectPoint.current.z - group.current.position.z;

    group.current.rotation.y =
      Math.atan2(
        group.current.position.x - planeIntersectPoint.current.x,
        group.current.position.z - planeIntersectPoint.current.z,
      ) +
      startRotation.current -
      rotationOffset.current;
  }

  function release() {
    dragging.current = false;
    setDragging(dragging.current);
  }

  useEffect(() => {
    const groupBoundingBox = new Box3().setFromObject(group.current!);
    groupSize.current = groupBoundingBox.getSize(new Vector3());
  }, []);

  useEffect(() => {
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', release);

    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', release);
    };
  }, []);

  return (
    <group position={position} onPointerDown={grab} ref={group} rotation-y={rotation}>
      {children}
    </group>
  );
}
