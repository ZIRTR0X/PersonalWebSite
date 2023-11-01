import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import CameraControls from 'camera-controls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { ThemeService } from '../services/theme.service';
CameraControls.install({ THREE: THREE });
globalThis.THREE = THREE;

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.css'],
})
export class EarthComponent implements OnInit {
  // Region Properties

  public threeRenderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();

  private themeService = new ThemeService();
  // Dimensions of the rendering area
  private renderingAreaWidth: number = 500;
  private renderingAreaHeight: number = 500;
  private clock: THREE.Clock = new THREE.Clock();
  private scene: THREE.Scene = new THREE.Scene();
  private directionalLight?: THREE.DirectionalLight;
  private camera?: THREE.PerspectiveCamera;
  private cameraControls?: CameraControls;

  // endregion

  // Region Methods

  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  ngOnInit(): void {
    this.setWindowSize();

    this.camera = new THREE.PerspectiveCamera(
      28,
      this.renderingAreaWidth / this.renderingAreaHeight,
      0.01,
      100
    );

    // @ts-ignore
    globalThis.camera = camera;
    this.camera.position.set(0, 0, 5);
    this.threeRenderer = new THREE.WebGLRenderer({
      canvas: this.canvas.nativeElement,
    });
    this.threeRenderer.setSize(
      this.renderingAreaWidth,
      this.renderingAreaHeight
    );

    const cameraControls = new CameraControls(
      this.camera,
      this.threeRenderer.domElement
    );
    cameraControls.mouseButtons.left = CameraControls.ACTION.ROTATE;
    cameraControls.mouseButtons.right = CameraControls.ACTION.NONE;
    cameraControls.mouseButtons.wheel = CameraControls.ACTION.NONE;

    // @ts-ignore
    cameraControls.touches.one = CameraControls.ACTION.ROTATE;
    cameraControls.touches.two = CameraControls.ACTION.NONE;
    cameraControls.touches.three = CameraControls.ACTION.NONE;

    // @ts-ignore
    globalThis.cameraControls = cameraControls;

    const loader = new GLTFLoader();
    loader.load(
      'assets/gltf/low_poly_earth.gltf',
      (gltf) => {
        const model = gltf.scene;

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        this.directionalLight.position.copy(this.camera!.position);
        this.scene.add(this.directionalLight);

        this.scene.add(model);
        this.threeRenderer.setClearColor(
          new THREE.Color(
            this.themeService.isDarkTheme() ? '#181a1b' : '#ffffff'
          )
        );
        this.threeRenderer.render(this.scene, this.camera!);
      },
      (xhr) => {
        console.log('Earth ' + (xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('An error happened', error);
      }
    );

    let userDragging = false;
    let disableAutoRotate = false;

    const onRest = () => {
      cameraControls.removeEventListener('rest', onRest);
      userDragging = false;
      disableAutoRotate = false;
    };

    cameraControls.addEventListener('controlstart', () => {
      cameraControls.removeEventListener('rest', onRest);
      userDragging = true;
      disableAutoRotate = true;
    });

    cameraControls.addEventListener('controlend', () => {
      if (cameraControls.active)
        cameraControls.addEventListener('rest', onRest);
      else onRest();
    });

    cameraControls.addEventListener('transitionstart', () => {
      if (userDragging) return;
      disableAutoRotate = true;
      cameraControls.addEventListener('rest', onRest);
    });

    const onWindowResize = () => {
      this.setWindowSize();
      this.threeRenderer.setSize(
        this.renderingAreaWidth,
        this.renderingAreaHeight
      );
      this.camera!.aspect = this.renderingAreaWidth / this.renderingAreaHeight;
    };

    window.addEventListener('resize', onWindowResize, false);

    const themeButton = document.querySelectorAll(
      '.toggle-checkbox'
    ) as NodeListOf<HTMLInputElement>;

    themeButton.forEach((button) => {
      button.addEventListener('change', () => {
        this.threeRenderer.setClearColor(
          new THREE.Color(
            this.themeService.isDarkTheme() ? '#181a1b' : '#ffffff'
          )
        );
        this.threeRenderer.render(this.scene, this.camera!);
      });
    });
  }

  private updateLightPosition(camera: THREE.PerspectiveCamera): void {
    if (this.directionalLight !== null) {
      this.directionalLight?.position.copy(camera.position);
    }
  }

  private anim(): void {
    const renderer = this.threeRenderer;
    const delta = this.clock.getDelta();
    const updated = cameraControls.update(delta);
    this.updateLightPosition(this.camera);
    if (!disableAutoRotate)
      cameraControls.azimuthAngle += 20 * delta * THREE.MathUtils.DEG2RAD;

    if (updated) renderer.render(this.scene, this.camera!);

    requestAnimationFrame(this.anim);
  }

  private setWindowSize(): void {
    if (window.innerWidth > 1270) {
      this.renderingAreaWidth = this.renderingAreaHeight = 500;
    } else if (window.innerWidth > 1000) {
      this.renderingAreaWidth = this.renderingAreaHeight = 450;
    } else if (window.innerWidth > 700) {
      this.renderingAreaWidth = this.renderingAreaHeight = 400;
    } else if (window.innerWidth > 460) {
      this.renderingAreaWidth = this.renderingAreaHeight = 350;
    } else if (window.innerWidth > 320) {
      this.renderingAreaWidth = this.renderingAreaHeight = 300;
    } else {
      this.renderingAreaWidth = this.renderingAreaHeight = 250;
    }
  }

  // endregion
}
