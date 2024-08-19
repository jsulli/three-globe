// noinspection TypeScriptValidateTypes

import { ShaderMaterial } from "three";
import vertText from './ocean.vert?raw'
import fragText from './ocean.frag?raw'


export class OceanMaterial extends ShaderMaterial {

    constructor() {
        super({
            fragmentShader: fragText,
            vertexShader: vertText,
        })
    }
}