import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear 3 cubos con diferentes colores y posiciones
// Cubo 1 (verde)
const geometry1 = new THREE.BoxGeometry(1, 1, 1);
const material1 = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // Verde
const cube1 = new THREE.Mesh(geometry1, material1);
cube1.position.set(-2, 0, 0); // Posición a la izquierda
scene.add(cube1);

// Cubo 2 (azul)
const geometry2 = new THREE.BoxGeometry(1, 1, 1);
const material2 = new THREE.MeshStandardMaterial({ color: 0x0000ff }); // Azul
const cube2 = new THREE.Mesh(geometry2, material2);
cube2.position.set(0, 0, 0); // Posición centro
scene.add(cube2);

// Cubo 3 (rojo)
const geometry3 = new THREE.BoxGeometry(1, 1, 1);
const material3 = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // Rojo
const cube3 = new THREE.Mesh(geometry3, material3);
cube3.position.set(2, 0, 0); // Posición a la derecha
scene.add(cube3);

// Agregar una luz direccional
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Posicionar la cámara
camera.position.z = 5;

// Función de animación con diferentes velocidades de rotación
function animate() {
    // Cubo 1 (verde) - velocidad base
    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.01;

    // Cubo 2 (azul) - 50% más rápido
    cube2.rotation.x += 0.025;
    cube2.rotation.y += 0.025;

    // Cubo 3 (rojo) - 100% más rápido
    cube3.rotation.x += 0.060;
    cube3.rotation.y += 0.060;

    renderer.render(scene, camera);
}

// Iniciar la animación
renderer.setAnimationLoop(animate);