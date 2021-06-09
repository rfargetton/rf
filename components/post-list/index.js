import Link from "next/link";
import {ArrowRight} from "react-feather";
import Image from "next/image";
import {useRouter} from "next/router";

import Date from "../date";
import Container from "../container";
import Card from "../card";


const strings = {
  date: {
    en: "Published on",
    fr: "Publié le"
  },
  link: {
    en: "Read more",
    fr: "Lire"
  }
}

export default function PostList({ items, limit, children }) {
  const filteredPosts = items.slice(0, limit);
  const {locale} = useRouter();

  return (
    <section className="py-5 relative">
      <Container>
        {children &&
          <div className="py-5 w-full md:w-8/12 mx-auto text-center">
            {children}
          </div>
        }
        <div className="py-5">
          <ul className="flex flex-row flex-wrap -m-3">
            {filteredPosts.map((post) => (
              <li key={post.id} className="w-full md:w-1/2 p-3 transform hover:scale-105 transition">
                <Card>
                  <div className="flex flex-col h-full">
                    <div className="relative m-6 h-56">
                      <Image 
                        src={post.featured_image}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <p>{strings.date[locale]} <Date dateString={post.date} /></p>
                      <h3 className="mt-2">{post.title}</h3>
                      <Link href={`/blog/${post.id}`} >
                        <a className="mt-auto">
                          <div className="flex justify-between text-sky dark:text-ice items-center mt-4">
                            <div>{strings.link[locale]}</div>
                            <div>
                              <ArrowRight />
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </Card>          
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}