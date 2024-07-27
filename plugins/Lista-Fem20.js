const handler = async (m, {conn}) => {
  m.reply(global.Fem20);
};
handler.command = /^(Fem20)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Fem20 = ` 
🌺 Lista 4 VS 4 Fem 🌺

🕘 Horario:
🇲🇽 8:00 PM
🇨🇴 9:00 PM

         Jugadoras

🌸- 
🌸- 
🌸- 
🌸- 

          Suplentes

🌼- 
🌼- 

 Donadora: 

🌺-
`;
