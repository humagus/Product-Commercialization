"use client";

import { Icon } from "@iconify/react";

// Icon wrapper for consistent styling
interface IconProps {
  icon: string;
  className?: string;
  style?: React.CSSProperties;
}

export function FancyIcon({ icon, className = "w-6 h-6", style }: IconProps) {
  return <Icon icon={icon} className={className} style={style} />;
}

// 3D & Fancy Icons from various Iconify sets
// Using: fluent-emoji, noto, twemoji, streamline-emojis, icon-park, flat-color-icons

export const Icons = {
  // Hero Section
  sparkles: "noto:sparkles",
  zap: "noto:high-voltage",
  target: "noto:bullseye",
  chevronDown: "solar:alt-arrow-down-bold",
  
  // Statistics
  alertTriangle: "noto:warning",
  trendingDown: "noto:chart-decreasing",
  checkCircle: "noto:check-mark-button",
  dollarSign: "noto:money-bag",
  
  // What is MVP
  lightbulb: "noto:light-bulb",
  wrench: "noto:wrench",
  rocket: "noto:rocket",
  trophy: "noto:trophy",
  arrowLeft: "solar:arrow-left-bold",
  checkCircle2: "noto:check-mark-button",
  
  // Lean Cycle
  hammer: "noto:hammer",
  barChart: "noto:bar-chart",
  graduationCap: "noto:graduation-cap",
  rotateCcw: "solar:refresh-bold",
  
  // MVP Types
  wand2: "noto:magic-wand",
  userCheck: "noto:bust-in-silhouette",
  puzzle: "noto:puzzle-piece",
  layout: "noto:desktop-computer",
  users: "noto:busts-in-silhouette",
  shield: "noto:shield",
  webhook: "noto:gear",
  chevronLeft: "solar:alt-arrow-left-bold",
  chevronRight: "solar:alt-arrow-right-bold",
  
  // Case Studies
  mapPin: "noto:round-pushpin",
  calendar: "noto:calendar",
  trendingUp: "noto:chart-increasing",
  
  // Timeline
  messageCircle: "noto:speech-balloon",
  megaphone: "noto:loudspeaker",
  database: "noto:card-file-box",
  gitBranch: "noto:herb",
  
  // Tools
  fileSpreadsheet: "noto:bar-chart",
  formInput: "noto:clipboard",
  flame: "noto:fire",
  creditCard: "noto:credit-card",
  listChecks: "noto:memo",
  lineChart: "noto:chart-increasing",
  externalLink: "solar:arrow-right-up-bold",
  
  // Metrics
  info: "noto:information",
  
  // Quiz
  partyPopper: "noto:party-popper",
  
  // Checklist
  check: "solar:check-circle-bold",
  
  // Snapp Case Study
  smartphone: "noto:mobile-phone",
  
  // Navigation
  menu: "solar:hamburger-menu-bold",
  x: "solar:close-circle-bold",
  
  // Footer
  heart: "noto:red-heart",
};

// Icon components for each section
export function SparklesIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.sparkles} className={className} />;
}

export function ZapIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.zap} className={className} />;
}

export function TargetIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.target} className={className} />;
}

export function ChevronDownIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.chevronDown} className={className} />;
}

export function AlertTriangleIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.alertTriangle} className={className} />;
}

export function TrendingDownIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.trendingDown} className={className} />;
}

export function CheckCircleIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.checkCircle} className={className} />;
}

export function DollarSignIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.dollarSign} className={className} />;
}

export function LightbulbIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.lightbulb} className={className} />;
}

export function WrenchIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.wrench} className={className} />;
}

export function RocketIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.rocket} className={className} />;
}

export function TrophyIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.trophy} className={className} />;
}

export function ArrowLeftIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.arrowLeft} className={className} />;
}

export function CheckCircle2Icon({ className }: { className?: string }) {
  return <Icon icon={Icons.checkCircle2} className={className} />;
}

export function HammerIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.hammer} className={className} />;
}

export function BarChartIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.barChart} className={className} />;
}

export function GraduationCapIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.graduationCap} className={className} />;
}

export function RotateCcwIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.rotateCcw} className={className} />;
}

export function Wand2Icon({ className }: { className?: string }) {
  return <Icon icon={Icons.wand2} className={className} />;
}

export function UserCheckIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.userCheck} className={className} />;
}

export function PuzzleIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.puzzle} className={className} />;
}

export function LayoutIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.layout} className={className} />;
}

export function UsersIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.users} className={className} />;
}

export function ShieldIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.shield} className={className} />;
}

export function WebhookIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.webhook} className={className} />;
}

export function ChevronLeftIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.chevronLeft} className={className} />;
}

export function ChevronRightIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.chevronRight} className={className} />;
}

export function MapPinIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.mapPin} className={className} />;
}

export function CalendarIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.calendar} className={className} />;
}

export function TrendingUpIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.trendingUp} className={className} />;
}

export function MessageCircleIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.messageCircle} className={className} />;
}

export function MegaphoneIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.megaphone} className={className} />;
}

export function DatabaseIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.database} className={className} />;
}

export function GitBranchIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.gitBranch} className={className} />;
}

export function FileSpreadsheetIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.fileSpreadsheet} className={className} />;
}

export function FormInputIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.formInput} className={className} />;
}

export function FlameIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.flame} className={className} />;
}

export function CreditCardIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.creditCard} className={className} />;
}

export function ListChecksIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.listChecks} className={className} />;
}

export function LineChartIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.lineChart} className={className} />;
}

export function ExternalLinkIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.externalLink} className={className} />;
}

export function InfoIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.info} className={className} />;
}

export function PartyPopperIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.partyPopper} className={className} />;
}

export function CheckIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.check} className={className} />;
}

export function SmartphoneIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.smartphone} className={className} />;
}

export function MenuIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.menu} className={className} />;
}

export function XIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.x} className={className} />;
}

export function HeartIcon({ className }: { className?: string }) {
  return <Icon icon={Icons.heart} className={className} />;
}

// Export Icon component directly for custom usage
export { Icon };
