const handler = async (m, {conn}) => {
  m.reply(global.Mixto20);
};
handler.command = /^(Mixto20)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Mixto20 = `
☁️ Lista 4 VS 4 Mixto ☁️

🕘 Horario:
🇲🇽 8:00 PM
🇨🇴 9:00 PM

         Jugadorxs

❄️- 
❄️- 
❄️- 
❄️- 

          Suplentes

💦- 
💦- 

 Donador: 

⛄-
`;
