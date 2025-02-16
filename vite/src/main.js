import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const canvas = document.getElementById('canvas');

// 1. Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// 2. Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. Object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: '#468585' });
const dodecahedron = new THREE.Mesh(geometry, material);

const BoxGeometry = new THREE.BoxGeometry(3, 0.5, 3); // width, height, depth
const BoxMaterial = new THREE.MeshBasicMaterial({ color: '#B4B4B3' });
const box = new THREE.Mesh(BoxGeometry, BoxMaterial);
box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);

// 4. Light
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);
scene.add(light);

// 5. Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 6. Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 0.05; // set to 0.1 to disable damping
controls.enableZoom = true;
controls.enablePan = true; // pan with mouse

// 7. Animation
function animate() {
  requestAnimationFrame(animate);

  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;

  box.rotation.y += 0.05;

  renderer.render(scene, camera);
}
animate(); // Start animation loop
