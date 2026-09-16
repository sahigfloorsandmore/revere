import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene Setup
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.2, 5.8);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfffaed, 2.2);
    sunLight.position.set(5, 8, 4);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    scene.add(sunLight);

    const sageLight = new THREE.PointLight(0x74c69d, 3, 10);
    sageLight.position.set(-3, 2, 2);
    scene.add(sageLight);

    const goldLight = new THREE.PointLight(0xdfc27d, 2.5, 10);
    goldLight.position.set(3, -1, 2);
    scene.add(goldLight);

    // 3D Zen Stones Stack
    const stoneGroup = new THREE.Group();
    scene.add(stoneGroup);

    // Stone Material with organic sheen
    const createStoneMaterial = (colorHex, roughness = 0.35, metalness = 0.15) => {
      return new THREE.MeshStandardMaterial({
        color: new THREE.Color(colorHex),
        roughness: roughness,
        metalness: metalness,
        flatShading: false
      });
    };

    const baseStoneMat = createStoneMaterial(0x1b4332, 0.4, 0.1); // Deep Emerald Slate
    const midStoneMat = createStoneMaterial(0x283339, 0.3, 0.2); // Warm Charcoal River Pebble
    const topStoneMat = createStoneMaterial(0xc5a059, 0.2, 0.4); // Golden Accented Quartz Stone
    const crownStoneMat = createStoneMaterial(0x52b788, 0.25, 0.3); // Jade Capstone

    // Geometry function for smooth river stones
    const createPebble = (rx, ry, rz, segments = 32) => {
      const geom = new THREE.SphereGeometry(1, segments, segments);
      geom.scale(rx, ry, rz);
      return geom;
    };

    // Bottom Base Stone
    const stone1 = new THREE.Mesh(createPebble(1.35, 0.48, 1.1), baseStoneMat);
    stone1.position.set(0, -0.65, 0);
    stone1.castShadow = true;
    stone1.receiveShadow = true;
    stoneGroup.add(stone1);

    // Second Stone
    const stone2 = new THREE.Mesh(createPebble(1.05, 0.42, 0.88), midStoneMat);
    stone2.position.set(0.05, -0.1, 0.05);
    stone2.rotation.y = 0.35;
    stone2.castShadow = true;
    stone2.receiveShadow = true;
    stoneGroup.add(stone2);

    // Third Stone (Golden)
    const stone3 = new THREE.Mesh(createPebble(0.75, 0.35, 0.65), topStoneMat);
    stone3.position.set(-0.02, 0.38, -0.02);
    stone3.rotation.y = -0.5;
    stone3.castShadow = true;
    stone3.receiveShadow = true;
    stoneGroup.add(stone3);

    // Top Jade Jewel Stone
    const stone4 = new THREE.Mesh(createPebble(0.45, 0.26, 0.42), crownStoneMat);
    stone4.position.set(0.02, 0.76, 0.02);
    stone4.rotation.y = 0.2;
    stone4.castShadow = true;
    stone4.receiveShadow = true;
    stoneGroup.add(stone4);

    // Ambient Floating Wellness Halo Rings
    const ringGeo = new THREE.TorusGeometry(1.9, 0.015, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x52b788,
      emissive: 0x2d6a4f,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      transparent: true,
      opacity: 0.6
    });
    const haloRing1 = new THREE.Mesh(ringGeo, ringMat);
    haloRing1.rotation.x = Math.PI / 2.3;
    haloRing1.position.y = 0;
    scene.add(haloRing1);

    const ringGeo2 = new THREE.TorusGeometry(2.3, 0.012, 16, 100);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0xdfc27d,
      emissive: 0xb38b34,
      emissiveIntensity: 0.7,
      roughness: 0.1,
      transparent: true,
      opacity: 0.5
    });
    const haloRing2 = new THREE.Mesh(ringGeo2, ringMat2);
    haloRing2.rotation.x = Math.PI / 2.1;
    haloRing2.rotation.y = Math.PI / 6;
    haloRing2.position.y = -0.2;
    scene.add(haloRing2);

    // Floating Sparkles / Particles
    const particleCount = 45;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePos[i * 3] = (Math.random() - 0.5) * 8;
      particlePos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      particlePos[i * 3 + 2] = (Math.random() - 0.5) * 6;
      particleScales[i] = Math.random() * 0.06 + 0.02;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xdfc27d,
      size: 0.08,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Parallax & Scroll Interactive State
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollProgress = 0;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (e.clientX / innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = container.clientHeight || 700;
      scrollProgress = Math.min(scrollY / heroHeight, 1.5);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Gentle floating animation for Zen stones
      stoneGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.08;
      stoneGroup.rotation.y = mouseX * 0.4 + elapsedTime * 0.05 + scrollProgress * 0.6;
      stoneGroup.rotation.x = -mouseY * 0.25;

      // Individual stone micro-rotations
      stone1.rotation.y = Math.sin(elapsedTime * 0.3) * 0.04;
      stone2.rotation.y = 0.35 + Math.cos(elapsedTime * 0.4) * 0.06;
      stone3.rotation.y = -0.5 + Math.sin(elapsedTime * 0.5) * 0.08;
      stone4.rotation.y = 0.2 + Math.cos(elapsedTime * 0.6) * 0.1;

      // Halo rings gentle counter-rotation
      haloRing1.rotation.z = elapsedTime * 0.15;
      haloRing2.rotation.z = -elapsedTime * 0.1;

      // Particles slow drift
      particles.rotation.y = elapsedTime * 0.02;
      particles.rotation.x = elapsedTime * 0.01;

      // Scroll-driven camera dynamics
      camera.position.x = mouseX * 0.6;
      camera.position.y = 1.2 - mouseY * 0.4 - scrollProgress * 0.8;
      camera.position.z = 5.8 - scrollProgress * 1.5;
      camera.lookAt(0, 0.1, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="hero-3d-canvas-wrapper" 
      aria-hidden="true"
    />
  );
}
