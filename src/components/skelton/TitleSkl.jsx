import "@/styles/skleton.css";

const TitleSkl = ({className}) => {
  return (
    <div className={`w-[100px] h-[20px] rounded-md bg-[var(--sklClr)] ${ className }`}></div>
  )
}

export default TitleSkl;