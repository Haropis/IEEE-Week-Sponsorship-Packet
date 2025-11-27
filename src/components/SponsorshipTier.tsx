import { Check } from "lucide-react";
import { Card } from "./ui/card";

interface SponsorshipTierProps {
  name: string;
  price: string;
  color: string;
  features: string[];
  featured?: boolean;
}

export function SponsorshipTier({ name, price, color, features, featured }: SponsorshipTierProps) {
  return (
    <Card className={`relative overflow-hidden ${featured ? 'ring-2 ring-offset-2' : ''}`} style={{ borderTopColor: color, borderTopWidth: '4px' }}>
      {featured && (
        <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 text-sm">
          Most Popular
        </div>
      )}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="uppercase tracking-wide" style={{ color }}>{name}</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl">{price}</span>
          </div>
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 mt-0.5 shrink-0" style={{ color }} />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
