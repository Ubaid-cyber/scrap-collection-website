export default function Pricing() {
  const data = [
    { item: "PET Bottles", grade: "Clean", price: "₹28 / kg" },
    { item: "HDPE Plastic", grade: "Mixed", price: "₹45 / kg" },
    { item: "PVC Plastic", grade: "Industrial", price: "₹35 / kg" },
    { item: "Cardboard", grade: "Dry", price: "₹10 / kg" },
    { item: "Newspaper", grade: "Bundle", price: "₹14 / kg" },
    { item: "Aluminium", grade: "Utensils", price: "₹180 / kg" },
    { item: "Copper", grade: "Wire", price: "₹620 / kg" },
    { item: "Iron", grade: "Scrap", price: "₹32 / kg" },
  ];

  return (
    <section className="relative overflow-hidden rounded-2xl border border-black/5 bg-white p-10 shadow-xl">
      {/* Glow */}
      <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Scrap Pricing
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Live-style rates for common recyclable materials in India.  
          Transparent, fair, and city-adjusted.
        </p>

        {/* Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Household", d: "Paper, plastic, bottles" },
            { t: "Industrial", d: "Bulk plastic & metal" },
            { t: "E-Waste", d: "Boards, wires, chips" },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-xl border border-slate-200 p-6 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-slate-900">{c.t}</h3>
              <p className="mt-1 text-sm text-slate-600">{c.d}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="mt-10 overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Material</th>
                <th className="px-4 py-3 font-semibold">Grade</th>
                <th className="px-4 py-3 font-semibold">Price</th>
              </tr>
            </thead>
            <tbody>
              {data.map((r, i) => (
                <tr
                  key={i}
                  className="border-t border-slate-200 hover:bg-slate-50"
                >
                  <td className="px-4 py-3 font-medium text-slate-900">
                    {r.item}
                  </td>
                  <td className="px-4 py-3 text-slate-600">{r.grade}</td>
                  <td className="px-4 py-3 font-semibold text-indigo-600">
                    {r.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Want live city-wise rates?
            </h3>
            <p className="text-sm text-slate-600">
              We adjust prices based on location & volume.
            </p>
          </div>
          <button className="relative overflow-hidden rounded-lg bg-slate-900 px-6 py-3 text-white group">
            <span className="relative z-10">Request Quote</span>
            <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-transform duration-300 group-hover:translate-y-0" />
          </button>
        </div>
      </div>
    </section>
  );
}
