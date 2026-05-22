"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const DeleteAlert = ({ carId, carName }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDeleteCar = async () => {
    setLoading(true);
    try {
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
    } catch (err) {
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertDialog>
      <Button
        variant="danger"
        whileTap={{ scale: 0.98 }}
        className="bg-red-500/5 border border-red-500/10 text-red-400 hover:bg-red-500/20 hover:border-red-500/30 py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
      >
        <FiTrash2 className="text-xs" /> Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AnimatePresence>
            <AlertDialog.Dialog className="sm:max-w-[400px] overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <AlertDialog.CloseTrigger />
                <AlertDialog.Header>
                  <AlertDialog.Icon status="danger" />
                  <AlertDialog.Heading>
                    Delete car permanently?
                  </AlertDialog.Heading>
                </AlertDialog.Header>
                <AlertDialog.Body>
                  <p className="text-sm text-light/60 leading-relaxed">
                    This will permanently delete <strong>{carName}</strong> and
                    all of its data. This action cannot be undone.
                  </p>
                </AlertDialog.Body>
                <AlertDialog.Footer>
                  <Button
                    slot="close"
                    variant="tertiary"
                    disabled={loading}
                    className="bg-white/[0.03] border border-white/[0.05] text-light hover:bg-white/[0.08] py-2.5 px-4 h-auto text-xs font-bold rounded-xl disabled:opacity-50"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleDeleteCar}
                    slot={loading ? undefined : "close"}
                    variant="danger"
                    disabled={loading}
                    whileTap={{ scale: 0.98 }}
                    className="bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/30 py-2.5 px-5 h-auto text-xs font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Deleting..." : "Delete Car"}
                  </Button>
                </AlertDialog.Footer>
              </motion.div>
            </AlertDialog.Dialog>
          </AnimatePresence>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteAlert;
