import "@/styles/skleton.css"

const BannerSkl = ({h ,w="100%"}) => {
  return (
    <div className={`${h} ${w} bg-[var(--sklClr)]`}></div>
  )
}

export default BannerSkl