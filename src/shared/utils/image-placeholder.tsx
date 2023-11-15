export interface ImagePlaceholderProps {
  width: number;
  height: number;
}

const placeholder = (w: number, h: number) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="hsl(195, 80%, 8%)" offset="20%" />
        <stop stop-color="hsl(194, 57%, 18%)" offset="50%" />
        <stop stop-color="hsl(195, 80%, 8%)" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="hsl(195, 80%, 8%)" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

const toBase64 = (str: string): string => {
  return typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);
}

const imagePlaceholder = ({width, height}: ImagePlaceholderProps): string => {
  const dataImagePrefix = `data:image/svg+xml;base64,`;
  return `${dataImagePrefix}${toBase64(placeholder(width, height))}`;
}

export default imagePlaceholder;
