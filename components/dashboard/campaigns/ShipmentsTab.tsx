export function ShipmentsTab() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Shipments</h2>
        <p className="text-sm text-muted-foreground">
          Track product shipments to and from creators
        </p>
      </div>

      <div className="text-center py-8 text-muted-foreground">
        No shipments to track yet.
      </div>
    </div>
  );
}