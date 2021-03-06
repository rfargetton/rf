export default function Logo({ strokeWidth }){
  return (
    <svg width="44" height="34" viewBox="0 0 44 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27 12L18 12C14.6863 12 12 14.6863 12 18V26C12 29.3137 9.31371 32 6 32H2M2 12L9 12" className="stroke-current text-sky dark:text-ice" strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M42 2H38C34.6863 2 32 4.68629 32 8V26C32 29.3137 29.3137 32 26 32H15M32 12H42M35 32H42" className="stroke-current text-purple" strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  )
}