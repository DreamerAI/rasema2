import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  let links = [
    { name: `${t('home')}`, link: '#home' },
    { name: `${t('about')}`, link: '#about' },
    { name: `${t('experience')}`, link: '#experience' },
    { name: `${t('faq')}`, link: '#faq' },
    { name: `${t('contact')}`, link: '#contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = () => {
    const newLanguage = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header className="sticky top-0 py-4">
      <nav className=" flex justify-between items-center md:px-4">
        <img
          src="/src/assets/icons/logo.svg"
          width={80}
          height={110}
          alt="Logo"
          className="flex z-[100]"
        />

        <div className="flex md:hidden z-[100] gap-5">
          <button
            className="bg-teal-400 ml-10 py-1 px-4 rounded-block"
            onClick={handleLanguageChange}>
            {i18n.language === 'en' ? 'EN' : 'RU'}
          </button>
          <div onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#2dd4bf">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </div>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[10] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? 'top-20 ' : 'top-[-490px]'
          }`}>
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="md:p-4 py-3 px-0 block border-b-2 border-transparent md:hover:border-teal-400 transitio-all duration-500">
                {link.name}
              </a>
            </li>
          ))}
          <li className="md:block hidden">
            <button
              className="bg-teal-400 ml-10 py-1 px-4 rounded-block"
              onClick={handleLanguageChange}>
              {i18n.language === 'en' ? 'EN' : 'RU'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
