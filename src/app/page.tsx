
import { MdOutlineLibraryMusic,MdOutlinePlaylistAdd, MdOutlineReplay} from "react-icons/md"
import { FcRating, FcHeadset, FcMusic } from "react-icons/fc";
import { ImPlay2 } from "react-icons/im";
import { IoPlaySkipBackCircleSharp,IoPlaySkipForwardCircle } from "react-icons/io5";


import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-slate-950 p-6">
          <nav className=" border-b-8 rounded-2xl drop-shadow-2xl">
            <a href="" className="flex my-2 item-center gap-2 text-xs font-semibold">
            <Image
            src="/home.svg"
            width={50}
            height={50}
            alt="Home"
            />
              inicio
            </a>
            <a href="" className="flex my-2 item-center gap-2">
            <Image
            src="/search.svg"
            width={50}
            height={50}
            alt="Home"
            />
              Buscar
            </a>
            <a href="" className="flex my-2 item-center gap-2">
            <Image
            src="/library.svg"
            width={50}
            height={50}
            alt="Home"
            />
              Biblioteca
            </a>
          </nav>
          <ul>
            <li className="my-2 flex gap-2 cursor-pointer ">
            <FcHeadset/>
            <p>Playlist</p>
            </li>
            
            <li className="my-2 flex gap-2 cursor-pointer ">
            <FcRating/>
            <p>Favoritos</p>
            </li>

            <li className="my-2 flex gap-2 cursor-pointer ">
            <FcMusic/>
            <p>Mais Ouvidas</p>
            </li>
          </ul>
        </aside>

        <main className="flex-1 p-6">
          <div className=" flex justify-center mt-6 ">
              <h1 className="mt-5 bg-gradient-to-r from-slate-800 to-green-950 border-t border-slate-700">As Musicas Mais Tocadas do momento</h1>
          </div>
        </main>
      </div>
      <footer className="bg-gradient-to-r from-slate-800 to-green-950 border-t border-slate-700 p-10 flex justify-between">
        <div className="flex gap-4">
        <Image
            src="/itunes.png"
            width={50}
            height={50}
            alt="Home"
            />
            <div>
            <h1>Dont Surrender</h1>
            <h2 className="text-xs text-inherit">Egzond,EMM</h2>
            </div>
            
            
            

        </div>

        <div>
          <div>
            <ul className="flex gap-10">
              <li>
                <MdOutlineReplay/>
              </li>
              <li>
                <IoPlaySkipBackCircleSharp/>
              </li>
              <li className="">
                <ImPlay2/>
              </li>
              <li>
                <IoPlaySkipForwardCircle/>
              </li>
              <li>
                <MdOutlinePlaylistAdd/>
              </li>
            </ul>
          </div>
          <div>
            msc2
          </div>
        </div>

        <div>
          outros
        </div>
      </footer>
    </div>
  )
}
