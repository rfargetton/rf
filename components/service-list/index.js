import Container from "../container";
import Card from "../card";
import {Seo, Formation, Dev, Webdesign} from "../icons";

export default function ServiceList ({items, children}) {
  const [webdesign, dev, seo, formation] = items;

  return (
    <section className="py-5 relative">
      <Container>
        <div className="py-5 w-full md:w-8/12 mx-auto text-center">
          {children}
        </div>
        <div className="py-5">
          <ul className="flex flex-row flex-wrap -m-3">
            <li key={webdesign.title} className="w-full md:w-1/2 p-3">
              <Card>
                <div className="p-6">
                  <Webdesign strokeWidth={3} />
                  <h3>{webdesign.title}</h3>
                  <p>{webdesign.description}</p>
                </div>
              </Card>
            </li>
            <li key={dev.title} className="w-full md:w-1/2 p-3">
              <Card>
                <div className="p-6">
                  <Dev strokeWidth={3} />
                  <h3>{dev.title}</h3>
                  <p>{dev.description}</p>
                </div>
              </Card>
            </li>
            <li key={seo.title} className="w-full md:w-1/2 p-3">
              <Card>
                <div className="p-6">
                  <Seo strokeWidth={3} />
                  <h3>{seo.title}</h3>
                  <p>{seo.description}</p>
                </div>
              </Card>
            </li>
            <li key={formation.title} className="w-full md:w-1/2 p-3">
              <Card>
                <div className="p-6">
                  <Formation strokeWidth={3} />
                  <h3>{formation.title}</h3>
                  <p>{formation.description}</p>
                </div>
              </Card>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}