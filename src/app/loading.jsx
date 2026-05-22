import { Spinner } from "@heroui/react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-primary flex flex-col justify-center items-center gap-4">
      <Spinner size="lg" color="warning" label="Loading ApexDrive Fleet..." />
    </div>
  );
};

export default Loading;
