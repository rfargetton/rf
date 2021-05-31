import Image from 'next/image';

import Container from "../container";

export default function PostHeader({image, children}){
  return (
    <header className="py-10">
      <Container>
        <div className="flex flex-col md:flex-row relative justify-between items-center">
          <div className="h-full w-full md:w-7/12 flex flex-col justify-center items-start">
            {children}
          </div>
          <div className="h-48 md:h-72 w-1/2 md:w-4/12 relative overflow-hidden">
            <Image
              src={image}
              layout="fill"
              objectFit="contain" 
            />
          </div>
        </div>
      </Container>
    </header>
  )
}