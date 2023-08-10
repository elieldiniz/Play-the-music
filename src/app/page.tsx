
import { MdOutlineLibraryMusic,MdOutlinePlaylistAdd, MdOutlineReplay} from "react-icons/md"
import { FcRating, FcHeadset, FcMusic } from "react-icons/fc";
import { ImPlay2 } from "react-icons/im";
import { IoPlaySkipBackCircleSharp,IoPlaySkipForwardCircle } from "react-icons/io5";


import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-slate-950 p-6 border rounded-2xl">
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

        <main className="flex-1 border rounded-2xl">
          
          <div className="flex justify-around items-center my-20">
            <h1 className=" w-36 h-36 flex justify-around items-center">Recomendado</h1>
            <div className="">

              <Image
              className="min-w-full flex justify-around items-center rounded-2xl"
              src="/"
              width={50}
              height={50}
              alt="Home"
            />
              
            </div>
            <div className="border w-36 h-36 flex justify-around items-center rounded-2xl">Teto</div>
            <div className="border w-36 h-36 flex justify-around items-center rounded-2xl">Kayblack</div>
          </div>

          <div className="flex justify-around items-center my-20">
            <h1 className=" w-36 h-36 flex justify-around items-center">Faviritos</h1>
            <div className="border w-36 h-36 flex justify-around items-center rounded-2xl"></div>
            <div className="border w-36 h-36 flex justify-around items-center rounded-2xl">3</div>
            <div className="border w-36 h-36 flex justify-around items-center rounded-2xl">4</div>
          </div>

          <div className="flex justify-around items-center my-20">
            <h1 className=" w-36 h-36 flex justify-around items-center">podcast</h1>
            <div className="border w-36 h-36 flex justify-around items-center rounded-2xl">2</div>
            <div className="border w-36 h-36 flex justify-around items-center rounded-2xl">3</div>
            <div className="border w-36 h-36 flex justify-around items-center rounded-2xl">4</div>
          </div>
        </main>
      </div>
      <footer className="bg-gradient-to-r from-slate-800 to-green-950  p-10 flex justify-between border rounded-2xl">
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
