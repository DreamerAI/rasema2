import { useTranslation } from 'react-i18next';
import { AnimatedText } from '../UI/AnimatedText';

export const FourthBlock = () => {
  const { t } = useTranslation();

  return (
    <section className="p-8 min-h-[70vh]">
      <h2 className="text-5xl font-bold text-center">{t('ourValues')}</h2>
      <div className="mt-10">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <li className="text-l p-5 rounded-block">
            <AnimatedText duration={0.6} position={-100}>
              <h3 className="text-3xl text-center font-semibold mb-5 gradient-primary">
                {t('excellence')}
              </h3>
              <p>{t('excellenceText')}</p>
            </AnimatedText>
          </li>
          <AnimatedText duration={0.6} position={100}>
            <li className="text-lg  p-5 rounded-block">
              <h3 className="text-3xl text-center font-semibold mb-5 gradient-primary">
                {t('innovation')}
              </h3>
              <p>{t('innovationText')}</p>
            </li>
          </AnimatedText>
          <AnimatedText duration={0.6} position={-100}>
            <li className="text-lg  p-5 rounded-block">
              <h3 className="text-3xl text-center font-semibold mb-5 gradient-primary">
                {t('integrity')}
              </h3>
              <p>{t('integrityText')}</p>
            </li>
          </AnimatedText>
          <AnimatedText duration={0.6} position={100}>
            <li className="text-lg  p-5 rounded-block">
              <h3 className="text-3xl text-center font-semibold mb-5 gradient-primary">
                {t('clientCentric')}
              </h3>
              <p>{t('clientCentricText')}</p>
            </li>
          </AnimatedText>
        </ul>
      </div>
    </section>
  );
};
