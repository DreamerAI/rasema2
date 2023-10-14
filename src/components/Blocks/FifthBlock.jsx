import { useTranslation } from 'react-i18next';
import { AnimatedText } from '../UI/AnimatedText';

export const FifthBlock = () => {
  const { t } = useTranslation();

  return (
    <section className=" min-h-[50vh]">
      <AnimatedText
        duration={0.6}
        position={-300}
        className={'bg-teal-400 p-10 rounded-block text-black break-words'}>
        <div className="text-center text-xl md:text-3xl font-semibold w-full flex flex-col gap-10">
          <p className="word-break md:absolute block ml-0 lg:ml-32"> {t('solutions')}</p>
          <p className="break-words text-center md:text-right mr-0 lg:mr-32">{t('approach')}</p>
          <p className="text-5xl md:text-7xl">{t('discover')}</p>
        </div>
        <p className="text-xl mt-10 ">{t('discoverText')}</p>
      </AnimatedText>
    </section>
  );
};
