import * as THREE from "three";
import Experience from "../Experience";
import Room from "./Room.js"
import SkyBox from "./SkyBox.js"
import Environment from "./Environment.js"

export default class World {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    this.resources = this.experience.resources

    this.resources.on("ready",()=>{
      this.environment = new Environment()
      this.room = new Room()
      this.skybox = new SkyBox()
    })
  }

  resize() {}
  update() {}
}
