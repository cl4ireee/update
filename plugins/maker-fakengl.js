/*
📌 Nama Fitur: Fake ngl
🏷️ Type : Plugin ESM
🔗 Sumber : https://whatsapp.com/channel/0029VaxvdhJ6buMSjkRBNR2d
✍️ Convert By ZenzXD
📧 Req : Dari tellonym
*/

import fetch from 'node-fetch';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  let [title, ...teks] = args;
  if (!title || teks.length === 0) throw `Masukkan title dan text!\n\nContoh:\n${usedPrefix + command} Anonymous Chat haii bang`;

  let textParam = teks.join(' ');
  let api = `https://flowfalcon.dpdns.org/imagecreator/ngl?title=${encodeURIComponent(title)}&text=${encodeURIComponent(textParam)}`;

  try {
    let res = await fetch(api);
    if (!res.ok) throw 'Gagal mengambil gambar dari API!';
    let buffer = await res.buffer();

    await conn.sendFile(m.chat, buffer, 'ngl.png', `Title: ${title}\nText: ${textParam}`, m);
  } catch (e) {
    console.error(e);
    m.reply('Terjadi error saat mengambil gambar. Coba lagi nanti.');
  }
};

handler.command = /^ngl$/i;
handler.help = ['ngl <title> <text>'];
handler.tags = ['maker'];

export default handler;
