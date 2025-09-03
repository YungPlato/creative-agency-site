"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 200, 32);
    const wire = new THREE.WireframeGeometry(geometry);
    const line = new THREE.LineSegments(
      wire,
      new THREE.LineBasicMaterial({ color: 0x00F0FF, transparent: true, opacity: 0.5 })
    );
    group.add(line);

    const pointsMaterial = new THREE.PointsMaterial({ color: 0xD900FF, size: 0.015 });
    const points = new THREE.Points(geometry, pointsMaterial);
    group.add(points);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(3, 3, 3);
    scene.add(light);

    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    const clock = new THREE.Clock();
    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      group.rotation.y = elapsedTime * 0.1;
      group.rotation.x += (mouse.y * 0.5 - group.rotation.x) * 0.05;
      group.rotation.y += (mouse.x * 0.5 - group.rotation.y) * 0.05;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 -z-10" aria-hidden="true" />;
}

