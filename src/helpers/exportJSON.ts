export const exportData = () => {
  const link = document.createElement('a');
  link.href = 'http://localhost:8080';
  link.download = 'data.json';

  link.click();
};
