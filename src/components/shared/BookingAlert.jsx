"use client";
import { useSession } from "@/lib/auth-client";
import {
  AlertDialog,
  Button,
  Input,
  Label,
  Surface,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { FiCalendar, FiFileText, FiUser } from "react-icons/fi";
import { toast } from "react-toastify";

const BookingAlert = ({ car }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;
  const { _id, name, price, imageUrl, dailyRentPrice, location } = car;

  const handleBooking = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const allFormData = Object.fromEntries(formData.entries());

    const bookingData = {
      driverNeeded: allFormData.driverNeeded === "Yes",
      specialNote: allFormData.specialNote,
      bookingDate: new Date().toISOString(),

      _id,
      name,
      price,
      imageUrl,
      dailyRentPrice,
      location,

      userName: user?.name,
      userImage: user?.image,
      userEmail: user?.email,
      userId: user?.id,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APEXDRIVE_SERVER_URL}/bookings`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      },
    );

    const data = await res.json();

    if (data.insertedId) {
      e.target.reset();
      router.refresh();
      router.push("/my-bookings");
      toast.success("Booking added successfully!");
    }
  };

  return (
    <AlertDialog>
      <Button className="w-full bg-gold text-primary font-bold uppercase tracking-wider py-3.5 h-auto rounded-xl hover:bg-gold/90 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(212,175,55,0.15)]">
        <FiCalendar className="text-base" /> Book Now
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="success" />
              <AlertDialog.Heading>Confirm Your Booking</AlertDialog.Heading>
              <p className="mt-1 text-xs text-light/40">
                You are booking{" "}
                <span className="text-gold font-semibold">{name}</span> at{" "}
                <span className="text-gold font-mono">
                  ${dailyRentPrice}/day
                </span>
                .
              </p>
            </AlertDialog.Header>
            <form
              onSubmit={handleBooking}
              className="flex flex-col overflow-hidden mt-4 flex-grow"
            >
              <AlertDialog.Body>
                <Surface
                  variant="default"
                  className="bg-transparent border-0 p-0"
                >
                  <div className="flex flex-col gap-4">
                    {/* ১. Driver Needed (Dropdown) */}
                    <TextField
                      className="w-full"
                      name="driverNeeded"
                      variant="secondary"
                    >
                      <Label className="text-light/70 text-xs font-semibold mb-1 flex items-center gap-1">
                        <FiUser className="text-gold" /> Personal Driver Needed?
                      </Label>
                      <select
                        name="driverNeeded"
                        className="w-full bg-primary/50 text-light border border-white/[0.08] focus:border-gold h-10 px-3 rounded-xl text-sm outline-none cursor-pointer"
                        required
                      >
                        <option value="No" className="bg-secondary text-light">
                          No, I will drive
                        </option>
                        <option value="Yes" className="bg-secondary text-light">
                          Yes, need a driver
                        </option>
                      </select>
                    </TextField>

                    {/* ২. Special Note */}
                    <TextField
                      className="w-full"
                      name="specialNote"
                      variant="secondary"
                    >
                      <Label className="text-light/70 text-xs font-semibold mb-1 flex items-center gap-1">
                        <FiFileText className="text-gold" /> Special Notes /
                        Requests
                      </Label>
                      <Input
                        name="specialNote"
                        className="bg-primary/50 text-light border-white/[0.08] focus:border-gold rounded-xl py-2.5"
                        placeholder="Say something..."
                      />
                    </TextField>
                  </div>
                </Surface>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button
                  slot="close"
                  variant="tertiary"
                  className="bg-white/[0.03] border border-white/[0.05] text-light hover:bg-white/[0.08] py-2.5 px-4 h-auto text-xs font-bold rounded-xl"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  slot="close"
                  className="bg-gold text-primary font-bold uppercase tracking-wider py-2.5 px-5 h-auto text-xs rounded-xl"
                >
                  Confirm & Book
                </Button>
              </AlertDialog.Footer>
            </form>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default BookingAlert;
