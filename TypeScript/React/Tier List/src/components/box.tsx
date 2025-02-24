export default function Card(props: any) {
  var bg = props.bg;
  var name = props.name;
  var color = props.color;
  return (
    <div
      className={`w-1/8 h-1/4 m-2 rounded-lg p-5 ${bg} flex items-center justify-center text-2xl font-Nunito font-extrabold text-${color}`}
    >
      {name}
    </div>
  );
}
