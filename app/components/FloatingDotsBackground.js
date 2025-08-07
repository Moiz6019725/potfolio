import { useEffect, useRef } from "react";
import * as THREE from "three";

const FloatingDotsBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const particles = [];
    const particleCount = 80;
    const geometry = new THREE.SphereGeometry(0.25, 6, 6);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(geometry, material);
      particle.position.set(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200
      );
      particle.userData = {
        speed: 0.05 + Math.random() * 0.1
      };
      scene.add(particle);
      particles.push(particle);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      particles.forEach(p => {
        p.position.y += p.userData.speed;
        if (p.position.y > 100) p.position.y = -100;
      });
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        background: "radial-gradient(circle at center, #29223A 0%, #000000 100%)",
        overflow: "hidden"
      }}
    />
  );
};

export default FloatingDotsBackground;
