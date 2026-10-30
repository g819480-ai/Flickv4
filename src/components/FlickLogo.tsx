import { Text } from 'react-native';

export const FLICK_LOGO_VB_W = 320;
export const FLICK_LOGO_VB_H = 48;

interface FlickLogoProps {
  width?: number;
  height?: number;
}

export const FlickLogo = ({ width = 140, height = 32 }: FlickLogoProps) => (
  <Text
    numberOfLines={1}
    style={{
      width,
      height,
      fontSize: Math.min(width, height) * 0.72,
      fontWeight: '800',
      letterSpacing: 2,
      color: '#E50914',
      textAlign: 'left',
      includeFontPadding: false,
    }}
  >
    NOCTURA
  </Text>
);
