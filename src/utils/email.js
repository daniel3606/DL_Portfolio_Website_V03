import emailjs from '@emailjs/browser';

/* Same service, template and public key as v03 — the EmailJS template maps
   exactly these four variables, so the payload shape must not drift. */
const serviceId = 'service_9m2beit';
const templateId = 'template_09uyns7';
const publicKey = 'IWauOUFwAXLu6hW7l';

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(serviceId, templateId, formData, { publicKey });
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, error };
  }
};

export default sendEmail;
