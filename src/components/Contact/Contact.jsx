import { useTranslation } from 'react-i18next';
import { FormInput } from '../UI/FormInput';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className=" w-full md:w-2/4 mt-10 bg-teal" id="contact">
      <h2 className="text-5xl font-bold mb-10 text-center">{t('contactText')}</h2>
      <p className="font-semibold text-lg">{t('formText')}</p>
      <form className="w-full bg-gray-100 rounded-block p-8 mt-5">
        <div className="flex md:flex-row flex-col gap-5">
          <FormInput text={t('firstName')} id="firstName" name="firstName" required={true} />
          <FormInput text={t('lastName')} id="lastName" name="lastName" required={true} />
        </div>

        <FormInput type="email" text="E-mail address" id="email" name="email" required={true} />
        <div className="flex md:flex-row flex-col gap-5">
          <FormInput text={t('region')} id="country" name="country" required={true} />
          <FormInput type="tel" text={t('phone')} id="phone" name="phone" required={true} />
        </div>

        <FormInput text={t('company')} id="company" name="company" required={true} />

        <div className="mb-4">
          <label className="block text-lg font-bold" htmlFor="relationship">
            {t('relation')}
          </label>
          <select
            id="relationship"
            name="relationship"
            className="w-full p-2 border border-gray-300 rounded"
            required>
            <option value="" disabled defaultValue>
              {t('optionDefault')}
            </option>
            <option value="Academic or Professional Researcher">{t('option1')}</option>
            <option value="Alliance Partner – Potential Alliance Partner">{t('option2')}</option>
            <option value="Current client">{t('option3')}</option>
            <option value="Current employee">{t('option4')}</option>
            <option value="Financial or Consulting Industry Analyst">{t('option5')}</option>
            <option value="Former Employee">{t('option6')}</option>
            <option value="Investor – Potential Investor">{t('option7')}</option>
            <option value="Job seeker">{t('option8')}</option>
            <option value="Journalist">{t('option9')}</option>
            <option value="New Supplier – Vendor">{t('option10')}</option>
            <option value="Potential client">{t('option11')}</option>
            <option value="Other">{t('option12')}</option>
          </select>
        </div>
        <FormInput text={t('other')} id="otherСompany" name="otherСompany" required={false} />

        <div className="mb-4">
          <label className="block text-lg font-bold" htmlFor="message">
            {t('textArea')}
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required></textarea>
        </div>

        <button
          type="submit"
          className="bg-teal-400 text-black hover:bg-teal-500 font-bold py-2 px-10 rounded-lg w-full">
          {t('submit')}
        </button>
      </form>

      <div className="mt-8 hidden" id="confirmationBlock">
        <p className="text-xl font-bold">{t('submitText')}</p>
      </div>
    </section>
  );
};
