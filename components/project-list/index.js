import Image from "next/image";

import Container from "../container";
import Card from "../card";

export default function ProjectList({items, limit, children}){
  const filteredProjects = items.slice(0, limit);
  return (
    <section className="py-5 relative">
      <Container>
        <div className="py-5 w-full md:w-8/12 mx-auto text-center">
          {children}
        </div>
        <div className="py-5">
          <ul className="w-full md:w-10/12 mx-auto">
            {filteredProjects.map((project) => (
              <li key={project.id}>
                <div className="flex flex-row items-center">
                  <div className="w-8/12 z-10">
                    <h3>{project.title}</h3>
                    <Card>
                      <div className="p-6">
                        <p>{project.description}</p>
                      </div>
                    </Card>
                  </div>
                  <div className="relative w-56 h-56 -ml-8 flex-grow rounded-xl overflow-hidden">
                    <Image 
                      src={project.image}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}