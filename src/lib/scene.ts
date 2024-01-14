import * as Three from 'three'

const scene = new Three.Scene()
const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const geometry = new Three.BoxGeometry()
const material = new Three.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new Three.Mesh(geometry, material)

let renderer: Three.WebGLRenderer;

const animate = () => {
  requestAnimationFrame(animate)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  renderer.render(scene, camera)
}

const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
}

const createScene = (canvas: HTMLCanvasElement) => {
  renderer = new Three.WebGLRenderer({ canvas })

  scene.add(cube)
  camera.position.z = 5

  resize()
  animate()
}

export { createScene }

window.addEventListener('resize', resize)
