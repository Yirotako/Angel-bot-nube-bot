const handler = async (m, {conn}) => {
  m.reply(global.Masc20);
};
handler.command = /^(Masc20|Masc20º)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Masc20 = `
🌟 Lista 4 VS 4 Masculino 🌟

🕘 Horario:
🇲🇽 8:00 PM
🇨🇴 9:00 PM

         Jugadores

🪐- 
🪐- 
🪐- 
🪐- 

          Suplentes

🌕- 
🌕- 

 Donador: 

💫-
`;
