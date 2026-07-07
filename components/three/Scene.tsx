"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Icosahedron,
  MeshDistortMaterial,
  Octahedron,
  Torus,
  TorusKnot,
} from "@react-three/drei";
import * as THREE from "three";

function CoreBlob() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.15;
    ref.current.rotation.z = t * 0.05;
  });
  return (
    <Icosahedron ref={ref} args={[1.15, 8]} position={[2.6, -0.1, 0]}>
      <MeshDistortMaterial
        color="#7c5cff"
        emissive="#3b1e9a"
        emissiveIntensity={0.35}
        roughness={0.15}
        metalness={0.85}
        distort={0.35}
        speed={1.6}
      />
    </Icosahedron>
  );
}

type ShapeProps = {
  position: [number, number, number];
  scale?: number;
  color: string;
  speed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  kind: "torus" | "octa" | "knot" | "ico";
};

function FloatingShape({
  position,
  scale = 1,
  color,
  speed = 1.4,
  rotationIntensity = 1,
  floatIntensity = 1.4,
  kind,
}: ShapeProps) {
  const material = (
    <meshStandardMaterial
      color={color}
      roughness={0.2}
      metalness={0.6}
      emissive={color}
      emissiveIntensity={0.15}
    />
  );
  return (
    <Float
      speed={speed}
      rotationIntensity={rotationIntensity}
      floatIntensity={floatIntensity}
      position={position}
    >
      {kind === "torus" && (
        <Torus args={[0.5, 0.18, 16, 60]} scale={scale}>
          {material}
        </Torus>
      )}
      {kind === "octa" && (
        <Octahedron args={[0.55, 0]} scale={scale}>
          {material}
        </Octahedron>
      )}
      {kind === "knot" && (
        <TorusKnot args={[0.4, 0.13, 100, 16]} scale={scale}>
          {material}
        </TorusKnot>
      )}
      {kind === "ico" && (
        <Icosahedron args={[0.55, 0]} scale={scale}>
          {material}
        </Icosahedron>
      )}
    </Float>
  );
}

function ParallaxGroup({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const targetX = state.pointer.y * 0.18;
    const targetY = state.pointer.x * 0.28;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.05);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.05);
  });
  return <group ref={group}>{children}</group>;
}

export default function Scene({ active = true }: { active?: boolean }) {
  const shapes = useMemo<ShapeProps[]>(
    () => [
      { position: [3.7, 1.4, -1], color: "#22d3ee", kind: "torus", scale: 0.95 },
      { position: [1.5, 1.9, -1], color: "#f472b6", kind: "octa", scale: 0.85 },
      { position: [4.0, -0.6, -0.5], color: "#a78bfa", kind: "ico", scale: 0.85 },
      { position: [1.9, -1.7, -1], color: "#7c5cff", kind: "knot", scale: 0.85 },
      { position: [3.1, 2.3, -1.5], color: "#22d3ee", kind: "octa", scale: 0.5, speed: 2 },
    ],
    []
  );

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop={active ? "always" : "never"}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.4} color="#ffffff" />
        <pointLight position={[-5, -3, 2]} intensity={2.2} color="#22d3ee" />
        <pointLight position={[5, 2, -3]} intensity={2.2} color="#f472b6" />
        <ParallaxGroup>
          <CoreBlob />
          {shapes.map((s, i) => (
            <FloatingShape key={i} {...s} />
          ))}
        </ParallaxGroup>
      </Suspense>
    </Canvas>
  );
}
