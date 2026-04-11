import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = null;

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 32;

const canvas = document.getElementById('bg-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 2200;
const posArray = new Float32Array(particlesCount * 3);
for(let i = 0; i < particlesCount * 3; i += 3) {
    posArray[i] = (Math.random() - 0.5) * 110;
    posArray[i+1] = (Math.random() - 0.5) * 70;
    posArray[i+2] = (Math.random() - 0.5) * 60;
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particlesMaterial = new THREE.PointsMaterial({ 
    size: 0.12, 
    color: 0x6d8eff, 
    transparent: true, 
    opacity: 0.5, 
    blending: THREE.AdditiveBlending 
});
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

const particlesMaterial2 = new THREE.PointsMaterial({ 
    size: 0.08, 
    color: 0xa78bfa, 
    transparent: true, 
    opacity: 0.4, 
    blending: THREE.AdditiveBlending 
});
const particlesMesh2 = new THREE.Points(particlesGeometry, particlesMaterial2);
scene.add(particlesMesh2);

// Floating cubes
const cubesGeometry = new THREE.BoxGeometry(0.45, 0.45, 0.45);
const cubesMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x4f46e5, 
    emissive: 0x1e1a3a, 
    roughness: 0.4, 
    metalness: 0.6 
});
const cubes = [];
for(let i = 0; i < 90; i++) {
    const cube = new THREE.Mesh(cubesGeometry, cubesMaterial);
    cube.position.x = (Math.random() - 0.5) * 90;
    cube.position.y = (Math.random() - 0.5) * 55;
    cube.position.z = (Math.random() - 0.5) * 50;
    cube.scale.setScalar(Math.random() * 1.4 + 0.4);
    scene.add(cube);
    cubes.push(cube);
}

// Lighting
const ambientLight = new THREE.AmbientLight(0x2d2a4a);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(2, 3, 4);
scene.add(directionalLight);
const pointLight = new THREE.PointLight(0x6b46c1, 0.9);
pointLight.position.set(4, 5, 6);
scene.add(pointLight);

// Mouse interaction
let time = 0;
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = (e.clientY / window.innerHeight) * 2 - 1;
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    time += 0.004;
    
    particlesMesh.rotation.y = time * 0.08;
    particlesMesh.rotation.x = time * 0.04;
    particlesMesh2.rotation.y = time * 0.12;
    particlesMesh2.rotation.x = time * 0.06;
    
    cubes.forEach((cube, idx) => {
        cube.rotation.x += 0.008;
        cube.rotation.y += 0.01;
        cube.position.z += Math.sin(time + idx) * 0.008;
    });
    
    camera.position.x += (mouseX * 4 - camera.position.x) * 0.04;
    camera.position.y += (-mouseY * 2.5 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
    
    pointLight.intensity = 0.8 + Math.sin(time * 1.8) * 0.3;
    
    renderer.render(scene, camera);
}
animate();

// Handle resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});