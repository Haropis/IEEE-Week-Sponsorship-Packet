interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border text-center space-y-2">
      {icon && <div className="flex justify-center text-blue-600">{icon}</div>}
      <div className="text-3xl">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
