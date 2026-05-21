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

const UpdateCarModal = ({ car }) => {
  const router = useRouter();

  const handleUpdateCar = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updateData = Object.fromEntries(formData.entries());

    updateData.dailyRentPrice = Number(updateData.dailyRentPrice);
    updateData.availability = updateData.availability === "true";

    const res = await fetch(`http://localhost:8000/cars/${car._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateData),
    });

    const data = await res.json();

    if (data.modifiedCount > 0) {
      toast.success("Car details updated successfully!");
      router.refresh();
    } else {
      toast.error("No changes made or update failed.");
    }
  };

  return (
    <Modal>
      <Button
        variant="secondary"
        className="flex-1 bg-white/[0.03] border border-white/[0.06] text-light/80 hover:text-gold hover:border-gold/30 hover:bg-gold/5 text-center py-2.5 h-auto rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
      >
        <FiEdit2 className="text-xs" /> Update
      </Button>

      <ModalBackdrop>
        <ModalContainer placement="center">
          <ModalDialog className="w-[95%] sm:max-w-md bg-secondary border border-white/[0.08] text-light rounded-2xl dark text-left flex flex-col max-h-[85vh]">
            <ModalCloseTrigger className="text-light/50 hover:text-light cursor-pointer" />

            <ModalHeader className="border-b border-white/[0.05] pb-4 flex flex-col items-start shrink-0">
              <ModalIcon className="bg-gold/10 text-gold border border-gold/20">
                <FiEdit2 className="size-5" />
              </ModalIcon>
              <ModalHeading className="text-light uppercase tracking-wide font-bold mt-2">
                Update Listing
              </ModalHeading>
              <p className="mt-1.5 text-xs text-light/40 text-left ">
                Modify fields for <span className="text-gold ">{car.name}</span>
                .
              </p>
            </ModalHeader>

            <form
              onSubmit={handleUpdateCar}
              className="flex flex-col overflow-hidden flex-grow"
            >
              <ModalBody className="p-5 overflow-y-auto flex-grow space-y-4 pr-3">
                <Surface
                  variant="default"
                  className="bg-transparent border-0 p-0"
                >
                  <div className="flex flex-col gap-4">
                    <TextField
                      className="w-full"
                      name="dailyRentPrice"
                      variant="secondary"
                      defaultValue={car.dailyRentPrice?.toString()}
                    >
                      <Label className="text-light/70 text-xs font-semibold mb-1 flex items-center gap-1">
                        <FiDollarSign className="text-gold" /> Price per Day ($)
                      </Label>
                      <Input
                        name="dailyRentPrice"
                        className="bg-primary/50 text-light border-white/[0.08] focus:border-gold rounded-xl"
                        required
                        type="number"
                      />
                    </TextField>

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
                        className="bg-primary/50 text-light border-white/[0.08] focus:border-gold rounded-xl"
                        required
                      />
                    </TextField>

                    {/* 🎯 ৩. Image: defaultValue এখন TextField-এ */}
                    <TextField
                      className="w-full"
                      name="image"
                      variant="secondary"
                      defaultValue={car.imageUrl}
                    >
                      <Label className="text-light/70 text-xs font-semibold mb-1 flex items-center gap-1">
                        <FiImage className="text-gold" /> Image URL
                      </Label>
                      <Input
                        name="image"
                        className="bg-primary/50 text-light border-white/[0.08] focus:border-gold rounded-xl"
                        required
                        type="url"
                      />
                    </TextField>

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
                        className="bg-primary/50 text-light border-white/[0.08] focus:border-gold rounded-xl"
                        required
                      />
                    </TextField>

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
                        className="w-full bg-primary/50 text-light border border-white/[0.08] focus:border-gold h-10 px-3 rounded-xl text-sm outline-none cursor-pointer"
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
                        className="bg-primary/50 text-light border-white/[0.08] focus:border-gold rounded-xl"
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
                  className="bg-white/[0.03] border border-white/[0.05] text-light hover:bg-white/[0.08] py-2.5 px-4 h-auto text-xs"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  slot="close"
                  className="bg-gold text-primary font-bold uppercase tracking-wider py-2.5 px-5 h-auto text-xs"
                >
                  Save Changes
                </Button>
              </ModalFooter>
            </form>
          </ModalDialog>
        </ModalContainer>
      </ModalBackdrop>
    </Modal>
  );
};

export default UpdateCarModal;
