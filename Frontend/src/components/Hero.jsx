

const Hero = () => {
  return (
    <div className="bg-[url('/hero1.jpg')] bg-no-repeat bg-cover bg-center h-[85vh] px-[200px]">
        <div className="flex flex-col text-white w-[50%] pt-[10%]">
            <span className="text-[30px] mt-3">Donate Blood, Save Life!</span>
            <h1 className="text-[38px] mt-3">Your Blood Can Bring Smile In Other Person Life</h1>

            <div className="flex items-center mt-[20px]">
                <button className="bg-red-500 p-[10px] w-[200px] text-white cursor-pointer mr-9">Donate Now</button>
                <button className=" bg-slate-800 p-[10px] w-[200px] text-white cursor-pointer mr-9">Call : (+91) 6209501759 </button>
            </div>
        </div>

    </div>
  )
}

export default Hero