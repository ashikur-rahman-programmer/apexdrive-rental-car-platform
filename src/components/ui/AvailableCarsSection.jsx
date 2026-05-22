import CarCard from "./CarCard";

const AvailableCarsSection = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APEXDRIVE_SERVER_URL}/cars`,
    { next: { revalidate: 30 } },
  );
  const cars = await res.json();

  const availableCars = cars
    .filter((car) => car.availability === true)
    .slice(0, 6);

  return (
    <section className="w-full bg-primary py-16 px-4 sm:px-6">
      <div className="text-center flex flex-col items-center gap-2 mb-12">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold bg-gold/5 px-4 py-1.5 rounded-full border border-gold/10 select-none">
          Available Cars
        </span>
        <h2 className="font-app text-3xl sm:text-4xl font-bold tracking-tight text-light uppercase mt-3 leading-tight">
          Explore Our Premium Fleet <br />
          <span className="bg-gradient-to-r from-gold via-[#ffe2a4] to-gold bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,189,55,0.15)]">
            Ready To Drive
          </span>
        </h2>
        <p className="max-w-xl text-sm text-light/60 mt-2 font-normal leading-relaxed">
          Choose from our highly-maintained ultimate fleet architecture. Secured
          with seamless booking validation, high performance, and absolute
          luxury.
        </p>
      </div>

      {availableCars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-7xl mx-auto">
          {availableCars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center py-12 text-center">
          <p className="text-sm text-light/40 tracking-wide uppercase">
            No premium vehicles are currently available.
          </p>
        </div>
      )}
    </section>
  );
};

export default AvailableCarsSection;
