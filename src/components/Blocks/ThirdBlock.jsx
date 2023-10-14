import { useTranslation } from 'react-i18next';
import { BottomAnimatedText } from '../UI/AnimatedText';

export const ThirdBlock = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full min-h-[60vh] mt-10" id="experience">
      <div className="items-center flex w-full">
        <div className="md:border-t-2 border-gray-300 w-full"></div>
        <span className="text-5xl px-4 font-semibold">{t('experience')}</span>
        <div className="md:border-t-2 border-gray-300 w-full"></div>
      </div>

      <div className="flex text-center mt-16 flex-col md:flex-row gap-10">
        <BottomAnimatedText duration={0.6} className={'w-full'}>
          <h2 className="text-7xl font-semibold gradient-primary">50+</h2>
          <p className="text-light-gray text-lg p-10 ">{t('experience1')}</p>
        </BottomAnimatedText>
        <BottomAnimatedText duration={0.6} className={'w-full'}>
          <h2 className="text-7xl font-semibold gradient-primary">120+</h2>
          <p className="text-light-gray text-lg p-10">{t('experience2')}</p>
        </BottomAnimatedText>
      </div>
    </section>
  );
};
