import { useState } from 'react';

const SolarCalculator = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [roofArea, setRoofArea] = useState('');
  const [roofAreaPercentage, setRoofAreaPercentage] = useState('');
  const [consumption, setConsumption] = useState('');
  const [budget, setBudget] = useState('');
  const [state, setState] = useState('');
  const [customerType, setCustomerType] = useState('');
  const [electricityCost, setElectricityCost] = useState('8');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setRoofArea('');
    setRoofAreaPercentage('');
    setConsumption('');
    setBudget('');
  };

  const handleSubmit = () => {
    // Add calculation logic here
    alert('Calculating...'); // Placeholder for actual calculation
  };

  return (
    <div className="border border-green-600 p-5 bg-yellow-300 rounded-md shadow-lg m-2">
      <form autoComplete="off" id="frm">
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2 text-green-800">1. Select any one option</label>
          <div className="flex space-x-4 mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox_fill_three"
                className="form-checkbox h-6 w-6 text-green-600 rounded-full"
                onChange={() => handleOptionChange('Monthly Electricity Bill')}
              />
              <label htmlFor="checkbox_fill_three" className="cursor-pointer text-gray-700 ml-2">
                Monthly Electricity Bill
              </label>
            </div>
            <p className="mx-2 text-green-800">(OR)</p>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox_fill_two"
                className="form-checkbox h-6 w-6 text-green-600 rounded-full"
                onChange={() => handleOptionChange('Monthly Electricity Consumption Units')}
              />
              <label htmlFor="checkbox_fill_two" className="cursor-pointer text-gray-700 ml-2">
                Monthly Electricity Consumption Units
              </label>
            </div>
            <p className="mx-2 text-green-800">(OR)</p>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox_fill_one"
                className="form-checkbox h-6 w-6 text-green-600 rounded-full"
                onChange={() => handleOptionChange('Total Area of the Rooftop')}
              />
              <label htmlFor="checkbox_fill_one" className="cursor-pointer text-gray-700 ml-2">
                Total Area of the Rooftop
              </label>
            </div>
          </div>
        </div>

        {selectedOption === 'Total Area of the Rooftop' && (
          <div className="mb-4">
            <label className="block text-gray-700">Rooftop Area:</label>
            <input
              type="text"
              value={roofArea}
              onChange={(e) => setRoofArea(e.target.value)}
              className="border border-green-500 rounded-md p-2 w-full"
              placeholder="Enter area in sq. m. or sq. ft."
            />
            <label className="block mt-2 text-gray-700">% of Roof Top Area available:</label>
            <input
              type="text"
              value={roofAreaPercentage}
              onChange={(e) => setRoofAreaPercentage(e.target.value)}
              className="border border-green-500 rounded-md p-2 w-full"
              placeholder="Enter percentage"
            />
          </div>
        )}

        {selectedOption === 'Monthly Electricity Consumption Units' && (
          <div className="mb-4">
            <label className="block text-gray-700">Monthly Electricity Consumption:</label>
            <input
              type="text"
              value={consumption}
              onChange={(e) => setConsumption(e.target.value)}
              className="border border-green-500 rounded-md p-2 w-full"
              placeholder="Enter units"
            />
          </div>
        )}

        {selectedOption === 'Monthly Electricity Bill' && (
          <div className="mb-4">
            <label className="block text-gray-700">Budget:</label>
            <input
              type="text"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="border border-green-500 rounded-md p-2 w-full"
              placeholder="Enter budget in Rs."
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-lg font-bold mb-2 text-green-800">2. Select State and Customer Category</label>
          <div className="flex space-x-4">
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="border border-green-500 rounded-md p-2 w-1/2" // Set to 50% width
            >
              <option value="">Select State</option>
              <option value="35">ANDAMAN and NICOBAR ISLANDS</option>
              <option value="28">ANDHRA PRADESH</option>
              <option value="12">ARUNACHAL PRADESH</option>
              <option value="18">ASSAM</option>
              <option value="10">BIHAR</option>
              <option value="4">CHANDIGARH</option>
              <option value="22">CHHATTISGARH</option>
              <option value="30">GOA</option>
              <option value="24">GUJARAT</option>
              <option value="6">HARYANA</option>
              <option value="2">HIMACHAL PRADESH</option>
              <option value="1">JAMMU and KASHMIR</option>
              <option value="20">JHARKHAND</option>
              <option value="29">KARNATAKA</option>
              <option value="32">KERALA</option>
              <option value="37">LADAKH</option>
              <option value="31">LAKSHADWEEP</option>
              <option value="23">MADHYA PRADESH</option>
              <option value="27">MAHARASHTRA</option>
              <option value="14">MANIPUR</option>
              <option value="17">MEGHALAYA</option>
              <option value="15">MIZORAM</option>
              <option value="13">NAGALAND</option>
              <option value="7">NCT OF DELHI</option>
              <option value="21">ORISSA</option>
              <option value="34">PUDUCHERRY</option>
              <option value="3">PUNJAB</option>
              <option value="8">RAJASTHAN</option>
              <option value="11">SIKKIM</option>
              <option value="33">TAMIL NADU</option>
              <option value="36">TELANGANA</option>
              <option value="38">THE DADRA AND NAGAR HAVELI AND DAMAN AND DIU</option>
              <option value="16">TRIPURA</option>
              <option value="9">UTTAR PRADESH</option>
              <option value="5">UTTARAKHAND</option>
              <option value="19">WEST BENGAL</option>
            </select>

            <select
              value={customerType}
              onChange={(e) => setCustomerType(e.target.value)}
              className="border border-green-500 rounded-md p-2 w-1/2" // Set to 50% width
            >
              <option value="">Select Category of Customer</option>
              <option value="2">Residential</option>
              <option value="3">Industrial</option>
              <option value="1">Commercial</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-lg font-bold mb-2 text-green-800">3. What is your average Electricity Unit Cost? :</label>
          <div className="flex items-center">
            <input
              type="text"
              value={electricityCost}
              onChange={(e) => setElectricityCost(e.target.value)}
              className="border border-green-500 rounded-md p-2 w-1/4"
              placeholder="Rs. / kWh"
            />
            <span className="ml-2 text-black">Rs. / kWh</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200"
        >
          Calculate
        </button>
      </form>
    </div>
  );
};

export default SolarCalculator;
