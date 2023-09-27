import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

const ConstantContactForm: FC = () => {
  const router = useRouter();
  const [formId, setFormId] = useState('8b2db1fe-5a52-42cb-b5c6-414b4ae81c82');

  useEffect(() => {
    if (router.pathname.includes('get-early-access')) {
      setFormId('1bd2e875-3b43-4cee-bf90-f685dd4de777');
    }
  }, [router]);

  return <div className="ctct-inline-form" data-form-id={formId} style={{ display: 'none' }}></div>;
};

export default ConstantContactForm;
