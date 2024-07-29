let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Nggk'
  if (isAdmin) throw `*𝑯𝒐𝒍𝒂 𝑪𝒓𝒆𝒂𝒅𝒐𝒓, 𝑼𝒔𝒕𝒆𝒅 𝒀𝒂 𝑬𝒔 𝑨𝒅𝒎𝒊𝒏 𝑫𝒆𝒍 𝑮𝒓𝒖𝒑𝒐*`
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
handler.command = /^admin.|atad|autoadmin$/i
handler.rowner = true
handler.botAdmin = true
export default handler
