import fetchHIWClinic from '@/service/get-how-it-works-clinic';
import fetchFaqsContent from '@/service/get-faq';
import fetchFormContactContent from '@/service/get-form-contact';
import { useQuery } from 'react-query';
import { useLanguage } from '@/context/LanguageContext';

export const getHIWContent = async (language: string) => {
  const [data, faqsData, formData] = await Promise.all([
    fetchHIWClinic({
      locale: language,
      populate: 'deep'
    }),
    fetchFaqsContent(
      {
        locale: language
      },
      'how-it-works-clinics'
    ),
    fetchFormContactContent({
      locale: language,
      populate: 'deep'
    })
  ]);

  const formContactData = {
    ...data,
    faqsData,
    formData
  };
  return formContactData;
};

const useHIWClinicContent = (initialData: any) => {
  const { language } = useLanguage();

  const rest = useQuery({
    queryKey: ['how-it-works-content'],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    queryFn: async () => await getHIWContent(language)
    // initialData
  });
  return rest;
};

export default useHIWClinicContent;
