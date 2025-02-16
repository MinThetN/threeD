import * as THREE from 'three';

// 1. Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// 2. Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // FOV, aspect ratio, near, far
camera.position.z = 5; // Move the camera back

// 3. Create and add a cube object to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#468585', emissive: '#468585' });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 4. Add lighting
const light = new THREE.DirectionalLight(0x9FED9, 10); // color, intensity
light.position.set(1, 1, 1); // x, y, z
scene.add(light);

// 5. Set up the renderer
 const renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerWidth, window.innerHeight);
 document.body.appendChild(renderer.domElement);

// 6. Animate the scene
function animate(){
    requestAnimationFrame(animate);

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    // cube.rotation.z += 0.02;

    renderer.render(scene, camera);
}
animate();


