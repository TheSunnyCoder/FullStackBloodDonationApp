
const Contact = () => {
  return (
    <div className="flex items-center justify-center h-auto my-[100px]">
        <div className="flex flex-col bg-gray-200 w-[50%] h-auto p-[50px]">
            <span className="text-[20px] my-[20px]">Do you want to donate blood? fill in the inforamtion</span>
            <label htmlFor="" className="text-[18px] mt-[10px] font-semibold">Name</label>
            <input type="text" className="w-[350px] p-[15px]" placeholder="Sunny Raj" />
            <label htmlFor="" className="text-[18px] mt-[10px] font-semibold">Telephone</label>
            <input type="number" className="w-[350px] p-[15px]" placeholder="6209504589"/>
            <label htmlFor="" className="text-[18px] mt-[10px] font-semibold">Email</label>
            <input type="email" className="w-[350px] p-[15px]" placeholder="sunraj850@example.com" required />
            <label htmlFor="" className="text-[18px] mt-[10px] font-semibold">Address</label>
            <input type="text" className="w-[350px] p-[15px]" placeholder=" 123 Town Street" />
            <label htmlFor="" className="text-[18px] mt-[10px] font-semibold">Weight</label>
            <input type="number" className="w-[350px] p-[15px]" placeholder="65kg" />
            <label htmlFor="" className="text-[18px] mt-[10px] font-semibold">Blood Group</label>
            <select name="" id="" className="w-[350px] p-[15px]">
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
            </select>
            <label htmlFor="" className="text-[18px] mt-[10px] font-semibold">Age</label>
            <input type="text" className="w-[350px] p-[15px]" placeholder="20" />
            <label htmlFor="" className="text-[18px] mt-[10px] font-semibold">Do you have any disease?</label>
            <textarea type="text" className="w-[350px] p-[15px]" placeholder="N/A" />

                <button className="bg-red-500 p-3 mt-3 w-[350px] cursor-pointer text-white">Submit</button>





        </div>
    </div>
  )
}

export default Contact