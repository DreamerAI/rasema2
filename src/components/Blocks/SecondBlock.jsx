import { useTranslation } from 'react-i18next';

export const SecondBlock = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 p-8 rounded-block text-center md:text-left mt-10" id="about">
      <h2 className="text-4xl font-bold mb-4">{t('whatWeDo')}</h2>
      <div className="flex flex-col md:flex-row gap-5">
        <p className="text-base md:text-lg mb-4 w-full md:w-1/2">{t('whatWeDo1')}</p>
        <p className="text-base md:text-lg mb-4 w-full md:w-1/2">{t('whatWeDo2')}</p>
      </div>
    </section>
  );
};
