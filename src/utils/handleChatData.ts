export function handleChatData(text: string) {
  let remain = ''
  const data = text
    .split('\n\n')
    .filter((item) => {
        if( item !== undefined && item !== null && item.trim() !== ''){
            try {
                JSON.parse(item);
                return true;
            } catch(e) {
                remain = item;
            }
        }
        return false;
    })
    .map((d) => {
      return JSON.parse(d)
    })
    return {
        data: data,
        remain: remain
    }
}
