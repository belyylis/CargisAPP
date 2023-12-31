import { Palette } from 'consts';
import { TextStyle } from 'react-native';

export const Header: TextStyle = {
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: 20,
  lineHeight: 24,
  color: Palette.BLACK,
};

export const Title: TextStyle = {
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: 16,
  lineHeight: 24,
  color: Palette.BLACK,
};

export const SubTitle: TextStyle = {
  fontFamily: 'Inter',
  fontWeight: '500',
  fontSize: 9,
  lineHeight: 16,
  color: Palette.HALF_BLACK,
};

export const Status: TextStyle = {
  fontFamily: 'Inter',
  fontWeight: '500',
  fontSize: 11,
  lineHeight: 16,
};

export const Button: TextStyle = {
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: 14,
  lineHeight: 24,
};

export const InfoSmall: TextStyle = {
  fontFamily: 'Inter',
  fontWeight: '400',
  fontSize: 11,
  lineHeight: 16,
  color: Palette.HALF_BLACK,
};

export const Usually: TextStyle = {
  fontFamily: 'Inter',
  fontWeight: '500',
  fontSize: 13,
  lineHeight: 24,
  color: Palette.BLACK,
};

export const Comment: TextStyle = {
  ...Usually,
  fontWeight: '400',
  color: Palette.BLUE_GRAY,
};

export const Adress: TextStyle = {
  fontFamily: 'Inter',
  fontWeight: '400',
  fontSize: 12,
  lineHeight: 16,
  color: Palette.BLACK,
};

export const TextButton: TextStyle = {
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: 13,
  lineHeight: 16,
};

export default {
  Header,
  Title,
  SubTitle,
  Status,
  InfoSmall,
  Button,
  Usually,
  Comment,
  Adress,
  TextButton,
};
