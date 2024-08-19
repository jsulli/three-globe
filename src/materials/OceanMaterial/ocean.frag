varying vec2 vUv;
uniform vec3 color;


void main() {

    vec3 fragColor = vec3(1.0, 1.0, 0.0);

    gl_FragColor = vec4(fragColor, 1.0);
}