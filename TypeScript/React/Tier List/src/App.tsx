import { FaLink } from "react-icons/fa";
import { Component } from "react";

function randomId() {
  return Math.random();
}

export default class App extends Component {
  state = {
    blocks: [
      {
        text: "S",
        position: 1,
        background: "bg-red-500",
        textColor: "text-white",
      },
      {
        text: "A",
        position: 2,
        background: "bg-orange-500",
        textColor: "text-black",
      },
      {
        text: "B",
        position: 3,
        background: "bg-yellow-500",
        textColor: "text-black",
      },
      {
        text: "C",
        position: 4,
        background: "bg-green-500",
        textColor: "text-white",
      },
    ],
    tier: [
      {
        img: "https://ibassets.com.br/ib.item.image.large/l-7ef5ff63c7fb4dd289ea2ff38fc08833.jpeg",
        position: 3,
        id: randomId(),
      },
      {
        img: "https://www.rickdoces.com.br/estatico/rickdoces/images/produto/f5fdf19be35a458f36bfff35b4bfef52.png",
        position: 4,
        id: randomId(),
      },
      {
        img: "https://zaffari.vtexassets.com/arquivos/ids/264064/1104354-00.jpg?v=638684899394070000",
        position: 2,
        id: randomId(),
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIQDtFRjHJ4ISVe57fbma4_JtjDl-i0S0Lg&s",
        position: 1,
        id: randomId(),
      },
    ],
  };
  render() {
    const { tier, blocks } = this.state;
    return (
      <>
        <div className="bg-stone-300 h-screen flex items-center justify-center gap-15 p-15 font-bold">
          <div className="flex flex-col w-3/4 h-full">
            <h1 className="font-Monomakh text-2xl text-neutral-600">
              Tier List
            </h1>
            <div className="w-full h-full rounded-3xl bg-stone-900 shadow-2xl p-4 flex flex-col justify-evenly gap-4">
              {blocks.map((block) => (
                <div className={`w-full h-1/4 flex gap-4`}>
                  <div
                    className={`w-1/7 h-full rounded-3xl flex items-center justify-center ${block.background} ${block.textColor}`}
                  >
                    {block.text}
                  </div>
                  <div className="w-1/7 h-full flex gap-4">
                    {tier.map((list) =>
                      block.position == list.position ? (
                        <img
                          src={list.img}
                          className="rounded-3xl w-full  bg-center"
                        />
                      ) : null
                    )}
                  </div>
                </div>
              ))}
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
