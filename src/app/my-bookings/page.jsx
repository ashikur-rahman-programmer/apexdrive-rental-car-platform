export const dynamic = "force-dynamic";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCalendar,
  FiMapPin,
  FiUserCheck,
} from "react-icons/fi";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const { token } = await auth.api.getToken({ headers: await headers() });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APEXDRIVE_SERVER_URL}/bookings/${user.id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
    },
  );
  const data = await res.json();

  const bookings = Array.isArray(data) ? data : [];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 text-light min-h-screen dark bg-primary">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.05] pb-8 mb-10">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wider text-gold">
            My Booked Cars
          </h1>
          <p className="text-xs text-light/40 mt-1.5">
            Review and manage your premium luxury car reservation history.
          </p>
        </div>
        <div className="bg-white/[0.02] border border-white/[0.05] px-4 py-2.5 rounded-xl self-start md:self-auto">
          <span className="text-xs text-light/50">Total Booked cars:</span>{" "}
          <span className="text-gold font-bold font-mono text-sm ml-1">
            {bookings.length}
          </span>
        </div>
      </div>

      <div aria-label="Booked Cars Grid">
        {bookings.length === 0 ? (
          <div className="text-center py-20 bg-secondary/30 border border-white/[0.03] rounded-3xl">
            <p className="text-light/30 text-sm">
              You haven't reserved any luxury vehicles yet.
            </p>
            <Link
              href="/cars"
              className="inline-flex items-center gap-2 text-gold hover:underline text-xs font-bold uppercase tracking-widest mt-4"
            >
              Explore Cars <FiArrowRight />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.map((booking) => {
              const formattedDate = new Date(
                booking.bookingDate,
              ).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              });

              return (
                <div
                  key={booking._id}
                  className="bg-secondary border border-white/[0.06] rounded-2xl p-5 flex flex-col gap-4 hover:border-gold/20 hover:shadow-[0_10px_30px_rgba(212,175,55,0.02)] transition-all group duration-300"
                >
                  <div className="relative h-44 w-full rounded-xl overflow-hidden bg-primary/40 shrink-0">
                    <Image
                      src={booking.imageUrl}
                      alt={booking.name}
                      width={500}
                      height={500}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-secondary/80 backdrop-blur-md border border-white/[0.08] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-gold">
                      Confirmed
                    </div>
                  </div>

                  <div className="flex-grow flex flex-col justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-light group-hover:text-gold transition-colors line-clamp-1">
                        {booking.name}
                      </h3>
                      <div className="flex items-center gap-1 text-light/40 text-xs mt-1">
                        <FiMapPin className="text-gold/60 shrink-0" />
                        <span className="line-clamp-1">{booking.location}</span>
                      </div>
                    </div>

                    <div className="bg-primary/30 border border-white/[0.03] p-3 rounded-xl space-y-2">
                      <div className="flex items-center justify-between text-xs text-light/60">
                        <span className="flex items-center gap-1.5 text-light/40">
                          <FiCalendar className="text-gold" /> Booking Date:
                        </span>
                        <span className="font-semibold text-gold hover:underline transition-all font-mono cursor-pointer">
                          {formattedDate}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-light/50 border-t border-b border-white/[0.04] py-2">
                      <FiUserCheck
                        className={
                          booking.driverNeeded ? "text-gold" : "text-light/30"
                        }
                      />
                      <span>Driver Option:</span>
                      <span
                        className={`ml-auto font-medium ${booking.driverNeeded ? "text-gold" : "text-light/70"}`}
                      >
                        {booking.driverNeeded
                          ? "Yes need a driver"
                          : "Self-Drive"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-1 pt-1">
                      <span className="text-xs uppercase tracking-wider text-light/40 font-semibold">
                        Total Price:
                      </span>
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-xs font-bold text-gold">$</span>
                        <span className="text-xl font-extrabold font-mono text-gold tracking-tight">
                          {booking.dailyRentPrice}
                        </span>
                        <span className="text-[10px] text-light/40 font-medium ml-0.5">
                          / day
                        </span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/my-bookings/${booking._id}`}
                    className="w-full bg-white/[0.02] border border-white/[0.06] hover:bg-gold/5 hover:border-gold/30 hover:text-gold text-center py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer mt-1"
                  >
                    View Details <FiArrowRight className="text-xs" />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyBookingsPage;
