import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Stats from 'three/examples/jsm/libs/stats.module'
import {
    AxesHelper,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene, SphereGeometry,
    WebGLRenderer
} from "three";


export class Viewer {

    private controls: OrbitControls
    private camera: PerspectiveCamera

    private renderer: WebGLRenderer
    private scene: Scene

    private globe: Mesh

    private stats: Stats


    constructor(targetElement: Element) {

        this.renderer = new WebGLRenderer()
        targetElement.appendChild(this.renderer.domElement)

        this.stats = new Stats()
        document.body.appendChild(this.stats.dom)


        this.camera = new PerspectiveCamera(75)
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)

        this.scene = new Scene()

        const mat = new MeshBasicMaterial({ wireframe: true })
        this.globe = new Mesh(new SphereGeometry(10, 100, 100), mat)
        this.scene.add(this.globe)

        const axes = new AxesHelper(1)
        this.scene.add(axes)

        this.camera.position.set(16, 12, 20)
        this.camera.lookAt(this.scene.position)
        this.scene.add(this.camera)

        window.onresize = this.onResize.bind(this)

        this.onResize()
        this.update()
    }

    
    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
    }

    
    update() {
        requestAnimationFrame(this.update.bind(this))

        this.globe.rotation.y = performance.now() * 0.0001

        this.stats.update()
        this.controls.update()
        this.render()
    }

    
    render() {
        this.renderer.render(this.scene, this.camera)
    }
}