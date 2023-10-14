import { useTranslation } from 'react-i18next';

export const SixthBlock = () => {
  const { t } = useTranslation();

  return (
    <section className="p-8 mt-10" id="faq">
      <h2 className="text-5xl font-bold">{t('faqText')}</h2>

      <div className="mb-2 flex justify-between mt-10 md:flex-row flex-col gap-4">
        <h3 className="text-xl font-semibold w-full md:w-1/2">{t('faq1')}</h3>
        <p className="text-base w-full text-light-gray">{t('faq1Text')}</p>
      </div>

      <div className="mb-2 flex justify-between mt-10 md:flex-row flex-col gap-4">
        <h3 className="text-xl font-semibold w-full md:w-1/2">{t('faq2')}</h3>
        <p className="text-base w-full text-light-gray">{t('faq2Text')}</p>
      </div>

      <div className="mb-2 flex justify-between mt-10 md:flex-row flex-col gap-4">
        <h3 className="text-xl font-semibold w-full md:w-1/2">{t('faq3')}</h3>
        <p className="text-base w-full text-light-gray">{t('faq3Text')}</p>
      </div>
    </section>
  );
};
