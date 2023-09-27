export const toMarkup = (text: string): string => {
  text = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
  text = text.replace(/__(.*?)__/g, '<u>$1</u>');
  text = text.replace(/~~(.*?)~~/g, '<i>$1</i>');
  text = text.replace(/--(.*?)--/g, '<del>$1</del>');
  text = text.replace(/<<(.*?)>>/g, "<a href='$1'>Link</a>");
  return text;
};
