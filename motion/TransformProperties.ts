/**
 * Framer Motion doesn't expose this interface
 */

export default interface TransformProperties {
  x?: string | number;
  y?: string | number;
  z?: string | number;
  translateX?: string | number;
  translateY?: string | number;
  translateZ?: string | number;
  rotate?: string | number;
  rotateX?: string | number;
  rotateY?: string | number;
  rotateZ?: string | number;
  scale?: string | number;
  scaleX?: string | number;
  scaleY?: string | number;
  scaleZ?: string | number;
  skew?: string | number;
  skewX?: string | number;
  skewY?: string | number;
  originX?: string | number;
  originY?: string | number;
  originZ?: string | number;
  perspective?: string | number;
}
