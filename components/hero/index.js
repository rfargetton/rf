import Image from 'next/image';

import Container from "../container";

export default function Hero({image, children}){
  return (
    <div className="pt-10 relative">
      <Container>
        <div className="relative flex justify-between items-center">
          <div className="h-full w-7/12 flex flex-col justify-center items-start">
            {children}
          </div>
          <div className="relative">
            <Image
              src={image}
              objectFit="contain"
              height={300}
              width={300}
              className="rounded-full"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}