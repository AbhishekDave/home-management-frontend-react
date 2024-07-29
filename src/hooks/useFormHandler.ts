import { useState } from 'react';

interface FormSubmitHandler {
  (data: FormData): Promise<void>;
}

const useFormHandler = () => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, callback: FormSubmitHandler) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);

    try {
      await callback(formData);
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    }
  };

  return { handleSubmit, error };
};

export default useFormHandler;
