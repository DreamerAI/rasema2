import { useTranslation } from 'react-i18next';
import { AnimatedText, BottomAnimatedText } from '../UI/AnimatedText';

export const FirstBlock = () => {
  const { t } = useTranslation();

  return (
    <section
      className=" relative -z-10 p-10 flex justify-around w-full items-center flex-col lg:flex-row min-h-[80vh] bg-[url('/src/assets/images/first.jpg')] bg-cover gap-7 md:bg-fixed bg-scroll rounded-block "
      id="home">
      <h2 className="relative text-black z-10 text-5xl font-bold leading-snug md:leading-loose text-center md:text-left">
        <AnimatedText duration={0.4} position={-200}>
          {t('innovate')}&nbsp;
        </AnimatedText>
        <AnimatedText duration={0.4} position={-200}>
          {t('transform')}&nbsp;
        </AnimatedText>
        <AnimatedText duration={0.8} position={-200}>
          {t('succeed')}&nbsp;
        </AnimatedText>
        <BottomAnimatedText
          duration={0.4}
          className={'inline-block text-7xl leading-normal text-white'}>
          {t('together')}
        </BottomAnimatedText>
      </h2>
      <p className="relative z-10 font-semibold text-black text-2xl w-full md:w-full">
        {t('slogan')}
      </p>

      <div className="absolute bg-teal-400 opacity-70 bottom-0 top-0 left-0 right-0 rounded-block"></div>
    </section>
  );
};
