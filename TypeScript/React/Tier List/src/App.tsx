import Box from "./components/box";
import { FaLink } from "react-icons/fa";

export default function App() {
  return (
    <>
      <div className="bg-stone-300 h-screen flex items-center justify-center gap-15 p-15 font-bold">
        <div className="flex flex-col w-3/4 h-full">
          <h1 className="font-Monomakh text-2xl p-2 text-neutral-600">
            Tier List
          </h1>
          <div className="w-full h-full rounded-3xl bg-stone-900 shadow-2xl">
            <div className="flex flex-col justify-center p-2 h-full">
              <Box bg="bg-red-500" name="S" color="white" />
              <Box bg="bg-orange-400" name="A" color="black" />
              <Box bg="bg-yellow-300" name="B" color="black" />
              <Box bg="bg-green-500" name="C" color="white" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/4 h-full">
          <h1 className="font-Monomakh text-2xl p-2 text-neutral-600">List</h1>
          <div className="w-full h-full rounded-3xl bg-stone-900 shadow-2xl relative">
            <div className="absolute bottom-0 p-4 w-full flex gap-5">
              <input
                type="text"
                className="border border-neutral-600 rounded-sm px-3 py-2 text-white w-3/4"
                placeholder="URL da imagem"
              />
              <button className="border border-neutral-600 rounded-sm px-3 py-2 text-white cursor-pointer w-1/4">
                Adicionar
              </button>
            </div>
          </div>
        </div>

        <footer className="fixed bottom-5 left-15 text-neutral-400">
          <a
            href="https://github.com/DaviCoding"
            className="flex items-center gap-2"
          >
            GitHub <FaLink />
          </a>
        </footer>
      </div>
    </>
  );
}
