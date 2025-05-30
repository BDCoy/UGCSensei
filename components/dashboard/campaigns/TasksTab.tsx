export function TasksTab() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Tasks</h2>
        <p className="text-sm text-muted-foreground">
          Manage and track the progress of your active video creation tasks
        </p>
      </div>

      <div className="text-center py-8 text-muted-foreground">
        No active tasks yet. Create a brief to get started.
      </div>
    </div>
  );
}