import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import type { ServerStatus } from "@shared/schema";

export default function ServerStatus() {
  const { data: status, isLoading } = useQuery<ServerStatus>({
    queryKey: ["/api/server-status"],
  });

  if (isLoading) {
    return (
      <Card className="w-full max-w-sm mx-auto">
        <CardContent className="p-6">
          <div className="animate-pulse space-y-2">
            <div className="h-4 bg-primary/20 rounded w-3/4" />
            <div className="h-4 bg-primary/20 rounded w-1/2" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-sm mx-auto"
    >
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Server Status</h3>
            <p className="text-sm text-muted-foreground mb-4">
              IP: {status?.ip}
            </p>
            <div className="flex justify-between items-center">
              <span>Players Online:</span>
              <span className="text-primary font-medium">
                {status?.players}/{status?.maxPlayers}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
