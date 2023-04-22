import { ImageStyled } from './styles';
import BackgroundLarge from '../../assets/background7.png';
import BackgroundSmall from '../../assets/background-small.png';

type BackgroundProps = {
  sizeBackground: 'small' | 'large';
};

export function BackgroundImage({ sizeBackground }: BackgroundProps) {
  const background = sizeBackground === 'large' ? BackgroundLarge : BackgroundSmall;

  return <ImageStyled src={background} width={undefined} height={undefined} alt="" />;
}
