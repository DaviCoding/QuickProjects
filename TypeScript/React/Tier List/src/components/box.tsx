interface Props {
  name: string;
  bg: string;
  color: string;
  list: object;
}
export default function Card({ name, bg, color, list }: Props) {
  console.log(list);
  return (
    <div className="flex h-full w-full gap-3 p-2">
      <div
        className={`w-1/7 rounded-lg p-5 ${bg} flex items-center justify-center text-2xl font-Nunito font-extrabold text-${color}`}
      >
        {name}
      </div>

      {
        <div className="w-1/7">
          <img src={list.img} className="w-full h-full rounded-2xl" />
        </div>
      }
    </div>
  );
}
