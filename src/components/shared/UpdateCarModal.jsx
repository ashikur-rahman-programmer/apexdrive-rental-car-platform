"use client";

import {
  Modal,
  ModalBackdrop,
  ModalContainer,
  ModalDialog,
  ModalCloseTrigger,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalIcon,
  ModalHeading,
  Button,
  TextField,
  Label,
  Input,
  Surface,
} from "@heroui/react";
import {
  FiEdit2,
  FiDollarSign,
  FiLayers,
  FiImage,
  FiMapPin,
  FiCheckCircle,
  FiFileText,
} from "react-icons/fi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const UpdateCarModal = ({ car }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleUpdateCar = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const updateData = Object.fromEntries(formData.entries());

    updateData.dailyRentPrice = Number(updateData.dailyRentPrice);
    updateData.availability = updateData.availability === "true";

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_APEXDRIVE_SERVER_URL}/cars/${car._id}`,
        {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(updateData),
        },
      );

      const data = await res.json();

      if (data.modifiedCount > 0) {
        toast.success("Car details updated successfully!");
        router.refresh();
      } else {
        toast.error("No changes made or update failed.");
      }
    } catch (err) {
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal>
      <Button
        variant="secondary"
        whileTap={{ scale: 0.98 }}
        className="flex-1 bg-white/[0.03] border border-white/[0.06] text-light/80 hover:text-gold hover:border-gold/30 hover:bg-gold/5 text-center py-2.5 h-auto rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
      >
        <FiEdit2 className="text-xs" /> Update
      </Button>

      <ModalBackdrop>
        <ModalContainer placement="center">
          <AnimatePresence>
            <ModalDialog className="w-[95%] sm:max-w-md bg-secondary border border-white/[0.08] text-light rounded-2xl dark text-left flex flex-col max-h-[85vh] overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col max-h-[85vh]"
              >
                <ModalCloseTrigger className="text-light/50 hover:text-light cursor-pointer" />

                <ModalHeader className="border-b border-white/[0.05] pb-4 flex flex-col items-start shrink-0">
                  <ModalIcon className="bg-gold/10 text-gold border border-gold/20">
                    <FiEdit2 className="size-5" />
                  </ModalIcon>
                  <ModalHeading className="text-light uppercase tracking-wide font-bold mt-2">
                    Update Listing
                  </ModalHeading>
                  <p className="mt-1.5 text-xs text-light/40 text-left">
                    Modify fields for{" "}
                    <span className="text-gold">{car.name}</span>.
                  </p>
                </ModalHeader>

                <form
                  onSubmit={handleUpdateCar}
                  className="flex flex-col overflow-hidden flex-grow"
                >
                  <ModalBody className="p-5 overflow-y-auto flex-grow space-y-4 pr-3 custom-scrollbar">
                    <Surface
                      variant="default"
                      className="bg-transparent border-0 p-0"
                    >
                      <div className="flex flex-col gap-4">
                        {/* Price per Day */}
                        <TextField
                          className="w-full"
                          name="dailyRentPrice"
                          variant="secondary"
                          defaultValue={car.dailyRentPrice?.toString()}
                        >
                          <Label className="text-light/70 text-xs font-semibold mb-1 flex items-center gap-1">
                            <FiDollarSign className="text-gold" /> Price per Day
                            ($)
                          </Label>
                          <Input
                            name="dailyRentPrice"
                            className="bg-primary/50 text-light border-white/[0.08] focus:border-gold rounded-xl py-2.5 transition-colors"
                            required
                            type="number"
                          />
                        </TextField>

                        {/* Car Type */}
                        <TextField
                          className="w-full"
                          name="carType"
                          variant="secondary"
                          defaultValue={car.carType}
                        >
                          <Label className="text-light/70 text-xs font-semibold mb-1 flex items-center gap-1">
                            <FiLayers className="text-gold" /> Car Type
                          </Label>
                          <Input
                            name="carType"
                            className="bg-primary/50 text-light border-white/[0.08] focus:border-gold rounded-xl py-2.5 transition-colors"
                            required
                          />
                        </TextField>

                        {/* Image URL */}
                        <TextField
                          className="w-full"
                          name="image"
                          variant="secondary"
                          defaultValue={car.imageUrl || car.image}
                        >
                          <Label className="text-light/70 text-xs font-semibold mb-1 flex items-center gap-1">
                            <FiImage className="text-gold" /> Image URL
                          </Label>
                          <Input
                            name="image"
                            className="bg-primary/50 text-light border-white/[0.08] focus:border-gold rounded-xl py-2.5 transition-colors"
                            required
                            type="url"
                          />
                        </TextField>

                        {/* Location */}
                        <TextField
                          className="w-full"
                          name="location"
                          variant="secondary"
                          defaultValue={car.location}
                        >
                          <Label className="text-light/70 text-xs font-semibold mb-1 flex items-center gap-1">
                            <FiMapPin className="text-gold" /> Location
                          </Label>
                          <Input
                            name="location"
                            className="bg-primary/50 text-light border-white/[0.08] focus:border-gold rounded-xl py-2.5 transition-colors"
                            required
                          />
                        </TextField>

                        {/* Availability Status */}
                        <TextField
                          className="w-full"
                          name="availability"
                          variant="secondary"
                        >
                          <Label className="text-light/70 text-xs font-semibold mb-1 flex items-center gap-1">
                            <FiCheckCircle className="text-gold" /> Availability
                            Status
                          </Label>
                          <select
                            name="availability"
                            defaultValue={car.availability?.toString()}
                            className="w-full bg-primary/50 text-light border border-white/[0.08] focus:border-gold h-11 px-3 rounded-xl text-sm outline-none cursor-pointer transition-colors"
                            required
                          >
                            <option
                              value="true"
                              className="bg-secondary text-light"
                            >
                              Available
                            </option>
                            <option
                              value="false"
                              className="bg-secondary text-light"
                            >
                              Booked
                            </option>
                          </select>
                        </TextField>

                        {/* Description */}
                        <TextField
                          className="w-full"
                          name="description"
                          variant="secondary"
                          defaultValue={car.description}
                        >
                          <Label className="text-light/70 text-xs font-semibold mb-1 flex items-center gap-1">
                            <FiFileText className="text-gold" /> Description
                          </Label>
                          <Input
                            name="description"
                            className="bg-primary/50 text-light border-white/[0.08] focus:border-gold rounded-xl py-2.5 transition-colors"
                            required
                          />
                        </TextField>
                      </div>
                    </Surface>
                  </ModalBody>

                  <ModalFooter className="border-t border-white/[0.05] p-4 flex gap-2 justify-end shrink-0 bg-secondary rounded-b-2xl">
                    <Button
                      slot="close"
                      variant="secondary"
                      disabled={loading}
                      className="bg-white/[0.03] border border-white/[0.05] text-light hover:bg-white/[0.08] py-2.5 px-4 h-auto text-xs font-bold rounded-xl disabled:opacity-50"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      slot={loading ? undefined : "close"}
                      disabled={loading}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gold text-primary font-bold uppercase tracking-wider py-2.5 px-5 h-auto text-xs rounded-xl hover:bg-[#ffe2a4] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Saving..." : "Save Changes"}
                    </Button>
                  </ModalFooter>
                </form>
              </motion.div>
            </ModalDialog>
          </AnimatePresence>
        </ModalContainer>
      </ModalBackdrop>
    </Modal>
  );
};

export default UpdateCarModal;
