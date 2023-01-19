
attribute vec2 reference;
uniform vec2 resolution;
uniform sampler2D positionTex;

void main() {
  vec2 uv = (position.xy / resolution); //* width;
  vec4 tmpPos = texture2D( positionTex, uv );
  vec3 pos = tmpPos.xyz;
  vec3 newPosition = position;
  newPosition = mat3( modelMatrix ) * newPosition;
  newPosition += pos;
  gl_Position = projectionMatrix *  viewMatrix  * vec4( newPosition.x, newPosition.y, newPosition.z, 1.0 );
  gl_PointSize = 4.0;
}
