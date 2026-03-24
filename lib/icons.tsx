"use client";

import {
  Truck,
  Stethoscope,
  ScanBarcode,
  Smartphone,
  Calendar,
  FileText,
  MessageSquare,
  Shield,
  Wifi,
  WifiOff,
  BarChart3,
  Users,
  Clock,
  CheckCircle2,
  Layers,
  Server,
  Database,
  type LucideIcon,
} from "lucide-react";

// Map des icones par nom
const iconMap: Record<string, LucideIcon> = {
  Truck,
  Stethoscope,
  ScanBarcode,
  Smartphone,
  Calendar,
  FileText,
  MessageSquare,
  Shield,
  Wifi,
  WifiOff,
  BarChart3,
  Users,
  Clock,
  CheckCircle2,
  Layers,
  Server,
  Database,
};

// Helper pour obtenir une icone par son nom
export function getIcon(name: string): LucideIcon {
  return iconMap[name] || Layers;
}

// Composant wrapper pour afficher une icone par son nom
interface DynamicIconProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className }: DynamicIconProps) {
  const IconComponent = getIcon(name);
  return <IconComponent className={className} />;
}
