import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Woman from "./Woman";
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";

let camera;

class ThreeWomen extends Component {
  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }

  // init goes in here
  async componentDidMount() {
    {
      var mouseX = 0,
        mouseY = 0,
        windowHalfX = window.innerWidth / 2,
        windowHalfY = window.innerHeight / 2,
        scene,
        renderer;
      var container, particle;

      container = document.createElement("div");
      document.body.appendChild(container);

      scene = new THREE.Scene();

      scene.fog = new THREE.Fog(0x000000, 250, 1400);
      // LIGHTS
      var dirLight = new THREE.DirectionalLight(0xffffff, 0.125);
      dirLight.position.set(0, 0, 1).normalize();
      scene.add(dirLight);

      var pointLight = new THREE.PointLight(0xffffff, 1.5);
      pointLight.position.set(50, 100, 90);
      scene.add(pointLight);

      renderer = new THREE.WebGLRenderer({ alpha: true }); // gradient; this can be swapped for WebGLRenderer
      renderer.setSize(window.innerWidth, window.innerHeight);
      // Configure renderer clear color
      renderer.setClearColor("#FF4500");

      container.appendChild(renderer.domElement);

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      camera.position.z = 100;

      var controls = new OrbitControls(camera, renderer.domElement);
      controls.enableKeys = false;

      // NAMES
      var geometry = new THREE.Geometry();

      this.scene = scene;
      this.camera = camera;
      this.controls = controls;
      this.renderer = renderer;
      // this.material = material;
      this.windowHalfX = windowHalfX;
      this.windowHalfY = windowHalfY;
    }

    var loader = new THREE.FontLoader();

    const textiii = this.props.women[4].name;
    console.log(textiii);

    const women = this.props.women;
    const material = new THREE.MeshLambertMaterial({ color: "#433F81" });

    let names = [];

    loader.load(
      "/static/fonts/spacemonoregular.type.json",
      function(font) {
        console.log(women);

        let cache = {};
        // for (let i = 0; i < 26; i++) {
        //   const letterCode = (i + 10).toString(36);
        //   cache[letterCode] = new THREE.TextGeometry(letterCode, {
        //     font: font,
        //     size: 10,
        //     height: 5,
        //     curveSegments: 12,
        //     bevelEnabled: true,
        //     bevelThickness: 2,
        //     bevelSize: 2,
        //     bevelSegments: 5
        //   });
        // }

        for (let i = 0; i < women.length; i++) {
          const textgroup = new THREE.Object3D();
          const womanName = women[i].name;

          for (var i = 0; i < womanName.length; i++) {
            console.log(womanName.charAt(i));
            // const char_mesh = new THREE.Mesh(geometry, material);
            // textgroup.add(char_mesh);

            // if (i === womanName.length - 2) {
            //   scene.add(textgroup);
            // }
          }

          // char_mesh = mesh( cache[char], material )
          // char_mesh.x += offset;
          // textgroup.add(char_mesh);

          // console.log(women[i].name);
          // const text = women[i].name;
          // const geometry = new THREE.TextGeometry(text, {
          //   font: font,
          //   size: 10,
          //   height: 5,
          //   curveSegments: 12,
          //   bevelEnabled: true,
          //   bevelThickness: 2,
          //   bevelSize: 2,
          //   bevelSegments: 5
          // });
          // particle = new THREE.Mesh(geometry, material);
          // particle.position.x = Math.random() * 500 - 1;
          // particle.position.y = Math.random() * 500 - 1;
          // particle.position.z = Math.random() * 500 - 1;
          // // add name to
          // // particle.name
          // scene.add(particle);
          // names.push(particle);
        }

        // console.log(geometry.vertices);
        // // console.log(geometry.vertices[0].x);
        // geometry.vertices.push(particle.position);
      },
      // onProgress callback
      function(xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },

      // onError callback
      function(err) {
        console.log("An error happened");
      }
    );

    // END NAMES

    // lines
    // var line = new THREE.Line(
    //   geometry,
    //   new THREE.LineBasicMaterial({ color: 0xfdff5f, opacity: 0.5 })
    // );
    // scene.add(line);

    // mousey
    document.addEventListener("mousemove", this.onDocumentMouseMove, false);
    document.addEventListener("touchstart", this.onDocumentTouchStart, false);
    document.addEventListener("touchmove", this.onDocumentTouchMove, false);
    this.animate();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.renderScene();
  }

  renderScene() {
    // camera.position.x += (mouseX - camera.position.x) * 0.05;
    // camera.position.y += (-mouseY + 200 - camera.position.y) * 0.05;
    this.camera.lookAt(this.scene.position);

    // controls.update();

    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  onDocumentMouseMove(event) {
    this.mouseX = event.clientX - this.windowHalfX;
    this.mouseY = event.clientY - this.windowHalfY;
  }

  onDocumentTouchStart(event) {
    if (event.touches.length > 1) {
      event.preventDefault();

      this.mouseX = event.touches[0].pageX - this.windowHalfX;
      this.mouseY = event.touches[0].pageY - this.windowHalfY;
    }
  }

  onDocumentTouchMove(event) {
    if (event.touches.length == 1) {
      event.preventDefault();

      this.mouseX = event.touches[0].pageX - windowHalfX;
      this.mouseY = event.touches[0].pageY - windowHalfY;
    }
  }

  render() {
    return (
      <div
        style={{
          width: "100vw",
          height: "90vh",
          position: "absolute",
          bottom: "10vh"
        }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}

// class ThreeWomen extends Component {
//   componentDidUpdate() {
//     console.log("inside of three women");
//   }

//   render() {
//     return (
//       <WomenList>
//         {this.props.women.map(woman => (
//           <Woman woman={woman} key={woman.id} />
//         ))}
//       </WomenList>
//     );
//   }
// }

export default ThreeWomen;
