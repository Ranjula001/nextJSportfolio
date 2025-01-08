import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function LaptopModel() {
  const { scene } = useGLTF("/assets/3D model/Laptops.glb");
  return <primitive object={scene} scale={0.5} />;
}

export default function Laptop() {
  return (
    <div className="h-[500px]">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <LaptopModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
