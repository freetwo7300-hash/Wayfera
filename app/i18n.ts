import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Provide a default locale if undefined
  const validLocale = locale || 'en';
  
  // Load all message files from the language subfolder
  const messages = {} as Record<string, any>;
  
  // Import all JSON files from the language-specific folder
  const messageFiles = [
    'nav', 'hero', 'destinations', 'services', 'booking', 
    'footer', 'about', 'contact', 'legal'
  ];
  
  for (const file of messageFiles) {
    try {
      const imported = await import(`../messages/${validLocale}/${file}.json`);
      messages[file] = imported.default;
    } catch (error) {
      console.warn(`Failed to load message file: ${file}.json for locale: ${validLocale}`);
    }
  }
  
  return {
    locale: validLocale,
    messages
  };
});