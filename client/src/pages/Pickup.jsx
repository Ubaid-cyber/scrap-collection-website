import { useState } from "react";

export default function Pickup() {

const [scrapType, setScrapType] = useState("");
const [weight, setWeight] = useState("");
const [address, setAddress] = useState("");
const [pickupDate, setPickupDate] = useState("");
const [success, setSuccess] = useState(false);

const handleSubmit = async (e) => {
e.preventDefault();


try {

  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/pickup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify({
      scrapType,
      weight,
      address,
      pickupDate
    })
  });

  await res.json();

  // success state
  setSuccess(true);

} catch (error) {
  console.log(error);
}


};

return (


<div className="min-h-screen flex items-center justify-center pt-28 pb-20 bg-[#0b1830] px-4">

  {/* SUCCESS SCREEN */}
  {success ? (

    <div className="bg-slate-800 p-10 rounded-2xl shadow-xl text-center border border-green-500 max-w-sm w-full">
      
      <h2 className="text-2xl font-bold text-green-400 mb-4">
        ✔ Pickup Request Sent
      </h2>

      <p className="text-slate-300 text-sm">
        Your pickup request has been received.
        Our team will contact you shortly.
      </p>

    </div>

  ) : (

    /* FORM CARD */

    <div className="w-full max-w-[360px] bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-slate-700">

      <h2 className="text-center text-2xl font-bold text-white mb-1">
        Schedule Pickup
      </h2>

      <p className="text-center text-slate-400 text-xs mb-6">
        Submit your scrap pickup request
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">

        <select
          className="w-full p-3 text-sm rounded-xl bg-slate-700 text-white outline-none focus:ring-2 focus:ring-green-500"
          value={scrapType}
          onChange={(e) => setScrapType(e.target.value)}
          required
        >
          <option value="" disabled>Select Scrap Type</option>
          <option value="Iron">Iron (लोहा)</option>
          <option value="Copper">Copper (तांबा)</option>
          <option value="Aluminum">Aluminum (एल्युमिनियम)</option>
          <option value="E-Waste">E-Waste (इलेक्ट्रॉनिक्स)</option>
          <option value="Paper">Paper/Cardboard</option>
          <option value="Plastic">Plastic</option>
          <option value="Mixed">Mixed Scrap</option>
        </select>

        <input
          type="number"
          placeholder="Estimated Weight (kg)"
          className="w-full p-3 text-sm rounded-xl bg-slate-700 text-white outline-none focus:ring-2 focus:ring-green-500"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Complete Pickup Address"
          className="w-full p-3 text-sm rounded-xl bg-slate-700 text-white outline-none focus:ring-2 focus:ring-green-500"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <input
          type="date"
          className="w-full p-3 text-sm rounded-xl bg-slate-700 text-white outline-none focus:ring-2 focus:ring-green-500"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white py-3 text-sm rounded-xl font-bold"
        >
          Send Pickup Request
        </button>

      </form>

    </div>

  )}

</div>


);
}
