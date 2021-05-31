import Link from "next/link" ;
import {Moon, Sun} from "react-feather";

import {useTheme} from "../../providers/theme" ;
import Container from "../container";
import settings from "../../config.json";
import Logo from "../logo";

export default function Header({ siteName }) {
  const {theme, toggleTheme} = useTheme();

  function handleThemeClick(){
    toggleTheme();
  }

  return (
    <header className="sticky top-0 z-50 py-4 px-0 bg-snow-dark dark:bg-slate-dark">
      <Container>
        <nav className="flex flex-col md:flex-row justify-between items-stretch md:items-center md:overflow-x-auto">
          <div className="flex flex-grow items-center justify-between mb-4 md:mb-0">
            <Link href="/">
              <a className="py-2 text-2xl">
                <Logo strokeWidth={3} />
              </a>
            </Link>
            <div className="flex ml-2 items-center">
              <Link href="/"><a className="md-hidden btn cta">Contact</a></Link>
              <button onClick={handleThemeClick} className="md-hidden btn p-1 m-2">
                {theme == "dark" 
                  ? <Sun /> 
                  : <Moon />
                }
              </button>  
            </div>
          </div>
          <div className="flex overflow-x-auto -m-2 md:m-0 font-bold">
            <Link href="/projets"><a className="m-2 flex-shrink-0">Projets</a></Link>
            <Link href="/blog"><a className="m-2 flex-shrink-0">Blog</a></Link>
            <Link href="/a-propos"><a className="m-2 flex-shrink-0">À Propos</a></Link>
          </div>
          <div className="flex items-center ml-2">
            <Link href="/"><a className="sm-hidden btn cta">Contact</a></Link>
            <button className="sm-hidden m-2 btn p-1" onClick={handleThemeClick}>
              {theme == "dark" ? <Sun /> : <Moon />}
            </button>
          </div>
        </nav>
      </Container>
    </header>
  )
}