import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth + 1, window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener("resize", (event) => {

  console.log("window resized, resizing three.js canvas");
  camera.aspect = window.innerWidth + 1 / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth + 1, window.innerHeight);

});


//scene.background = new THREE.Color(39,40,44);
const geometry = new THREE.BoxGeometry(0.8, 0, 0.5);
const video = document.getElementById( 'video' );
const texture = new THREE.VideoTexture( video );
const material = new THREE.MeshBasicMaterial({ map: texture });
video.play();

const cube = new THREE.Mesh(geometry, material);

cube.position.x = 1;
//const light = new THREE.Light(0xFFFFFF, 1)
//scene.add(light);
scene.add(cube);
//light.position.x = 5;
//light.position.y = 5;
//light.position.z = 5;

camera.position.z = 2;



const loader = new GLTFLoader();
let gltfGlobal;

loader.load('./models/laptop.gltf', function(gltf) {

  scene.add(gltf.scene);
  gltfGlobal = gltf;
  gltf.scene.rotation.y = 179.5;
  gltf.scene.position.y = -0.65
  gltf.scene.position.z = -2
  gltf.scene.position.x = 2.5
  const light = new THREE.PointLight(new THREE.Color(4, 4, 4), 1, 100);
  light.position.set(3, 3, 0);
  scene.add(light);
  gltf.scene.children[0].position.x = -1;
  animate();
}, undefined, function(error) {

  console.error(error);

});


function animate() {
  //cube.rotation.x += 0.01;
  //gltfGlobal.scene.rotation.y += 0.01;
  cube.rotation.x = document.getElementById("rotX").value;
  cube.rotation.y = document.getElementById("rotY").value;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

