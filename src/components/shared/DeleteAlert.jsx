"use client";

import { AlertDialog, Button } from "@heroui/react";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
const DeleteAlert = ({ carId, carName }) => {
  const router = useRouter();

  const handleDeleteCar = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APEXDRIVE_SERVER_URL}/cars/${carId}`,
      {
        method: "DELETE",
      },
    );

    const data = await res.json();

    if (data.deletedCount > 0) {
      router.refresh();
      toast.success("Car listing deleted successfully!");
    } else {
      toast.error("Failed to delete the car.");
    }
  };
  return (
    <AlertDialog>
      <Button
        variant="danger"
        className="bg-red-500/5 border border-red-500/10 text-red-400 hover:bg-red-500/20 hover:border-red-500/30 py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
      >
        <FiTrash2 className="text-xs" /> Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete car permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p className="text-sm text-light/60 leading-relaxed">
                This will permanently delete <strong>{carName}</strong> and all
                of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDeleteCar} slot="close" variant="danger">
                Delete Car
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteAlert;
