import { useState } from "react";
// import CustomAlert from './CustomAlert';

const SolarCalculator = () => {
  const [selectedOption, setSelectedOption] = useState(
    "Monthly Electricity Bill"
  );
  const [roofArea, setRoofArea] = useState("");
  const [roofAreaPercentage, setRoofAreaPercentage] = useState("");
  const [consumption, setConsumption] = useState("");
  const [budget, setBudget] = useState("");
  const [state, setState] = useState("");
  const [customerType, setCustomerType] = useState("");
  const [electricityCost, setElectricityCost] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setRoofArea("");
    setRoofAreaPercentage("");
    setConsumption("");
    setBudget("");
  };

  // const [showAlert, setShowAlert] = useState(false);

  // const handleSubmit = () => {
  //   setShowAlert(true); // Show the custom alert
  // };

  // const closeAlert = () => {
  //   setShowAlert(false); // Close the alert
  // };

  return (
    <div className="border h-full border-green-600 p-8 bg-white rounded-3xl shadow-lg m-2">
      <h2 className="text-gray-500 text-3xl py-3 mb-10">
        Lorem ipsum dolor sit amet, consectetur <br /> adipisicing odit
        exercitationem commodi{" "}
        <span className="text-black">elit. Aliquid.</span>
      </h2>

      {/* Selection Buttons */}
      <div className="mb-8 flex justify-between">
        <button
          type="button"
          onClick={() => handleOptionChange("Monthly Electricity Bill")}
          className={`px-8 py-2 rounded-full ${
            selectedOption === "Monthly Electricity Bill"
              ? "bg-green-500 text-white"
              : "border border-black text-black"
          } hover:bg-green-500 hover:border-green-500 hover:text-white transition`}
        >
          Monthly Electricity Bill
        </button>
        <button
          type="button"
          onClick={() =>
            handleOptionChange("Monthly Electricity Consumption Units")
          }
          className={`px-8 py-2 rounded-full ${
            selectedOption === "Monthly Electricity Consumption Units"
              ? "bg-green-500 text-white"
              : "border border-black text-black"
          } hover:bg-green-500 hover:border-green-500 hover:text-white transition`}
        >
          Monthly Electricity Consumption Units
        </button>
        <button
          type="button"
          onClick={() => handleOptionChange("Total Area of the Rooftop")}
          className={`px-8 py-2 rounded-full ${
            selectedOption === "Total Area of the Rooftop"
              ? "bg-green-500 text-white"
              : "border border-black text-black"
          } hover:bg-green-500 hover:border-green-500 hover:text-white transition`}
        >
          Total Area of the Rooftop
        </button>
      </div>

      <form autoComplete="off" id="frm">
        {/* Unique Inputs Based on Selection */}
        {selectedOption === "Total Area of the Rooftop" && (
          <div className="mb-8 flex justify-between gap-5">
            <input
              type="text"
              value={roofArea}
              onChange={(e) => setRoofArea(e.target.value)}
              className="rounded-full py-2 px-4 w-1/2 bg-[#E6E6E6] text-gray-600 appearance-none border-none focus:outline-none"
              placeholder="Enter area in sq. m. or sq. ft."
            />
            <input
              type="text"
              value={roofAreaPercentage}
              onChange={(e) => setRoofAreaPercentage(e.target.value)}
              className="rounded-full py-2 px-4 w-1/2 bg-[#E6E6E6] text-gray-600 appearance-none border-none focus:outline-none"
              placeholder="Enter percentage"
            />
          </div>
        )}

        {selectedOption === "Monthly Electricity Consumption Units" && (
          <div className="mb-8 flex gap-4">
            <input
              type="text"
              value={consumption}
              onChange={(e) => setConsumption(e.target.value)}
              className="rounded-full py-2 px-4 w-1/2 bg-[#E6E6E6] text-gray-600 appearance-none border-none focus:outline-none"
              placeholder="Enter units"
            />

            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="rounded-full py-2 px-4 w-1/2 bg-[#E6E6E6] text-gray-600 appearance-none border-none focus:outline-none"
            >
              <option
                value=""
                disabled
                className="text-gray-400 rounded-b-full"
              >
                Select State
              </option>
              <option value="andaman">Andaman and Nicobar Islands</option>
              <option value="andhra">Andhra Pradesh</option>
              <option value="arunachal">Arunachal Pradesh</option>
              <option value="assam">Assam</option>
              <option value="bihar">Bihar</option>
              <option value="chandigarh">Chandigarh</option>
              <option value="chhattisgarh">Chhattisgarh</option>
              <option value="dadra_nagar_haveli">
                Dadra and Nagar Haveli and Daman and Diu
              </option>
              <option value="daman">Daman and Diu</option>
              <option value="delhi">Delhi</option>
              <option value="goa">Goa</option>
              <option value="gujarat">Gujarat</option>
              <option value="haryana">Haryana</option>
              <option value="himachal">Himachal Pradesh</option>
              <option value="jharkhand">Jharkhand</option>
              <option value="karnataka">Karnataka</option>
              <option value="kerala">Kerala</option>
              <option value="lakshadweep">Lakshadweep</option>
              <option value="madhya_pradesh">Madhya Pradesh</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="manipur">Manipur</option>
              <option value="meghalaya">Meghalaya</option>
              <option value="mizoram">Mizoram</option>
              <option value="nagaland">Nagaland</option>
              <option value="odisha">Odisha</option>
              <option value="punjab">Punjab</option>
              <option value="rajasthan">Rajasthan</option>
              <option value="sikkim">Sikkim</option>
              <option value="tamil_nadu">Tamil Nadu</option>
              <option value="telangana">Telangana</option>
              <option value="tripura">Tripura</option>
              <option value="uttar_pradesh">Uttar Pradesh</option>
              <option value="uttarakhand">Uttarakhand</option>
              <option value="west_bengal">West Bengal</option>

              {/* Add other options as needed */}
            </select>
          </div>
        )}

        {selectedOption === "Monthly Electricity Bill" && (
          <div className="mb-8 flex gap-4">
            <input
              type="text"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="rounded-full py-2 px-4 w-1/2 bg-[#E6E6E6] text-black"
              placeholder="Enter budget in Rs."
            />

            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="rounded-full py-2 px-4 w-1/2 bg-[#E6E6E6] text-gray-600 appearance-none border-none focus:outline-none"
            >
              <option
                value=""
                disabled
                className="text-gray-400 rounded-b-full"
              >
                Select State
              </option>
              <option value="andaman">Andaman and Nicobar Islands</option>
              <option value="andhra">Andhra Pradesh</option>
              <option value="arunachal">Arunachal Pradesh</option>
              <option value="assam">Assam</option>
              <option value="bihar">Bihar</option>
              <option value="chandigarh">Chandigarh</option>
              <option value="chhattisgarh">Chhattisgarh</option>
              <option value="dadra_nagar_haveli">
                Dadra and Nagar Haveli and Daman and Diu
              </option>
              <option value="daman">Daman and Diu</option>
              <option value="delhi">Delhi</option>
              <option value="goa">Goa</option>
              <option value="gujarat">Gujarat</option>
              <option value="haryana">Haryana</option>
              <option value="himachal">Himachal Pradesh</option>
              <option value="jharkhand">Jharkhand</option>
              <option value="karnataka">Karnataka</option>
              <option value="kerala">Kerala</option>
              <option value="lakshadweep">Lakshadweep</option>
              <option value="madhya_pradesh">Madhya Pradesh</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="manipur">Manipur</option>
              <option value="meghalaya">Meghalaya</option>
              <option value="mizoram">Mizoram</option>
              <option value="nagaland">Nagaland</option>
              <option value="odisha">Odisha</option>
              <option value="punjab">Punjab</option>
              <option value="rajasthan">Rajasthan</option>
              <option value="sikkim">Sikkim</option>
              <option value="tamil_nadu">Tamil Nadu</option>
              <option value="telangana">Telangana</option>
              <option value="tripura">Tripura</option>
              <option value="uttar_pradesh">Uttar Pradesh</option>
              <option value="uttarakhand">Uttarakhand</option>
              <option value="west_bengal">West Bengal</option>

              {/* Add other options as needed */}
            </select>
          </div>
        )}

        {/* Common Inputs */}
        <div className="flex justify-between mb-8 items-center">
          <label className="text-gray-700 mr-4 font-semibold text-xl">
            Customer Category
          </label>
          <button
            type="button"
            onClick={() => setCustomerType("Residential")}
            className={`px-16 py-[10px] rounded-full ${
              customerType === "Residential"
                ? "bg-green-500 text-white"
                : "border border-black text-black"
            } hover:bg-green-500 hover:text-white transition`}
          >
            Residential
          </button>

          <button
            type="button"
            onClick={() => setCustomerType("Commercial")}
            className={`px-16 py-[10px] rounded-full ${
              customerType === "Commercial"
                ? "bg-green-500 text-white"
                : "border border-black text-black"
            } hover:bg-green-500 hover:text-white transition`}
          >
            Commercial
          </button>

          <button
            type="button"
            onClick={() => setCustomerType("Industrial")}
            className={`px-16 py-[10px] rounded-full ${
              customerType === "Industrial"
                ? "bg-green-500 text-white"
                : "border border-black text-black"
            } hover:bg-green-500 hover:text-white transition`}
          >
            Industrial
          </button>
        </div>

        <div className="flex items-center w-full">
          <label className="text-gray-700 font-semibold text-xl mr-4">
            Average Electricity Unit Cost is
          </label>
          <div className="flex items-center w-3/5 space-x-2">
            <input
              type="text"
              value={electricityCost}
              onChange={(e) => setElectricityCost(e.target.value)}
              className="rounded-full py-2 px-4 w-2/3 bg-[#E6E6E6] text-black border border-gray-300 appearance-none border-none focus:outline-none mr-2"
              placeholder="Enter cost in Rs."
            />
            <span className="text-gray-700 font-semibold text-lg mr-4">
              Rs. / kWh
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => alert("your calculated value")}
          className="bg-green-500 text-white border-black hover:text-slate-700 px-8 py-2 rounded-full hover:bg-green-400 transition duration-200 mt-8"
        >
          Calculate
        </button>
      </form>
    </div>
  );
};

export default SolarCalculator;
