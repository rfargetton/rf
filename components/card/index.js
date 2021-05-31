export default function Card({children}){
  return (
    <div className="shadow-2xl rounded-xl bg-snow-light dark:bg-slate-light overflow-hidden h-full">
      {children}
    </div>
  )
}