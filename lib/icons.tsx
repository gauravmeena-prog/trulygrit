import { 
  Lightbulb, 
  Target, 
  Rocket, 
  Users, 
  TrendingUp, 
  Zap,
  Search,
  Megaphone,
  Code,
  Camera,
  Award,
  BarChart3,
  Mail,
  Palette,
  Globe,
  MessageCircle,
  LucideIcon
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  'lightbulb': Lightbulb,
  'target': Target,
  'rocket': Rocket,
  'users': Users,
  'trending-up': TrendingUp,
  'zap': Zap,
  'search': Search,
  'megaphone': Megaphone,
  'code': Code,
  'camera': Camera,
  'award': Award,
  'bar-chart-3': BarChart3,
  'mail': Mail,
  'palette': Palette,
  'globe': Globe,
  'message-circle': MessageCircle,
}

export function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || Lightbulb
}
