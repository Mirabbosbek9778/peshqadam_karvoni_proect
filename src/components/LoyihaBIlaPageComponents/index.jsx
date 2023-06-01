import React, {useEffect} from 'react'
import Container from './style'

const LoyihaBIlaPageComponents = () => {
    useEffect(()=> {window.scrollTo(0,0)}, [])
    return(
        <Container>
            <Container.Inset>
                <div className="line">
                    <div className="line_block-1"></div>
                    <div className="line_block-2"></div>
                    <div className="line_block-3"></div>
                    <div className="line_block-4"></div>
                </div>
                <Container.StartComponent />
                <br/><br/><br/><br/>
                <p>
                    <span className="mainTitle">Peshqadamlar Karvoni</span> &nbsp;&nbsp;
                    <span className={'mainSubTitle'}>loyihasi bilan tanishuv</span>
                </p>
                <br/>
                <p className={'title'}>27.11.2022</p>
                <br/><br/><br/><br/><br/>
                <p className={'title aqua bold'}>Odinaxon Muhammad Sodiq</p>
                <p>Loyiha rahbari</p>
                <br/><br/><br/><br/><br/><br/>
                <p className="title red">Kirish</p>
                <p className="desc">Assalomu alaykum, hurmatli vatandoshlar!</p>
                <p className="desc">Siz O‘zbekistonda kitob o‘qish madaniyatini rivojlanishtirish istagidamisiz?</p>
                <p className="desc">Balki, siz yurtimizda qiz va ayollarning ta'lim olishi va jamiyat hayotida manfaatli ishtirok</p>
                <p className="desc">etishlari uchun imkoniyatlar yaratilishi haqida qayg‘urarsiz?</p>
                <p className="desc">Yoki siz Shayximiz Muhammad Sodiq Muhammad Yusuf rahimahullohning ilmiy meroslarini</p>
                <p className="desc">keng ommaga yoyish yo‘llarini izlab yurgan ilm kishisidirsiz?</p>
                <p className="desc">Balki siz shunchaki o‘zi va atrofidagilarning ham aqlan, ham ruhan o‘sishlarini</p>
                <p className="desc">qo‘llab-quvvatlovchi tadbirkor shaxsdirsiz?</p>
                <p className="desc">Agar shunday bo‘lsa, bu loyiha aynan SIZ UCHUN!</p>
                <p className="desc bold">Ilmni o’ziga mash'ala tutgan Peshqadamlar Karvoni yo‘lga chiqadi va sizni o‘z safiga chaqiradi.</p>
                <br/><br/>
                <p className="title red">Yo‘nalishlar</p>
                <ol className={'bold'}>
                    <li>Kutubxonalar tashkil qilish va ularni kitoblar bilan ta’minlash</li>
                    <li>Kitobxonlikni rivojlantirish tashabbuslari</li>
                    <li>Ilmiy faoliyat</li>
                    <li>Media sohasi</li>
                    <li>Ayol-qizlarning kasbiy faoliyatda o’sishlarini qo’llab-quvvatlash</li>
                    <li>Loyihaga umumiy moddiy ko’mak berish</li>
                </ol>
                <br/><br/>
                <p className="title red">1 - yo‘nalish. Kutubxonalar tashkil qilish va ularni kitoblar bilan ta’minlash</p>
                <p className="desc">Bu yo’nalishda 2 xil shaklda: yuridik va jismoniy shaxs sifatida ishtirok etish mumkin.</p>
                <p className="desc"><span className={'aqua bold'}>Yuridik shaxs</span> sifatida ishtirok etuvchilar o’zlariga tegishli bo’lgan tashkilot hududida yoki uning</p>
                <p className="desc">qoshida xolis kutubxonalar tashkil etishlari mumkin. Bundan tashqari ular boshqa tashabbuskorlarga kitoblar yetkazib berishlari yoki moliyaviy ko’mak berish imkoniyatlari mavjud..</p>
                <p className="desc"><span className={'aqua bold'}>Yuridik shaxs</span> sifatida ishtirok etuvchilar loyihada o’zlari qarashli bo’lgan Mahalla Fuqarolar Yig’ini yoki Yoshlar Ishlari Agentligi nazoratida amalga oshirishlari mumkin.</p>
                <br/><br/>
                <p className="title red">2 - yo ‘ nalish. Kitobxonlikni rivojlantirish tashabbuslari</p>
                <p className="desc">Bu yo’nalish kitob o’qish madaniyatini aholi orasida, xossatan ayol-qizlar ichida targ’ib qilishga qaratilgandir.</p>
                <p className="desc">Faollar quyidagi ko’rinishlarda loyihaga ko’mak berishlari mumkin:</p>
                <p className="desc">➡️ &nbsp; Kitobxonlik uchrashuvlari, muhokamalar, tanlovlar va shu kabi madaniy tadbirlar tashkil etish</p>
                <p className="desc">➡️ &nbsp; Shayximiz Muhammad Sodiq Muhammad Yusuf asarlari asosida malakali mutaxassislar tarafidan seminar-treninglar tashkil etish</p>
                <p className="desc">➡️ &nbsp; Ijtimoiy tarmoqlarda o’z kuzatuvchilariga ega bo’lgan faollar tarafidan video, surat yoki matn shaklida kitob o’qishga chaqiruvlar</p>
                <p className="desc">➡️ &nbsp; Kitob o’qish salohiyati va kuchli taqriz yozish qobiliyatiga ega ishtirokchilar loyihaga tegishli ko’rsatuvlarda intervyular berishlari ham shular jumlasidandir</p>
                <br/><br/>
                <p className="title red">3 - yo‘nalish. Ilmiy faoliyat</p>
                <p className="desc">Bu yo’nalish Shayx Hazratlarining asarlari asosida ilmiy faoliyat olib borishga qaratilgan bo’lib, unda quyidagicha ishtirok etish mumkin:</p>
                <p className="desc">➡️ &nbsp; Ilmiy maqola/ma'ruzalar yozish</p>
                <p className="desc">➡️ &nbsp; Hazratning asarlarini boshqa tillarga tarjima qilish</p>
                <p className="desc">➡️ &nbsp; Hazratning asarlari asosida darsliklar tayyorlash</p>
                <p className="desc">➡️ &nbsp; Seminarlar, ilmiy konferensiyalar va boshqa ilmiy tadbirlarni o‘tkazish</p>
                <p className="desc">➡️ &nbsp; Xalqaro hamkorlik aloqalarini rivojlantirish</p>
                <br/><br/>
                <p className="title red">4 - yo‘nalish. Media sohasi</p>
                <p className="desc">Bu yo’nalishda Shayx Hazratlarining media sohasida qilgan ishlarini keng targ’ib qilish bilan birgalikda Islom madaniyati va boy tarixiy merosini ommaga yoritish ko’zda tutiladi. Unda quyidagi ishlarni amalga oshirish mumkin:</p>
                <p className="desc">➡️ &nbsp; Hazratning shaxsiyatlari va qoldirgan meroslari asosida audio va video materiallar tayyorlash</p>
                <p className="desc">➡️ &nbsp; Islom madaniyati, boy ilmiy merosini va ajdodlarimizning islom dini rivojiga qo‘shgan hissalarini mediada yoritish</p>
                <p className="desc">➡️ &nbsp; Hazratning media sohasidagi ishlarini boshqa tillarga tarjima qilish</p>
                <br/><br/>
                <p className="title red">5 - yo‘nalish. Ayol-qizlarning kasbiy faoliyatda o’sishlarini qo’llab-quvvatlash</p>
                <p className="desc">Bu yo’nalish turli sohalarda ayol-qizlar ta’limi, mutaxassisligi va ilmiy dasturlarini boyitishga qaratilgandir. Bu yo’nalishda ishtirok etuvchilar:</p>
                <p className="desc">➡️ &nbsp; ijtimoiy ko’makka muhtoj ayol-qizlar</p>
                <p className="desc">➡️ &nbsp; moliyaviy qo’llab-quvvatlash istagidagi xolis insonlar</p>
                <p className="desc">➡️ &nbsp; o’z xizmati va hamkorligi bilan yordam beradiganlar bo’lishi mumkin</p>
                <p className="desc">Bunda ko’makka muhtoj ayol-qizlar o’zlari haqida ma’lumot to’ldirishlari kerak bo’ladi.</p>
                <p className="desc bold">Peshqadamlar Karvoni loyihasi ixlosmand hamkorlar va homiylar taklif qilgan yordamni unga muhtoj opa-singillarimizga yetkazib turuvchi va ular o’rtasini bog’lovchi bir ko’prik vazifasini o’taydi.</p>
                <br/><br/>
                <p className="title red">6 - yo‘nalish. Loyihaga umumiy moddiy ko’mak berish</p>
                <p className="desc">Bu yo’nalish loyihaning umumiy rivoji uchun hissa qo’shishni istaganlar uchun bo’lib, ular:</p>
                <p className="desc">➡️ &nbsp; moliyaviy ko’mak berishlari</p>
                <p className="desc">➡️ &nbsp; kitoblar taqdim qilishlari</p>
                <p className="desc">➡️ &nbsp; o’zlariga tegishli bino hududidan joy ajratishlari</p>
                <p className="desc">➡️ &nbsp; loyihaga kerakli jihozlar taqdim qilishlari</p>
                <p className="desc">➡️ &nbsp; shaxsiy mehnat yoki hamkorlik asosida ishtirok etishlari mumkin</p>
                <p className="desc">Bunda hissadorlar ma’lum yo’nalishni ko’rsatmasalar, qabul qilingan ko’makni loyiha egalari o’zlari kerakli deb topgan sohaga yo’naltiradilar va yo’nalishlarga taqsim qiladilar.</p>
                <br/><br/><br/><br/>
                <p className="title">Ushbu yo’nalishlardan qaysi biri sizga eng ma’qul keldi?</p>
                <br/>
                <p className="title">O’z qobiliyatingiz bilan jamiyat rivojiga hissa qo’shing.</p>
                <p className="title bold">Peshqadamlar Karvoniga qo’shilish uchun <a href="https://docs.google.com/forms/d/1K3L76qTuT1smjryZhIGbrH_EKKaK5hfyPaQONDBEqQA/viewform?edit_requested=true">ro’yxatdan o’ting!</a></p>
                <br/><br/><br/>
                <p className="title">Alloh barchamizni xayrli amallarga muvaffaq qilsin. Ilm va muruvvat bilan xalqimizni buyuk qilsin!</p>


            </Container.Inset>
        </Container>
    )
}



export default LoyihaBIlaPageComponents