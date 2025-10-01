const BackButton = () => {
  return (
    <div
      onClick={() => window.history.back()}
      className="hidden sm:flex pr-3 sm:pr-5 py-1 text-blue-800 font-semibold transition cursor-pointer items-center gap-1 sm:gap-2 relative z-10 group text-xs sm:text-base"
    >
      <span className="inline-flex gap-0.5 animate-arrowSlide">
        <span className="inline-block transform transition-transform group-hover:translate-x-1">&lt;</span>
        <span className="inline-block transform transition-transform group-hover:translate-x-1 animation-delay-75">&lt;</span>
      </span>
      <span>Back</span>
    </div>
  )
}

export default BackButton;
