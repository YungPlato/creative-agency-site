"use client";
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

export default function SafeImage(props: ImageProps) {
  const [src, setSrc] = useState(props.src);
  return (
    <Image
      {...props}
      src={src}
      onError={() => setSrc('https://placehold.co/600x400/111827/FFF?text=Image')}
    />
  );
}

