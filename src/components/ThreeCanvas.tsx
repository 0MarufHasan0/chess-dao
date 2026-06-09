"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeCanvasProps {
  piece: "king" | "queen" | "knight" | "rook" | "token";
  className?: string;
  autoRotateSpeed?: number;
  interactive?: boolean;
}

export default function ThreeCanvas({
  piece,
  className = "",
  autoRotateSpeed = 0.5,
  interactive = true,
}: ThreeCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    let width = container.clientWidth || 400;
    let height = container.clientHeight || 400;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 2, 2));
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffe5aa, 3.0);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xaaddff, 2.0);
    rimLight.position.set(-5, 3, -5);
    scene.add(rimLight);

    const bounceLight = new THREE.DirectionalLight(0xd4af37, 1.5);
    bounceLight.position.set(0, -5, 2);
    scene.add(bounceLight);

    const goldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xd4af37,
      metalness: 1.0,
      roughness: 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.9,
    });

    const group = new THREE.Group();
    scene.add(group);

    let activeMesh: THREE.Object3D;

    if (piece === "king") {
      const kingGroup = new THREE.Group();

      const points = [];
      points.push(new THREE.Vector2(1.3, -2.5));
      points.push(new THREE.Vector2(1.3, -2.2));
      points.push(new THREE.Vector2(1.1, -2.0));
      points.push(new THREE.Vector2(0.7, -1.6));
      points.push(new THREE.Vector2(0.6, 0.5));
      points.push(new THREE.Vector2(0.8, 1.0));
      points.push(new THREE.Vector2(1.1, 1.3));
      points.push(new THREE.Vector2(0.7, 1.6));
      points.push(new THREE.Vector2(0.9, 1.9));
      points.push(new THREE.Vector2(0.0, 2.0));
      
      const latheGeom = new THREE.LatheGeometry(points, 32);
      const body = new THREE.Mesh(latheGeom, goldMaterial);
      kingGroup.add(body);

      const crossGroup = new THREE.Group();
      crossGroup.position.y = 2.3;
      const verticalGeom = new THREE.BoxGeometry(0.25, 0.8, 0.25);
      const horizontalGeom = new THREE.BoxGeometry(0.6, 0.25, 0.25);
      const vPart = new THREE.Mesh(verticalGeom, goldMaterial);
      const hPart = new THREE.Mesh(horizontalGeom, goldMaterial);
      crossGroup.add(vPart, hPart);
      kingGroup.add(crossGroup);

      kingGroup.scale.set(0.9, 0.9, 0.9);
      activeMesh = kingGroup;
    } else if (piece === "queen") {
      const queenGroup = new THREE.Group();

      const points = [];
      points.push(new THREE.Vector2(1.25, -2.5));
      points.push(new THREE.Vector2(1.25, -2.2));
      points.push(new THREE.Vector2(1.0, -2.0));
      points.push(new THREE.Vector2(0.6, -1.4));
      points.push(new THREE.Vector2(0.4, 0.8));
      points.push(new THREE.Vector2(0.7, 1.2));
      points.push(new THREE.Vector2(1.0, 1.5));
      points.push(new THREE.Vector2(0.7, 1.7));
      points.push(new THREE.Vector2(1.1, 2.0));
      points.push(new THREE.Vector2(0.0, 2.1));
      
      const latheGeom = new THREE.LatheGeometry(points, 32);
      const body = new THREE.Mesh(latheGeom, goldMaterial);
      queenGroup.add(body);

      const spikesCount = 8;
      for (let i = 0; i < spikesCount; i++) {
        const angle = (i / spikesCount) * Math.PI * 2;
        const sphereGeom = new THREE.SphereGeometry(0.12, 16, 16);
        const sphere = new THREE.Mesh(sphereGeom, goldMaterial);
        sphere.position.set(Math.cos(angle) * 0.9, 1.9, Math.sin(angle) * 0.9);
        queenGroup.add(sphere);
      }

      const topSphereGeom = new THREE.SphereGeometry(0.22, 16, 16);
      const topSphere = new THREE.Mesh(topSphereGeom, goldMaterial);
      topSphere.position.y = 2.3;
      queenGroup.add(topSphere);

      queenGroup.scale.set(0.9, 0.9, 0.9);
      activeMesh = queenGroup;
    } else if (piece === "rook") {
      const rookGroup = new THREE.Group();

      const points = [];
      points.push(new THREE.Vector2(1.2, -2.5));
      points.push(new THREE.Vector2(1.2, -2.2));
      points.push(new THREE.Vector2(1.0, -2.0));
      points.push(new THREE.Vector2(0.7, -1.2));
      points.push(new THREE.Vector2(0.7, 0.8));
      points.push(new THREE.Vector2(1.0, 1.1));
      points.push(new THREE.Vector2(1.2, 1.5));
      points.push(new THREE.Vector2(1.2, 2.0));
      points.push(new THREE.Vector2(0.0, 2.0));
      
      const latheGeom = new THREE.LatheGeometry(points, 32);
      const body = new THREE.Mesh(latheGeom, goldMaterial);
      rookGroup.add(body);

      const notches = 6;
      for (let i = 0; i < notches; i++) {
        const angle = (i / notches) * Math.PI * 2;
        const boxGeom = new THREE.BoxGeometry(0.35, 0.45, 0.35);
        const notch = new THREE.Mesh(boxGeom, goldMaterial);
        notch.position.set(Math.cos(angle) * 1.05, 2.05, Math.sin(angle) * 1.05);
        notch.rotation.y = -angle;
        rookGroup.add(notch);
      }

      rookGroup.scale.set(0.95, 0.95, 0.95);
      activeMesh = rookGroup;
    } else if (piece === "knight") {
      const knightGroup = new THREE.Group();

      const points = [];
      points.push(new THREE.Vector2(1.2, -2.5));
      points.push(new THREE.Vector2(1.2, -2.2));
      points.push(new THREE.Vector2(1.0, -2.0));
      points.push(new THREE.Vector2(0.8, -1.8));
      points.push(new THREE.Vector2(0.0, -1.7));
      
      const latheGeom = new THREE.LatheGeometry(points, 32);
      const base = new THREE.Mesh(latheGeom, goldMaterial);
      knightGroup.add(base);

      const shape = new THREE.Shape();
      shape.moveTo(0, -1.8);
      shape.lineTo(0.8, -1.8);
      shape.quadraticCurveTo(1.1, -1.4, 0.9, -0.9);
      shape.quadraticCurveTo(1.6, 0.2, 1.3, 1.1);
      shape.quadraticCurveTo(1.0, 1.6, 0.2, 1.6);
      shape.lineTo(-0.5, 1.6);
      shape.quadraticCurveTo(-1.0, 1.2, -0.8, 0.5);
      shape.quadraticCurveTo(-0.6, -0.5, -0.9, -1.0);
      shape.quadraticCurveTo(-0.8, -1.8, 0, -1.8);

      const extrudeSettings = {
        depth: 0.5,
        bevelEnabled: true,
        bevelSegments: 4,
        steps: 1,
        bevelSize: 0.08,
        bevelThickness: 0.06,
      };
      
      const horseGeom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      horseGeom.center();
      const horse = new THREE.Mesh(horseGeom, goldMaterial);
      horse.position.y = -0.15;
      knightGroup.add(horse);

      knightGroup.scale.set(1.1, 1.1, 1.1);
      activeMesh = knightGroup;
    } else {
      const tokenGroup = new THREE.Group();

      const cylGeom = new THREE.CylinderGeometry(2.0, 2.0, 0.2, 64);
      const coin = new THREE.Mesh(cylGeom, goldMaterial);
      coin.rotation.x = Math.PI / 2;
      tokenGroup.add(coin);

      const emblemShape = new THREE.Shape();
      emblemShape.moveTo(0, 0.7);
      emblemShape.lineTo(0.18, 0.18);
      emblemShape.lineTo(0.7, 0.18);
      emblemShape.lineTo(0.26, -0.12);
      emblemShape.lineTo(0.44, -0.66);
      emblemShape.lineTo(0, -0.35);
      emblemShape.lineTo(-0.44, -0.66);
      emblemShape.lineTo(-0.26, -0.12);
      emblemShape.lineTo(-0.7, 0.18);
      emblemShape.lineTo(-0.18, 0.18);
      emblemShape.closePath();

      const extrudeSettings = {
        depth: 0.08,
        bevelEnabled: true,
        bevelSegments: 3,
        steps: 1,
        bevelSize: 0.015,
        bevelThickness: 0.015,
      };
      const emblemGeom = new THREE.ExtrudeGeometry(emblemShape, extrudeSettings);
      emblemGeom.center();
      const faceEmblem = new THREE.Mesh(emblemGeom, goldMaterial);
      faceEmblem.position.z = 0.11;
      tokenGroup.add(faceEmblem);

      const backEmblem = faceEmblem.clone();
      backEmblem.position.z = -0.11;
      backEmblem.rotation.y = Math.PI;
      tokenGroup.add(backEmblem);

      activeMesh = tokenGroup;
    }

    group.add(activeMesh);

    const particleCount = 45;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 12;
      particlePositions[i + 1] = (Math.random() - 0.5) * 12;
      particlePositions[i + 2] = (Math.random() - 0.5) * 8;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xf7d774,
      size: 0.06,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      if (typeof window === "undefined") return;
      mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    if (interactive && typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
    }

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      group.rotation.y = elapsedTime * autoRotateSpeed;

      if (interactive) {
        mouse.x += (mouse.targetX - mouse.x) * 0.06;
        mouse.y += (mouse.targetY - mouse.y) * 0.06;
        
        group.rotation.x = mouse.y * 0.3;
        group.rotation.y += mouse.x * 0.3;
        
        keyLight.position.x = 5 + mouse.x * 1.5;
        keyLight.position.y = 5 + mouse.y * 1.5;
      }

      const positions = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] += 0.006;
        if (positions[i] > 6) {
          positions[i] = -6;
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    return () => {
      if (interactive && typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      goldMaterial.dispose();
      particleMaterial.dispose();
      particleGeometry.dispose();
      
      group.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          if (obj.geometry) obj.geometry.dispose();
        }
      });
    };
  }, [piece, autoRotateSpeed, interactive]);

  return (
    <div ref={containerRef} className={`w-full h-full relative ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
