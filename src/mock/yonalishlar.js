import React from "react"
import {ReactComponent as Number_1} from '../assets/svg/number-1.svg'
import {ReactComponent as Number_2} from '../assets/svg/number-2.svg'
import {ReactComponent as Number_3} from '../assets/svg/number-3.svg'
import {ReactComponent as Number_4} from '../assets/svg/number-4.svg'
import {ReactComponent as Number_5} from '../assets/svg/number-5.svg'
import {ReactComponent as Number_6} from '../assets/svg/number-6.svg'
export const data = [
    {
        id: 1,
        title: 'Kutubxonalar tashkil etish',
        desc: 'Bu yo’nalishda 2 xil shaklda: yuridik va jismoniy shaxs sifatida ishtirok etish mumkin.',
        fullDesc: 'Bu yo’nalishda 2 xil shaklda: yuridik va jismoniy shaxs sifatida ishtirok etish mumkin.\n' +
            'Yuridikshaxs sifatida ishtirok etuvchilar o’zlariga tegishli bo’lgan tashkilot hududida yoki uning\n' +
            'qoshida xolis kutubxonalar tashkil etishlari mumkin. Bundan tashqari ular boshqa\n' +
            'tashabbuskorlarga kitoblar yetkazib berishlari yoki moliyaviy ko’mak berish imkoniyatlari\n' +
            'mavjud..\n' +
            'Jismoniyshaxs sifatida ishtirok etuvchilar loyihada o’zlari qarashli bo’lgan Mahalla Fuqarolar\n' +
            'Yig’ini yoki Yoshlar Ishlari Agentligi nazoratida amalga oshirishlari mumkin.',
        icon: <Number_1 className={'icon'} />
    },
    {
        id: 2,
        title: 'Kitobxonlik tashabbuslari',
        desc: 'Bu yo’nalish kitob o’qish madaniyatini aholi orasida, xossatan ayol-qizlar ichida targ’ib qilishga qaratilgandir.',
        fullDesc: `Bu yo’nalish kitob o’qish madaniyatini aholi orasida, xossatan ayol-qizlar ichida targ’ib\n' +
            'qilishga qaratilgandir.\n` +
            'Faollar quyidagi ko’rinishlarda loyihaga ko’mak berishlari mumkin:\n' +
            '➔ Kitobxonlik uchrashuvlari, muhokamalar, tanlovlar va shu kabi madaniy tadbirlar tashkil\n'+
            'etish\n'+
            '➔ Shayximiz Muhammad Sodiq Muhammad Yusuf asarlari asosida malakali mutaxassislar\n' +
            'tarafidan seminar-treninglar tashkil etish\n' +
            '➔ Ijtimoiy tarmoqlarda o’z kuzatuvchilariga ega bo’lgan faollar tarafidan video, surat yoki\n' +
            'matn shaklida kitob o’qishga chaqiruvlar\n' +
            '➔ Kitob o’qish salohiyati va kuchli taqriz yozish qobiliyatiga ega ishtirokchilar loyihaga\n' +
            'tegishli ko’rsatuvlarda intervyular berishlari ham shular jumlasidandir',
        icon: <Number_2 className={'icon'} />
    },
    {
        id: 3,
        title: 'Ilmiy faoliyat',
        desc: 'Bu yo’nalish Shayx Hazratlarining asarlari asosida ilmiy faoliyat olib borishga qaratilgan bo’lib',
        fullDesc: 'Bu yo’nalish Shayx Hazratlarining asarlari asosida ilmiy faoliyat olib borishga qaratilgan bo’lib,\n' +
            'unda quyidagicha ishtirok etish mumkin:\n' +
            '➔ Ilmiy maqola/ma\'ruzalar yozish\n' +
            '➔ Hazratning asarlarini boshqa tillarga tarjima qilish\n' +
            '➔ Hazratning asarlari asosida darsliklar tayyorlash\n' +
            '➔ Seminarlar, ilmiy konferensiyalar va boshqa ilmiy tadbirlarni o‘tkazish\n' +
            '➔ Xalqaro hamkorlik aloqalarini rivojlantirish',
        icon: <Number_3 className={'icon'} />
    },
    {
        id: 4,
        title: 'Media',
        desc: 'Bu yo’nalishda Shayx Hazratlarining media sohasida qilgan ishlarini keng targ’ib qilish bilan birgalikda Islom madaniyati va boy tarixiy merosini ommaga yoritish ko’zda tutiladi.',
        fullDesc: 'Bu yo’nalishda Shayx Hazratlarining media sohasida qilgan ishlarini keng targ’ib qilish bilan\n' +
            'birgalikda Islom madaniyati va boy tarixiy merosini ommaga yoritish ko’zda tutiladi. Unda\n' +
            'quyidagi ishlarni amalga oshirish mumkin:\n' +
            '➔ Hazratning shaxsiyatlari va qoldirgan meroslari asosida audio va video materiallar\n' +
            'tayyorlash\n' +
            '➔ Islom madaniyati, boy ilmiy merosini va ajdodlarimizning islom dini rivojiga qo‘shgan\n' +
            'hissalarini mediada yoritish\n' +
            '➔ Hazratning media sohasidagi ishlarini boshqa tillarga tarjima qilish',
        icon: <Number_4 className={'icon'} />
    },
    {
        id: 5,
        title: 'Mutaxassislar tayyorlash',
        desc: 'Bu yo’nalish turli sohalarda ayol-qizlar ta’limi, mutaxassisligi va ilmiy dasturlarini boyitishga qaratilgandir. Bu yo’nalishda ishtirok etuvchilar:',
        fullDesc: 'Bu yo’nalish turli sohalarda ayol-qizlar ta’limi, mutaxassisligi va ilmiy dasturlarini boyitishga\n' +
            'qaratilgandir. Bu yo’nalishda ishtirok etuvchilar:\n' +
            '➔ ijtimoiy ko’makka muhtoj ayol-qizlar\n' +
            '➔ moliyaviy qo’llab-quvvatlash istagidagi xolis insonlar\n' +
            '➔ o’z xizmati va hamkorligi bilan yordam beradiganlar bo’lishi mumkin\n' +
            'Bunda ko’makka muhtoj ayol-qizlar o’zlari haqida ma’lumot to’ldirishlari kerak bo’ladi.\n' +
            'Peshqadamlar Karvoni loyihasi ixlosmand hamkorlar va homiylar taklif qilgan\n' +
            'yordamni unga muhtoj opa-singillarimizga yetkazib turuvchi va ular o’rtasini\n' +
            'bog’lovchi bir ko’prik vazifasini o’taydi.',
        icon: <Number_5 className={'icon'} />
    },
    {
        id: 6,
        title: 'Qo’llab-quvvatlash',
        desc: 'Bu yo’nalish loyihaning umumiy rivoji uchun hissa qo’shishni istaganlar uchun bo’lib, ular:',
        fullDesc: 'Bu yo’nalish loyihaning umumiy rivoji uchun hissa qo’shishni istaganlar uchun bo’lib, ular:\n' +
            '➔ moliyaviy ko’mak berishlari\n' +
            '➔ kitoblar taqdim qilishlari\n' +
            '➔ o’zlariga tegishli bino hududidan joy ajratishlari\n' +
            '➔ loyihaga kerakli jihozlar taqdim qilishlari\n' +
            '➔ shaxsiy mehnat yoki hamkorlik asosida ishtirok etishlari mumkin\n' +
            'Bunda hissadorlar ma’lum yo’nalishni ko’rsatmasalar, qabul qilingan ko’makni loyiha egalari\n' +
            'o’zlari kerakli deb topgan sohaga yo’naltiradilar va yo’nalishlarga taqsim qiladilar.',
        icon: <Number_6 className={'icon'} />
    }
]
