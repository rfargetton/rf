import Image from 'next/image';

import Container from "../container";

export default function Hero({image, children}){
  return (
    <div className="pt-14 relative">
      <Container>
        <div className="relative flex justify-between items-center">
          <div className="h-full w-8/12 flex flex-col justify-center items-start">
            {children}
          </div>
          <div className="relative">
            <Image
              src={image}
              objectFit="contain"
              height={268}
              width={268}
              className="rounded-full"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}