const handler = async (m, {conn}) => {
  m.reply(global.Masc22);
};
handler.command = /^(Masc22|Masc22)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Masc22 = `
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
