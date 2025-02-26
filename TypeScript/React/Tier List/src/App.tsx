import Box from "./components/box";
import { FaLink } from "react-icons/fa";
import { Component } from "react";

function randomId() {
  return Math.random();
}

export default class App extends Component {
  state = {
    position: {
      1: {
        text: "S",
        color: "white",
        bg: "bg-red-500",
      },
      2: {
        text: "A",
        color: "black",
        bg: "bg-orange-400",
      },
      3: {
        text: "B",
        color: "black",
        bg: "bg-yellow-300",
      },
      4: {
        text: "C",
        color: "white",
        bg: "bg-green-500",
      },
    },
    tier: [
      {
        img: "https://zaffari.vtexassets.com/arquivos/ids/264064/1104354-00.jpg?v=638684899394070000",
        position: 1,
        id: randomId(),
      },
      {
        img: "https://zaffari.vtexassets.com/arquivos/ids/264064/1104354-00.jpg?v=638684899394070000",
        position: 2,
        id: randomId(),
      },
      {
        img: "https://zaffari.vtexassets.com/arquivos/ids/264064/1104354-00.jpg?v=638684899394070000",
        position: 3,
        id: randomId(),
      },
      {
        img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1672985941583/fd4917de-77b9-4493-a940-a4446f8943c0.png?auto=compress,format&format=webp",
        position: 4,
        id: randomId(),
      },
    ],
  };
  render() {
    const { tier, position } = this.state;
    return (
      <>
        <div className="bg-stone-300 h-screen flex items-center justify-center gap-15 p-15 font-bold">
          <div className="flex flex-col w-3/4 h-full">
            <h1 className="font-Monomakh text-2xl text-neutral-600">
              Tier List
            </h1>
            <div className="w-full h-full rounded-3xl bg-stone-900 shadow-2xl p-2">
              <div className="flex flex-col justify-center h-full">
                {tier.map((element) => (
                  <Box
                    bg={position[element.position].bg}
                    name={position[element.position].text}
                    color={position[element.position].color}
                    list={element}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/4 h-full">
            <h1 className="font-Monomakh text-2xl p-2 text-neutral-600">
              List
            </h1>
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
}
