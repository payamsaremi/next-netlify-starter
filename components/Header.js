export default function Header({ title, color }) {
  return <h1 className={`text-4xl font-bold bg-${color}-200 cursor-pointer hover:bg-${color}-300 0 p-5 rounded-lg`}>{title}{color}</h1>
}
