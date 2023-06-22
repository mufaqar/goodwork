"use client"
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Page_Banner from '../components/page-banner';
import Link from 'next/link';
import Image from 'next/image';
import Author from '../../../public/images/user.png';
import Support from '../../../public/images/support.png';

const Question_Answer_Detail = () => {
    return (
        <main>
            <Header />
            <Page_Banner
                title="Q&A"
                image="/images/qa-bg.png"
            />
            <section className="py-16">
                <div className='container mx-auto px-4'>
                    <div className='flex gap-1 justify-between mb-5'>
                        <Link href="/question-answer" className='bg-darkGreen hover:bg-white md:px-[30px] px-1 md:py-[10px] py-0 rounded-[40px] md:text-lg text-xs font-medium text-white hover:text-darkGreen border border-darkGreen'>
                            Back to List
                        </Link>
                    </div>
                    <div className='bg-[#F6FAFE] md:p-12 p-5 rounded-[28px] max-w-[1042px]'>
                        <div className='flex justify-between'>
                            <h2 className='md:text-2xl text-base font-medium text-darkBlue'>
                                Issue with simply Sync PW v3.7
                            </h2>
                            <div className='flex gap-2 items-center'>
                                <Image src={Author} alt="uset" />
                                <p className='grid'>
                                    <span className='md:text-lg text-base font-medium text-darkBlue'>
                                        Raphael <span className='text-sm font-medium text-darkBlue/50'>
                                            . 9/13/2019
                                        </span>
                                    </span>
                                    <span className='text-sm font-medium text-darkBlue/50'>
                                        Member
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='h-[1px] bg-darkBlue/10 my-5'></div>
                        <div>
                            <p className='text-lg font-normal text-darkBlue mb-3'>
                                Hello,
                            </p>
                            <p className='text-lg font-normal text-darkBlue mb-3'>
                                We habe installed the new Simply Sync PW version 3.7 on a Windows Server 2016.
                            </p>
                            <p className='text-lg font-normal text-darkBlue mb-3'>
                                For some users, we have a strange error. On each Sync we reveice errors, but the errors does not always occur on the same users.
                            </p>
                            <p className='text-lg font-normal text-darkBlue'>
                                example : [username1] Error occurred. sAMAccountName,ꤰ�䜡ꌽ↌螊㵙럡洍ꍃሐ擳遷精垂ྋ뛕쭎�䘬�㙵ଏ膄周䂏붤覒꽑멯ꢇ蕂蝨 鬀䶊ۼ笢鷒ᰟᄵ㼡䏬�쮃賿몧╈꼹䩼ᙪ倉濸೅聃蘺묐逌̀☭奞ﺠ㖇⁪⋓㊼弃퍥窶嵱骹䅗돡৳겻痵�쬞꿏㪓ར【뗿氀涗쎒鰆鯽珱飸痋⬣临ꮵ㩍뽘迠�⬁䷥˯弩䡈傰᷿ 䖜챣ⵋ硶豤浅쌊潭볩쎻⎉鞺⾎ớ薄᭟㍭෸꼀ҫ⓫鹰茋赈倸᪴↜়㤰⒀ตⶃῘ䱟蔔ꍈ矰㏟犁曛垛⚘ຯ쪫잟톻绊㾢験餋ꢉᰵꁬ쾠엶숯윃ໝ댅㐫८꫐ꈙ⁺뢅ớ昂険໽캩뫷ᅈ끶䴹⹸ⸯ曆㿦蒆익蚰ⵢ�쒓虓㓬娮秺芯娡㢨ᩱ�糼嵠ꮆ똤냋댛냂㑵⬒䐎鵬彶ꯧ탘뾪熆ᘃꢞ럋赪츿벝륅㷠Ꮖ鐚七횪�鉫픦醂率ﮭ걉年ⳗ␪㤖晖뵍⎟陃Ⱎ䄥善ԡ칱춵妎π핓筟縋ﶒꠋ屝媓濎㣆癈瘫訣皩⼣ᓸ襭燗恋䖙ф趝㿳ꚁ쬒〫ꋱ旲yઞ旯뿢蟊꣎⎀ꏼꃡ鱙먲쁽ﮋ绷㑓뚧輦坻륲ꂟꔘ⟥닦ᰛ៿긳ꃍ䅷夎撱տ೑춗₠�朳ᵒ魷傓ꊆ嫧댸、ð�뛕㞛ඊ㹋濍眷ᵕ雲螺㺸쉖筽㬵眆╘葉㷞넌⫡၆䃶响炁ᖊᑲ፸鋉钳墉패쎵섢风�霤礆鱆ܹ솮悴쮜⠁沈岑쓮㎨힩嬗췫⧘櫟ꁈꢋ᱑᛭벴苴ⱕ쀚玴菕턨벏�ḣ赩≰悘⧡훂嘨ꠎꍯ䙡髥쉖䤆섢䁫紏阾蚣�舻틖酳垤ꨒቝ礂⌃稱㦢䕏藊袓䖐༗턩኿䄠ꬉͯ㉤䵭㺤황州釖騬��鰡쏭ꕣ䅎ⶏ㦋༨ᓷꬬ⏂▵⬼ꂸ䘒乊욚ᘵ呾㣕꺹躊뢡띤ʨ༇㑝䌋꾱─겼奓㤊�郴✶堋毼䰏到銴펷䈣䆬腷蓓䵽㚠ᮒꆞ彈頕涴诼㳆댝〨삿�蒭㘎薻ﵳ뤗讇鳐໩૏◵Ǻỏ驿鵹谓綞ñ䘉钒雥琄鳵솎쑝妉⍐⟗黿ꏍ횬⦁痨㎻聯괓�Ⓥ揑⤐譈심䢛９䵿⺟쀉㖚⼦娎穐꘍淬ë丨䔙ꯧ퐨踂읹蛚ፄૠ춥븯较ʷ쫴육崜箄⬿䜥꽉쳶࿍慯愵紏瀕☌䋌旦꼙岃㗻ꐁ띓爬᫘靣ꑃ駀【䂾⢚牭냽Ⲷ濓笅蛿ｨ娦ᙫ춨ଛ鎎诀Ǔ軲ꢋ￘１㞚㨸‣馺ֳ浼➴䦮⦿탦��췝覆㩎瑔逓鹇箻깃ࣥ沀弾握㖍࿚諠튜頦㩯핇㻿㚎힋払샜湋翑媥싋譊戰뀒莒ⴛጩ຦擨肁꿜肣웢撥퐙ấԣ滃옿셱朹남‬쯕䉌ꤸꏖ猄疂믥ᦉ⣌氿�⺝侬갊㍑제葰毶援ᘬᇕ佘ᦓ⊘賽⤇븃⯌ֲ窸镛�ܼ稡ᡰ閈⁬⽇暀뻨ⷕ鹐ꄦ⤡ᴣᦵ쌰᧡맕ﱼ閻轉홀澺雊㻁⩰舔牗⭾�렑羹㳽㐕ৌ�ऺ컁⨘桯켎㍹㬷疬錟ⴋ⇽移驴⏂∮䷟�烁�ꪾ叔�ꧼ㑦꤈襺麟褻ꚻꮢ츌贖ﵠ딴鏄삲㌅霆盌傾녺ҵ柧ꗠ䫐㹉䧪䧢곟췖쫳㔁▸ﰱ⠧ᔔ㰼듦顎ꛇ禱竀ͯ暽ℛ公꩗�뼺쑚훸䃙奤�ᥥ箧ꇐች㥒驪謅₊ꁤ㝍⒇虳뤑�ᐐ躕齑抨⧻罙덺༠쓵㰏�⫴֪バ᎞㪧쉯⬽ㄑ존᫨镒ᒾ斗䈷밍ﶚϺ�,syncuser@domain.corp,Data at the root level is invalid. Line 1, position 1.
                            </p>
                        </div>
                    </div>
                    <div className='bg-[#F3F3F3] md:p-12 p-5 rounded-[28px] max-w-[1042px] md:ml-auto mt-7'>
                        <div className='flex justify-between'>
                            <h2 className='md:text-2xl text-base font-medium text-darkBlue'>
                                re: Issue with simply Sync PW v3.7
                            </h2>
                            <div className='flex gap-2 items-center'>
                                <Image src={Support} alt="uset" />
                                <p className='grid'>
                                    <span className='md:text-lg text-base font-medium text-darkBlue'>
                                        Support <span className='text-sm font-medium text-darkBlue/50'>
                                            . 3/3/2021
                                        </span>
                                    </span>
                                    <span className='text-sm font-medium text-darkBlue/50'>
                                        Member
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='h-[1px] bg-darkBlue/10 my-5'></div>
                        <div>
                            <p className='text-lg font-normal text-darkBlue mb-3'>
                                Please try to use run as administrator to open the tool.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Question_Answer_Detail