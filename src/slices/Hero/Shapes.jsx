"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { Suspense, useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export const Shapes = () => {
  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          {/* <ContactShadows rotation-x={Math.PI / 2} position={[0, 0, 0]} opacity={0.25} width={100} height={100} blur={1} far={10} />
           */}
          <Geometries />
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
};

const Geometries = () => {
  const geometries = [
    {
      position: [0, 0, 0],
      r: 0.3,
      geometry: new THREE.IcosahedronGeometry(3),
    },
    {
      position: [1, 2, 1],
      r: 0.7,
      geometry: new THREE.TorusKnotGeometry(0.5, 0.2, 15, 16),
    },
    {
      position: [1.5, -1.2, -1],
      r: 0.7,
      geometry: new THREE.OctahedronGeometry(1),
    },
    {
      position: [-1, 1.2, 1],
      r: 0.7,
      geometry: new THREE.CylinderGeometry(0.45, 0.45, 1, 32),
    },
    {
      position: [-1.25, -1.2, 0.5],
      r: 0.7,
      geometry: new THREE.CapsuleGeometry(0.5, 0.7, 4, 8),
    },
  ];

  const materials = [
    new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({
      color: Math.random() * 0xffffff,
      roughness: Math.random(),
      metalness: Math.random(),
    }),
    new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({
      color: Math.random() * 0xffffff,
      roughness: Math.random(),
      metalness: Math.random(),
    }),
    new THREE.MeshStandardMaterial({
      color: Math.random() * 0xffffff,
      roughness: Math.random(),
      metalness: Math.random(),
    }),
    new THREE.MeshStandardMaterial({
      color: Math.random() * 0xffffff,
      roughness: Math.random(),
      metalness: Math.random(),
    }),
    new THREE.MeshStandardMaterial({
      color: Math.random() * 0xffffff,
      roughness: Math.random(),
      metalness: Math.random(),
    }),
  ];

  return geometries.map(({ position, r, geometry }) => {
    return (
      <Geometry
        key={JSON.stringify(position)}
        position={position.map((p) => p * 2)}
        geometry={geometry}
        materials={materials}
        r={r}
      />
    );
  });
};

const Geometry = ({ r, position, geometry, materials }) => {
  const meshRef = useRef();
  const [visible, setVisible] = useState(false);

  const getRandomMaterial = () => {
    return gsap.utils.random(materials);
  };

  const startingMaterial = getRandomMaterial();

  const handleClick = (e) => {
    const mesh = e.object;
    // mesh.material.color.setHex(Math.random() * 0xffffff);
    // mesh.material.roughness = Math.random();
    // mesh.material.metalness = Math.random();
    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1, 0.3)",
      yoyo: true,
    });

    mesh.material = getRandomMaterial();
  };

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    let context = gsap.context(() => {
      setVisible(true);
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: "back",
        delay: 0.5,
      });
    });
    return () => context.revert();
  }, []);

  return (
    <group ref={meshRef} position={position}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          material={startingMaterial}
          visible={visible}
        />
      </Float>
    </group>
  );
};
