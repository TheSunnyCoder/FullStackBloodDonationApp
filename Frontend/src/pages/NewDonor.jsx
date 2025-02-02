const NewDonor = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="m-[20px] p-[20px] h-[80vh] w-[450px]">
        <h2 className="font-semibold ">New Donor</h2>
        <div className="flex flex-col my-[12px]">
          <label className="font-semibold" htmlFor="">
            Name
          </label>
          <input
            type="text"
            placeholder="sunny raj"
            className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
          />

          <label className="font-semibold" htmlFor="">
            Address
          </label>
          <input
            type="text"
            placeholder="123 Downtown"
            className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
          />

          <label className="font-semibold" htmlFor="">
            Telephone
          </label>
          <input
            type="text"
            placeholder="(+91) 6209501759"
            className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
          />

          <label htmlFor="" className="text-[18px] mt-[10px] font-semibold">
            Blood Group
          </label>
          <select className="border-[#555] border-2 border-solid p-[10px] w-[300px]">
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

          <label className="font-semibold" htmlFor="">
            Email
          </label>
          <input
            type="text"
            placeholder="abc@Example.com"
            className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
          />
        </div>
      </div>
      <div className="m-[20px] p-[20px] h-[80vh] w-[450px]">
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="">
            Weight
          </label>
          <input
            type="number"
            placeholder="60kg"
            className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
          />

          <label className="font-semibold" htmlFor="">
            Date
          </label>
          <input
            type="date"
            placeholder="22/01/2004"
            className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
          />

          <label htmlFor="" className="text-[18px] mt-[10px] font-semibold">
            Do you have any disease?
          </label>
          <textarea
            type="text"
            className="border-[#555] border-2 border-solid p-[10px] w-[300px]"
            placeholder="N/A"
          />
          <button className="bg-[#444] cursor-pointer text-white p-[10px] w-[300px] my-[10px]">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewDonor;
