import React, { useState, useEffect } from 'react'
import './css/content.css'
import './css/media.css'
import Header from './Header.jsx'

const initialStoryArr = [
  {
    title: 'Guru Baru',
    tags: ['Sekolah'],
    mark: false,
    story: `Seorang guru baru yang sangat bersemangat ingin memberikan kesan yang baik kepada murid-muridnya. Di hari pertama mengajar, ia bertanya, "Anak-anak, siapa di sini yang sudah pernah ke luar negeri?" Semua murid mengangkat tangan kecuali seorang anak. Guru itu pun heran, "Kenapa kamu tidak pernah ke luar negeri?" Anak itu menjawab dengan polos, "Saya kan ikan, Bu.`, 
  }, 
  {
    title: 'Ujian Mendadak',
    tags: ['Ujian', 'Sekolah'],
    mark: false,
    story: `Saat ujian mendadak, seorang siswa terlihat sangat gugup. Temannya menepuk pundaknya dan berbisik, "Tenang saja, pasti bisa." Si siswa menjawab dengan nada putus asa, "Gampang bilang aja, kalau kamu yang ujian, pasti sudah bawa kamus!"`, 
  },
  {
    title: 'Sopir Baru',
    tags: ['Taksi', 'Salah paham'],
    mark: false,
    story: `Seorang penumpang baru pertama kali naik taksi online. Ia bertanya pada sopirnya, "Pak, kenapa jalanan ini macet sekali?" Sopir itu menjawab santai, "Ya, Bu, ini kan jam sibuk. Apalagi kalau lagi ada demo atau konser, pasti tambah macet." Penumpang itu terdiam sejenak lalu bertanya lagi, "Lho, Pak, tadi Bapak bilang kalau Bapak ini sopir taksi, bukan dukun."`, 
  }, 
  {
    title: 'HP Hilang',
    tags: ['Pelupa'],
    mark: false,
    story: `Andi sedang mencari-cari HP-nya yang hilang. Ia sudah mencari ke seluruh sudut kamar, tetapi tidak juga ketemu. Ibunya yang melihatnya bertanya, "Nak, kamu nyari apa sih?" Andi menjawab dengan kesal, "HP, Bu. Masa iya Bu lupa?" Ibunya pun tertawa, "Kamu itu kalau lagi nyari sesuatu, sering lupa kalau punya mata."`, 
  }, 
  {
    title: 'Tiket Kereta',
    tags: ['Kereta'],
    mark: false,
    story: `Budi hendak membeli tiket kereta. Setelah antri panjang, akhirnya sampai gilirannya. Dengan gugup, ia bertanya pada petugas, "Mas, kalau mau ke bulan, naik kereta apa ya?" Petugas itu pun menjawab dengan sabar, "Mas, untuk ke bulan, biasanya naik roket."`, 
  }, 
  {
    title: 'Resep Masakan',
    tags: ['Memasak'],
    mark: false,
    story: `Ani sedang belajar memasak. Ia mengikuti resep yang ada di buku. Setelah selesai memasak, ia mencicipi masakannya dan langsung mengernyitkan dahi. Ibunya yang melihatnya bertanya, "Kenapa, Nak? Tidak enak?" Ani menjawab, "Enak, sih, Bu. Tapi kok rasanya aneh ya? Kayak bukan masakan." Ibunya tertawa, "Itu kan resep membuat kue, Nak, bukan nasi goreng."`, 
  }, 
  {
    title: 'Hewan Peliharaan',
    tags: ['Lucu', 'Kucing'],
    mark: false,
    story: `Cici ingin memelihara hewan. Ia meminta izin kepada ibunya untuk memelihara kucing. Ibunya mengizinkan dengan syarat, "Kalau kamu bisa rawat kucingnya dengan baik, boleh." Cici pun senang dan langsung membeli kucing. Namun, setelah beberapa hari, kucingnya hilang. Ibunya bertanya, "Kucingnya mana, Nak?" Cici menjawab, "Sudah saya kembalikan ke toko, Bu. Dia tidak mau diajak main."`, 
  }, 
  {
    title: 'Ulang Tahun',
    tags: ['Hadiah'],
    mark: false,
    story: `Dino sedang merayakan ulang tahunnya. Teman-temannya memberikan kado. Salah satu temannya memberikan kado yang sangat unik, yaitu batu bata. Dino pun bingung, "Kok dikasih batu bata sih?" Temannya menjawab, "Biar kamu bisa membangun masa depanmu."`, 
  }, 
  {
    title: 'Perpustakaan',
    tags: ['Buku'],
    mark: false,
    story: `Eka sedang membaca buku di perpustakaan. Tiba-tiba, ia melihat seorang anak kecil yang sedang menangis. Eka menghampiri anak itu dan bertanya, "Kenapa kamu menangis?" Anak itu menjawab, "Saya takut, Kak. Buku-buku ini bisa hidup."`, 
  }, 
  {
    title: 'Tidur malam',
    tags: ['Mimpi'],
    mark: false,
    story: `Fani bercerita kepada temannya tentang mimpinya semalam. "Tadi malam aku mimpi terbang," kata Fani. Temannya menjawab, "Wah, seru banget! Terus, kamu terbang ke mana?" Fani menjawab, "Ke kamar mandi, mau pipis."`, 
  }, 
  {
    title: 'Hujan',
    tags: ['Sedia payung sebelum hujan'],
    mark: false,
    story: `Gita sedang bermain di luar rumah. Tiba-tiba turun hujan. Gita berlari masuk ke dalam rumah sambil berteriak, "Aduh, hujan! Baju saya basah semua." Ibunya yang melihatnya tertawa, "Kan sudah diingatkan, kalau mau keluar bawa payung."`, 
  }, 
  {
    title: 'Jam Tangan',
    tags: ['Senang'],
    mark: false,
    story: `Hani punya jam tangan baru. Ia sangat senang dan terus-menerus melihat jam tangannya. Ibunya bertanya, "Kenapa sih kamu terus-terusan lihat jam?" Hani menjawab, "Saya mau lihat jarumnya jalan, Bu."`, 
  }, 
  {
    title: 'Ujian Matematika',
    tags: ['Ujian', 'Matematika'],
    mark: false,
    story: `Ika sedang mengerjakan soal matematika. Ia sangat kesulitan dengan salah satu soal. Ia bertanya kepada temannya, "Ini gimana caranya?" Temannya menjawab, "Gampang, tinggal hitung aja." Ika pun mencoba menghitung, tetapi tetap saja tidak bisa. Akhirnya ia menyerah dan berkata, "Ah, matematika itu susah banget!"`, 
  }, 
  {
    title: 'Komputer Baru',
    tags: ['Bukan robot'],
    mark: false,
    story: `Joko baru membeli komputer baru. Ia sangat senang dan langsung menyalakan komputernya. Namun, setelah beberapa saat, komputernya mati. Joko pun bingung, "Kok mati sih?" Ayahnya menjawab, "Itu namanya komputer, Nak, bukan robot. Kalau capek ya harus istirahat."`, 
  }, 
  {
    title: 'Kucing Malas',
    tags: ['Kucing', 'Lucu'],
    mark: false,
    story: `Kucing milik Kiki sangat malas. Setiap hari hanya tidur dan makan. Kiki sudah berusaha mengajaknya bermain, tetapi kucingnya tetap saja malas. Kiki pun kesal dan berkata, "Kamu itu kucing atau karpet sih?"`, 
  }
];

function Content() {


  const [storyArr, setStoryArr] = useState(() => {  
    const storedStoryArr = localStorage.getItem('storyArr');  
    return storedStoryArr ? JSON.parse(storedStoryArr) : initialStoryArr;  
  });  

  const [openedStory, setOpenedStory] = useState(0);
  const [isPopupVisible, setPopupVisibility] = useState(false);

  useEffect(() => {  
    localStorage.setItem('storyArr', JSON.stringify(initialStoryArr));  
  }, [storyArr]);  

  const markAsRead = (index) => {
    const newStoryArr = [...storyArr];  
    newStoryArr[index].mark = !newStoryArr[index].mark;  
    setStoryArr(newStoryArr);  
  }

  const checkMark = (index) => {
    return {
        backgroundColor: storyArr[index].mark ? '#008000' : 'red',
    };
  };

  const openStory = (i) => {
    setPopupVisibility(true);
    setOpenedStory(i);
    markAsRead(i);
  }

  const closePopup = () => {
    setPopupVisibility(false)
  }
 
  console.log(storyArr[openedStory].title)
  return (
    <>
    <div className={`${isPopupVisible ? 'popup-open' : ''}`}>
      <Header />
      <div className='container'>
        {storyArr.map((article, index) => (
          <div className="article-card" key={index}>
            {/* Put an image so its more interesting */}
            <div onClick={() => openStory(index)}>
              <div className='article-image'>Placeholder</div>
              <p className="title">{article.title}</p>
            </div>
            <div className="tags">
              <div className='tag-div'>
                {article.tags.map((tag, tagIndex) => (
                  <div className="tag-name" key={tagIndex}>{tag}</div>
                ))}
              </div>

              <button onClick={() => markAsRead(index)} style={{ ...checkMark(index) }} className='mark-button' title='Click to mark as read'></button>
            </div>
          </div>
        ))}
      </div>
    </div>

      {isPopupVisible && 
        <div className="story-popup">
          <div>
            <button onClick={closePopup}>x</button>
            <p className="story-title">{storyArr[openedStory].title}</p>
          </div>
          
          <p className='story-content'>{initialStoryArr[openedStory].story}</p>
        </div>
      }
    </>
  )
}

export default Content